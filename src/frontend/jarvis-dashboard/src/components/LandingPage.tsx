import React from 'react';
import { login } from '../services/keycloak';
import { NeuralIcon, AnalysisIcon, SecurityIcon, LightningIcon } from './Icons';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const handleLogin = () => {
    login();
  };

  return (
    <div className="landing-container">
      {/* Animated background */}
      <div className="background-animation">
        <div className="neural-network">
          {[...Array(50)].map((_, i) => (
            <div key={i} className={`node node-${i % 5}`} />
          ))}
        </div>
        <div className="grid-overlay"></div>
      </div>

      {/* Main content */}
      <div className="landing-content">
        <div className="logo-section">
          <div className="jarvis-logo">
            <div className="logo-circle">
              <div className="logo-inner">
                <div className="pulse-ring"></div>
                <div className="ai-core"></div>
              </div>
            </div>
          </div>
          <h1 className="main-title">
            <span className="title-jarvis">JARVIS</span>
            <span className="title-subtitle">Artificial Intelligence Platform</span>
          </h1>
        </div>

        <div className="description-section">
          <p className="description">
            Advanced AI-powered platform for intelligent automation and data analysis.
            Connect to the future of artificial intelligence.
          </p>
        </div>

        <div className="login-section">
          <button className="login-button" onClick={handleLogin}>
            <span className="button-bg"></span>
            <span className="button-text">
              <span className="login-icon">
                <LightningIcon size={20} />
              </span>
              Initialize Connection
            </span>
            <div className="button-glow"></div>
          </button>
        </div>

        <div className="features-section">
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <NeuralIcon size={48} />
              </div>
              <h3>Neural Processing</h3>
              <p>Advanced machine learning algorithms</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnalysisIcon size={48} />
              </div>
              <h3>Real-time Analysis</h3>
              <p>Instant data processing and insights</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <SecurityIcon size={48} />
              </div>
              <h3>Secure Access</h3>
              <p>Enterprise-grade security protocols</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 3}`} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;