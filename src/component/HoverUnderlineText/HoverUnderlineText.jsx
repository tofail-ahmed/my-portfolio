import React, { useState } from 'react';

const HoverUnderlineText = ({ text }) => {
      const [isHovered, setIsHovered] = useState(false);
      const [underlineWidth, setUnderlineWidth] = useState(0);

      const handleMouseEnter = () => {
            setIsHovered(true);
            setUnderlineWidth(100);
      };

      const handleMouseLeave = () => {
            setIsHovered(false);
            setUnderlineWidth(0);
      };

      return (
            <div
                  className="relative inline-block text-xl  text-lime-500"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
            >
                  <span
                        className={`transition-all ${isHovered ? 'underline' : ''}`}
                        style={{
                              fontWeight: isHovered ? 'bold' : 'normal',
                              textDecoration: isHovered ? 'none' : 'none',
                              transition: 'font-weight 0.5s, text-decoration 2s',
                              color: ' ',
                        }}
                  >
                        {text}
                  </span>
                  <span
                        className="absolute w-full h-0.5 text-xl bg-green-300 left-0 bottom-0"
                        style={{
                              transition: 'width 2s, opacity 2s', // Added opacity transition
                              width: `${underlineWidth}%`,
                              transformOrigin: 'left',
                              opacity: isHovered ? 1 : 0,
                        }}
                  />
            </div>
      );
};

export default HoverUnderlineText;
