import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css';
import EducationCard from './EducationCard';
import { educationData } from '../../data/educationData';

function Education() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>
                        🎓 <span style={{ color: theme.primary }}>My</span> <span style={{ color: "#8000ff" }}>Education</span>
                    </h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            image={edu.image}
                            status={edu.status}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt="education art" />
                </div>
            </div>
        </div>
    );
}

export default Education;
