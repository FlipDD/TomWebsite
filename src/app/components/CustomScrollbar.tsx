'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';

const CustomScrollbar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const dragStartY = useRef(0);
  const dragStartScrollTop = useRef(0);

  const updateScrollbar = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling is needed
    const needsScrollbar = documentHeight > windowHeight;
    setShowScrollbar(needsScrollbar);

    if (!needsScrollbar) return;

    // Calculate scroll percentage
    const maxScroll = documentHeight - windowHeight;
    const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollPercent(Math.min(100, Math.max(0, percent)));

    // Calculate thumb height (proportional to viewport vs document height)
    const trackHeight = windowHeight - 16; // Account for padding
    const thumbHeightCalc = Math.max(20, (windowHeight / documentHeight) * trackHeight);
    setThumbHeight(thumbHeightCalc);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollTop.current = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const deltaY = e.clientY - dragStartY.current;
    const trackHeight = window.innerHeight - 16;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrollDelta = (deltaY / trackHeight) * scrollableHeight;
    const newScrollTop = Math.max(0, Math.min(scrollableHeight, dragStartScrollTop.current + scrollDelta));
    
    window.scrollTo(0, newScrollTop);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  }, []);

  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const trackHeight = rect.height;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const newScrollTop = (clickY / trackHeight) * scrollableHeight;
      window.scrollTo({ top: newScrollTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    updateScrollbar();
    
    const handleScroll = () => updateScrollbar();
    const handleResize = () => updateScrollbar();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateScrollbar]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  if (!showScrollbar) return null;

  const thumbTop = (scrollPercent / 100) * (window.innerHeight - thumbHeight - 16) + 8;

  return (
    <div className={`custom-scrollbar ${!showScrollbar ? 'hidden' : ''}`}>
      <div 
        className="custom-scrollbar-track"
        onClick={handleTrackClick}
      >
        <div
          className="custom-scrollbar-thumb"
          style={{
            height: `${thumbHeight}px`,
            top: `${thumbTop}px`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;