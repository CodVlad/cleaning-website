import React from 'react';
import './EasyCleanLogo.css';

export default function EasyCleanLogo({ className = '' }) {
  return (
    <div className={`easyclean-logo ${className}`}>
      <span className="logo-easy">Easy</span>
      <span className="logo-clean">Clean</span>
    </div>
  );
}
