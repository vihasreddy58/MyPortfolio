import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { aboutData } from '../../data/aboutData'; // Make sure this is imported

import {
    FaGithub,
    FaLinkedin,
    FaInstagram
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import './Landing.css'; // This CSS file will contain all the styles below

function Landing() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='landing'>
            <div className='landing--container' style={{ backgroundColor: theme.secondary }}>
                {/* LEFT SIDE: Name and Socials */}
                <div className='landing--container-left'>
                    <div className='lcl--content'>
                        <h1 style={{ color: theme.tertiary, fontWeight: 'bolder' }}>{headerData.name}</h1>
                        <div className='landing--social-links-bottom'>
                            {socialsData.instagram && (
                                <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                                    <FaInstagram className='landing--social' style={{ color: theme.primary }} />
                                </a>
                            )}
                            {socialsData.github && (
                                <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                    <FaGithub className='landing--social' style={{ color: theme.primary }} />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                    <FaLinkedin className='landing--social' style={{ color: theme.primary }} />
                                </a>
                            )}
                            {socialsData.leetcode && (
                                <a href={socialsData.leetcode} target='_blank' rel='noreferrer'>
                                    <SiLeetcode className='landing--social' style={{ color: theme.primary }} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Title, Description, and Buttons */}
                <div className='landing--container-right'>
                    <div className='lcr--content' style={{ color: theme.tertiary }}>
                        <h6>{headerData.title}</h6>
                        <p>{headerData.desciption}</p> {/* This is the description from headerData */}
                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer'>
                                    <Button
                                        variant="outlined"
                                        className="resume-btn"
                                        sx={{
                                            borderColor: theme.primary,
                                            color: theme.primary,
                                            '&:hover': {
                                                backgroundColor: theme.tertiary,
                                                color: theme.secondary,
                                                borderColor: theme.tertiary,
                                            },
                                        }}
                                    >
                                        Download Resume
                                    </Button>
                                </a>
                            )}
                            <NavLink to='/#contacts' style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    className="contact-btn"
                                    sx={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary,
                                        borderColor: theme.primary,
                                        '&:hover': {
                                            backgroundColor: theme.secondary,
                                            color: theme.tertiary,
                                            borderColor: theme.tertiary,
                                        },
                                    }}
                                >
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION: Integrated into Landing component */}
            <section className="about" id="about" style={{ backgroundColor: theme.secondary }}>
                <div className="line-styling">
                    <div className="circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="line" style={{ backgroundColor: theme.primary }}></div>
                </div>

                
            </section>
        </div>
    );
}

export default Landing;