import React from 'react';
import './RollingCube.css';

const RollingCube = () => {
  return (
    <div className="cube-track-container">
      {/* Track Line */}
      <div className="cube-track"></div>
      
      {/* Rolling Cube */}
      <div className="cube-wrapper">
        <div className="cube">
          {/* Front Face */}
          <div className="cube-face front">
            <svg viewBox="0 0 100 100" className="puzzle-pattern">
              <path d="M20,20 L50,10 L80,20 L50,30 Z" fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" strokeWidth="2"/>
              <path d="M50,30 L80,20 L80,50 L50,60 Z" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="2"/>
              <path d="M20,20 L50,30 L50,60 L20,50 Z" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2"/>
              <circle cx="50" cy="35" r="8" fill="rgba(16, 185, 129, 0.5)" stroke="#10b981" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Back Face */}
          <div className="cube-face back">
            <svg viewBox="0 0 100 100" className="puzzle-pattern">
              <rect x="15" y="15" width="30" height="30" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <rect x="55" y="15" width="30" height="30" fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" strokeWidth="2" rx="5"/>
              <rect x="15" y="55" width="30" height="30" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="2" rx="5"/>
              <rect x="55" y="55" width="30" height="30" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2" rx="5"/>
            </svg>
          </div>
          
          {/* Right Face */}
          <div className="cube-face right">
            <svg viewBox="0 0 100 100" className="puzzle-pattern">
              <polygon points="50,20 80,35 65,65 35,50" fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" strokeWidth="2"/>
              <polygon points="35,50 65,65 50,80 20,65" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2"/>
              <circle cx="50" cy="50" r="12" fill="rgba(236, 72, 153, 0.4)" stroke="#ec4899" strokeWidth="2"/>
            </svg>
          </div>
          
          {/* Left Face */}
          <div className="cube-face left">
            <svg viewBox="0 0 100 100" className="puzzle-pattern">
              <path d="M30,30 Q50,20 70,30 Q80,50 70,70 Q50,80 30,70 Q20,50 30,30" 
                    fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2"/>
              <path d="M40,40 L50,35 L60,40 L60,60 L50,65 L40,60 Z" 
                    fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="2"/>
            </svg>
          </div>
          
          {/* Top Face */}
          <div className="cube-face top">
            <svg viewBox="0 0 100 100" className="puzzle-pattern">
              <line x1="10" y1="50" x2="90" y2="50" stroke="#3b82f6" strokeWidth="3"/>
              <line x1="50" y1="10" x2="50" y2="90" stroke="#a855f7" strokeWidth="3"/>
              <circle cx="30" cy="30" r="10" fill="rgba(168, 85, 247, 0.4)" stroke="#a855f7" strokeWidth="2"/>
              <circle cx="70" cy="30" r="10" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" strokeWidth="2"/>
              <circle cx="30" cy="70" r="10" fill="rgba(236, 72, 153, 0.4)" stroke="#ec4899" strokeWidth="2"/>
              <circle cx="70" cy="70" r="10" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" strokeWidth="2"/>
            </svg>
          </div>
          
          {/* Bottom Face */}
          <div className="cube-face bottom">
            <svg viewBox="0 0 100 100" className="puzzle-pattern">
              <path d="M25,25 L75,25 L75,75 L25,75 Z M40,40 L60,40 L60,60 L40,60 Z" 
                    fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2" fillRule="evenodd"/>
              <polygon points="50,40 60,50 50,60 40,50" fill="rgba(168, 85, 247, 0.4)" stroke="#a855f7" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating particles around track */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
    </div>
  );
};

export default RollingCube;
