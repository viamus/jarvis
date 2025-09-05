import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Neural Processing Icon
export const NeuralIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="3" fill={color} opacity="0.8"/>
    <circle cx="5" cy="5" r="2" fill={color} opacity="0.6"/>
    <circle cx="19" cy="5" r="2" fill={color} opacity="0.6"/>
    <circle cx="5" cy="19" r="2" fill={color} opacity="0.6"/>
    <circle cx="19" cy="19" r="2" fill={color} opacity="0.6"/>
    <line x1="7" y1="6" x2="10" y2="10" stroke={color} strokeWidth="1" opacity="0.7"/>
    <line x1="17" y1="6" x2="14" y2="10" stroke={color} strokeWidth="1" opacity="0.7"/>
    <line x1="7" y1="18" x2="10" y2="14" stroke={color} strokeWidth="1" opacity="0.7"/>
    <line x1="17" y1="18" x2="14" y2="14" stroke={color} strokeWidth="1" opacity="0.7"/>
    <circle cx="12" cy="6" r="1.5" fill={color} opacity="0.5"/>
    <circle cx="12" cy="18" r="1.5" fill={color} opacity="0.5"/>
    <circle cx="6" cy="12" r="1.5" fill={color} opacity="0.5"/>
    <circle cx="18" cy="12" r="1.5" fill={color} opacity="0.5"/>
    <line x1="12" y1="7.5" x2="12" y2="9" stroke={color} strokeWidth="1" opacity="0.7"/>
    <line x1="12" y1="15" x2="12" y2="16.5" stroke={color} strokeWidth="1" opacity="0.7"/>
    <line x1="7.5" y1="12" x2="9" y2="12" stroke={color} strokeWidth="1" opacity="0.7"/>
    <line x1="15" y1="12" x2="16.5" y2="12" stroke={color} strokeWidth="1" opacity="0.7"/>
  </svg>
);

// Real-time Analysis Icon
export const AnalysisIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M8 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="6" r="3" fill={color} opacity="0.8"/>
    <circle cx="6" cy="18" r="3" fill={color} opacity="0.8"/>
    <line x1="3" y1="8" x2="21" y2="8" stroke={color} strokeWidth="0.5" opacity="0.5"/>
    <line x1="3" y1="16" x2="21" y2="16" stroke={color} strokeWidth="0.5" opacity="0.5"/>
    <line x1="8" y1="3" x2="8" y2="21" stroke={color} strokeWidth="0.5" opacity="0.5"/>
    <line x1="16" y1="3" x2="16" y2="21" stroke={color} strokeWidth="0.5" opacity="0.5"/>
    <rect x="10" y="10" width="4" height="4" fill={color} opacity="0.3"/>
  </svg>
);

// Secure Access Icon
export const SecurityIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" 
      stroke={color} 
      strokeWidth="1.5" 
      fill={color} 
      opacity="0.1"
    />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
    <path d="M12 9v6M9 12h6" stroke={color} strokeWidth="1" opacity="0.6"/>
    <rect x="10" y="14" width="4" height="3" rx="1" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="12" cy="15.5" r="0.5" fill={color}/>
  </svg>
);

// Lightning/Power Icon
export const LightningIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" 
      fill={color} 
      stroke={color} 
      strokeWidth="1"
      opacity="0.8"
    />
    <circle cx="6" cy="6" r="1" fill={color} opacity="0.6"/>
    <circle cx="18" cy="18" r="1" fill={color} opacity="0.6"/>
    <circle cx="20" cy="8" r="1" fill={color} opacity="0.6"/>
    <circle cx="4" cy="16" r="1" fill={color} opacity="0.6"/>
  </svg>
);

// Analytics/Chart Icon
export const ChartIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="1" fill="none"/>
    <rect x="6" y="12" width="3" height="6" fill={color} opacity="0.7"/>
    <rect x="10" y="8" width="3" height="10" fill={color} opacity="0.8"/>
    <rect x="14" y="10" width="3" height="8" fill={color} opacity="0.6"/>
    <circle cx="7.5" cy="11" r="1" fill={color}/>
    <circle cx="11.5" cy="7" r="1" fill={color}/>
    <circle cx="15.5" cy="9" r="1" fill={color}/>
    <line x1="7.5" y1="11" x2="11.5" y2="7" stroke={color} strokeWidth="1" opacity="0.5"/>
    <line x1="11.5" y1="7" x2="15.5" y2="9" stroke={color} strokeWidth="1" opacity="0.5"/>
  </svg>
);

// Configuration/Settings Icon
export const ConfigIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
    <path 
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" 
      stroke={color} 
      strokeWidth="1" 
      fill={color}
      opacity="0.2"
    />
    <circle cx="12" cy="12" r="1" fill={color}/>
  </svg>
);

// Performance/Speed Icon
export const PerformanceIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M8 12l2 2 4-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill={color} opacity="0.6"/>
    <line x1="12" y1="2" x2="12" y2="4" stroke={color} strokeWidth="1"/>
    <line x1="12" y1="20" x2="12" y2="22" stroke={color} strokeWidth="1"/>
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" stroke={color} strokeWidth="1"/>
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" stroke={color} strokeWidth="1"/>
    <line x1="2" y1="12" x2="4" y2="12" stroke={color} strokeWidth="1"/>
    <line x1="20" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1"/>
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" stroke={color} strokeWidth="1"/>
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" stroke={color} strokeWidth="1"/>
  </svg>
);

// Activity Brain Icon
export const ActivityBrainIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#00f5ff', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M9.5 2A2.5 2.5 0 007 4.5v.9c-.21.08-.4.18-.58.3A2.5 2.5 0 004 8.5a2.5 2.5 0 00.17 1.25A2.5 2.5 0 002 12.5a2.5 2.5 0 002.17 2.75A2.5 2.5 0 006.5 18 2.5 2.5 0 009 20.5h6a2.5 2.5 0 002.5-2.5 2.5 2.5 0 002.33-2.75A2.5 2.5 0 0022 12.5a2.5 2.5 0 00-2.17-2.75A2.5 2.5 0 0020 8.5a2.5 2.5 0 00-2.42-2.7c-.18-.12-.37-.22-.58-.3V4.5A2.5 2.5 0 0014.5 2h-5z" 
      stroke={color} 
      strokeWidth="1" 
      fill={color}
      opacity="0.2"
    />
    <circle cx="9" cy="8" r="1" fill={color}/>
    <circle cx="15" cy="8" r="1" fill={color}/>
    <circle cx="12" cy="12" r="1.5" fill={color}/>
    <path d="M9 14c1 1 3 1 4 0" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <circle cx="7" cy="11" r="0.5" fill={color} opacity="0.7"/>
    <circle cx="17" cy="11" r="0.5" fill={color} opacity="0.7"/>
  </svg>
);

export default {
  NeuralIcon,
  AnalysisIcon,
  SecurityIcon,
  LightningIcon,
  ChartIcon,
  ConfigIcon,
  PerformanceIcon,
  ActivityBrainIcon,
};