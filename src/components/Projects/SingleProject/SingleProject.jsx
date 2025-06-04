import React from 'react';

import placeholder from '../../../assets/png/placeholder.png';
import { FaPlay, FaCode } from 'react-icons/fa';

import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  // Inline styles replacing makeStyles iconBtn and icon

  const iconBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: `2px solid ${theme.tertiary}`,
    color: theme.tertiary,
    transition: 'all 0.2s',
    cursor: 'pointer',
  };

  const iconBtnHoverStyle = {
    backgroundColor: theme.secondary,
    color: theme.primary,
    transform: 'scale(1.1)',
    border: `2px solid ${theme.secondary}`,
  };

  const iconStyle = {
    fontSize: '1.1rem',
    transition: 'all 0.2s',
  };

  // Hover effect inline needs React state - for simplicity, recommend CSS for hover

  return (
    <div
      key={id}
      className="singleProject"
      style={{ backgroundColor: theme.primary400 }}
    >
      <div className="projectContent">
        <h2
          id={name.replace(/\s+/g, '-').toLowerCase()}
          style={{ color: theme.tertiary }}
        >
          {name}
        </h2>
        <img src={image || placeholder} alt={name} />
        <div className="project--showcaseBtn">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="iconBtn" // add hover styles in CSS here
            aria-labelledby={`${name.replace(/\s+/g, '-').toLowerCase()} ${name
              .replace(/\s+/g, '-')
              .toLowerCase()}-demo`}
            style={iconBtnStyle}
          >
            <FaPlay
              id={`${name.replace(/\s+/g, '-').toLowerCase()}-demo`}
              className="icon"
              aria-label="Demo"
              style={iconStyle}
            />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
            aria-labelledby={`${name.replace(/\s+/g, '-').toLowerCase()} ${name
              .replace(/\s+/g, '-')
              .toLowerCase()}-code`}
            style={iconBtnStyle}
          >
            <FaCode
              id={`${name.replace(/\s+/g, '-').toLowerCase()}-code`}
              className="icon"
              aria-label="Code"
              style={iconStyle}
            />
          </a>
        </div>
      </div>
      <p
        className="project--desc"
        style={{
          background: theme.secondary,
          color: theme.tertiary,
        }}
      >
        {desc}
      </p>
      <div
        className="project--lang"
        style={{
          background: theme.secondary,
          color: theme.tertiary80,
        }}
      >
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default SingleProject;
