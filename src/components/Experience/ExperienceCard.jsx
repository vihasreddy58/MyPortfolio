import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import certblack from '../../assets/svg/experience/certblack.svg';
import './Experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div key={id} className="experience-card" style={{ backgroundColor: theme.primary30 }}>
            <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                <img src={certblack} alt="certificate" />
            </div>
            <div className="experience-details">
                <h6 style={{ color: theme.primary }}>{startYear} - {endYear}</h6>
                <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
            </div>
        </div>
    );
}

export default ExperienceCard;
