import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';

function Experience() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-description">
                <h1 style={{ color: theme.primary }}>Certifications</h1>
                <div className="experience-grid">
                    {experienceData.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
