import React from 'react';
import { Bell } from 'lucide-react';
import './AlertBanner.css';

function AlertBanner() {
  return (
    <div className="alert-banner">
      <div className="alert-banner-content">
        <div className="alert-marquee">
          <span>
            <Bell size={16} className="alert-icon" />
            Admissions Open for 2026-27 — Apply Today! Limited seats available from Baby Class to 10th Standard.
          </span>
          <span>
            <Bell size={16} className="alert-icon" />
            Admissions Open for 2026-27 — Apply Today! Limited seats available from Baby Class to 10th Standard.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AlertBanner;