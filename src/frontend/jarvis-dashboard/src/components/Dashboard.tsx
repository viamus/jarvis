import React from 'react';
import { logout, getUserProfile } from '../services/keycloak';
import { 
  NeuralIcon, 
  AnalysisIcon, 
  SecurityIcon, 
  LightningIcon, 
  ChartIcon, 
  ConfigIcon, 
  PerformanceIcon, 
  ActivityBrainIcon 
} from './Icons';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const userProfile = getUserProfile();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="dashboard-logo">
              <div className="logo-pulse"></div>
              <span>JARVIS</span>
            </div>
          </div>
          <div className="user-section">
            <div className="user-info">
              <span className="welcome-text">Welcome back,</span>
              <span className="user-name">{userProfile?.preferred_username || userProfile?.name || 'User'}</span>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              <span>Disconnect</span>
              <span className="logout-icon">
                <LightningIcon size={16} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="status-card">
            <div className="card-header">
              <h3>System Status</h3>
              <div className="status-indicator online"></div>
            </div>
            <div className="card-content">
              <div className="metric">
                <span className="metric-label">AI Modules</span>
                <span className="metric-value">98% Active</span>
              </div>
              <div className="metric">
                <span className="metric-label">Processing Power</span>
                <span className="metric-value">85% Utilized</span>
              </div>
              <div className="metric">
                <span className="metric-label">Neural Networks</span>
                <span className="metric-value">12 Connected</span>
              </div>
            </div>
          </div>

          <div className="activity-card">
            <div className="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="card-content">
              <div className="activity-item">
                <div className="activity-icon">
                  <ActivityBrainIcon size={24} />
                </div>
                <div className="activity-details">
                  <span className="activity-title">Neural Analysis Complete</span>
                  <span className="activity-time">2 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <LightningIcon size={24} />
                </div>
                <div className="activity-details">
                  <span className="activity-title">Real-time Processing Started</span>
                  <span className="activity-time">5 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <SecurityIcon size={24} />
                </div>
                <div className="activity-details">
                  <span className="activity-title">Security Scan Completed</span>
                  <span className="activity-time">10 minutes ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="control-panel">
            <div className="card-header">
              <h3>Control Panel</h3>
            </div>
            <div className="card-content">
              <div className="control-grid">
                <button className="control-button">
                  <div className="control-icon">
                    <NeuralIcon size={32} />
                  </div>
                  <span>Neural Networks</span>
                </button>
                <button className="control-button">
                  <div className="control-icon">
                    <ChartIcon size={32} />
                  </div>
                  <span>Analytics</span>
                </button>
                <button className="control-button">
                  <div className="control-icon">
                    <ConfigIcon size={32} />
                  </div>
                  <span>Configuration</span>
                </button>
                <button className="control-button">
                  <div className="control-icon">
                    <PerformanceIcon size={32} />
                  </div>
                  <span>Performance</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="dashboard-background">
        <div className="data-streams">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`data-stream stream-${i % 3}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;