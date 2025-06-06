import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function EducationCard({ id, institution, course, startYear, endYear, image, status }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div key={id} className="education-card">
            <div className="educard-img">
                <img src={image} alt="education" />
            </div>
            <div className="education-details">
                <h4>{course}</h4>
                <h5>{institution}</h5>
                <h6 className={`education-status ${status === 'Pursuing' ? 'pursuing' : ''}`}>
                    {startYear}–{endYear} | {status}
                </h6>
            </div>
        </div>
    );
}

export default EducationCard;
