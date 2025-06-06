import React, { useContext } from 'react';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills" id="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>
                    <span className="skillsIcon">💻</span> Skills
                    <span style={{ color: "#FFD700" }}> & Abilities</span>
                </h2>
            </div>

            <div className="skillsContainer">
                <div className="skill--grid">
                    {skillsData.map((skill, id) => (
                        <div className="skill--box" key={id}>
                            <img src={skillsImage(skill)} alt={skill} />
                            <h3>{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
