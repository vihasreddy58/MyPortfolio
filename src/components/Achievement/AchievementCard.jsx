import React from 'react';
import './Achievement.css';

function AchievementCard({ id, title, details, date, field, image, theme }) {
  return (
    <div className="achievement-card" style={{ backgroundColor: theme.primary30 }}>
      <div className="achievecard-content">
        <div className="achievecard-details1">
          <h2 style={{ color: theme.tertiary }}>{title}</h2>
          <p style={{ color: theme.tertiary80 }}>{details}</p>
        </div>

        <div className="achievecard-details2" style={{ color: theme.primary }}>
          <h5>{date}</h5>
          <div className="achievecard-field">
            <span style={{ fontWeight: 'bold', marginRight: 6 }}>📁</span>
            <h5>{field}</h5>
          </div>
        </div>
      </div>

      <div className="achievecard-imgcontainer">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default AchievementCard;
