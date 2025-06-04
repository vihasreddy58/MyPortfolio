import React, { useContext } from 'react';
import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData';
import AchievementCard from './AchievementCard';

function Achievement() {
  const { theme } = useContext(ThemeContext);

  if (!achievementData.achievements.length) return null;

  return (
    <section className="achievement" id="achievement" style={{ backgroundColor: theme.secondary }}>
      <div className="achievement-body">
        <h1 style={{ color: theme.primary }}>Achievements</h1>
        
      </div>

      <div className="achievement-cards">
        {achievementData.achievements.map((achieve) => (
          <AchievementCard
            key={achieve.id}
            id={achieve.id}
            title={achieve.title}
            details={achieve.details}
            date={achieve.date}
            field={achieve.field}
            image={achieve.image}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}

export default Achievement;
