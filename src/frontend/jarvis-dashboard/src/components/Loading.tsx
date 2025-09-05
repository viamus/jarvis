import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="jarvis-loader">
          <div className="loader-ring">
            <div className="loader-inner-ring"></div>
            <div className="loader-pulse"></div>
          </div>
        </div>
        <h2 className="loading-title">JARVIS</h2>
        <p className="loading-text">Initializing Neural Networks...</p>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
      
      <div className="loading-background">
        <div className="circuit-pattern">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`circuit-line line-${i % 3}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;