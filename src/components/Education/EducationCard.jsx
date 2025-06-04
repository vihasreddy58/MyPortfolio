import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';

import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    // Inline styles for dynamic colors
    const cardStyle = {
        backgroundColor: theme.primary30,
        // No hover here, handled in CSS via class
    };

    const imgContainerStyle = {
        backgroundColor: theme.primary,
    };

    const startEndYearStyle = {
        color: theme.primary,
    };

    const courseStyle = {
        color: theme.tertiary,
    };

    const institutionStyle = {
        color: theme.tertiary80,
    };

    return (
        <div key={id} className="education-card" style={cardStyle}>
            <div className="educard-img" style={imgContainerStyle}>
                <img
                    src={theme.type === 'light' ? eduImgBlack : eduImgWhite}
                    alt=""
                />
            </div>
            <div className="education-details">
                <h6 style={startEndYearStyle}>
                    {startYear}-{endYear}
                </h6>
                <h4 style={courseStyle}>{course}</h4>
                <h5 style={institutionStyle}>{institution}</h5>
            </div>
        </div>
    );
}

export default EducationCard;
