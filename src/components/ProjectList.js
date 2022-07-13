import React from "react";

import dietApp from "../assets/images/afternoon-refuge-37114.herokuapp.com_login (2).png";
import cryptoDashboard from "../assets/images/kmelter.github.io_crypto-dashboard_.png";
import techBlog from "../assets/images/stark-hollows-07616.herokuapp.com_ (2).png";
import noteTaker from "../assets/images/tranquil-coast-74175.herokuapp.com_.png";
import weatherDashboard from "../assets/images/weather-dashboard-screenshot.png";
import passwordGenerator from "../assets/images/password-generator-screenshot.png";
import movieCuration from "../assets/images/movie-curation-icon.png";

const ProjectList = [
    {
        projectName: 'Diet App - Group Project',
        image: dietApp,
        deployedApp: 'https://afternoon-refuge-37114.herokuapp.com/login',
        gitHubPage: 'https://github.com/kmelter/full-stack-diet-app'
    },
    {
        projectName: 'Crypto Dashboard - Group Project',
        image: cryptoDashboard,
        deployedApp: 'https://kmelter.github.io/crypto-dashboard/',
        gitHubPage: 'https://github.com/kmelter/crypto-dashboard'
    },
    {
        projectName: 'MooVee App - Group Project',
        image: movieCuration,
        deployedApp: 'https://calm-hollows-62553.herokuapp.com/',
        gitHubPage: 'https://github.com/toddbauer86/moovee'
    },
    {
        projectName: 'Tech Blog',
        image: techBlog,
        deployedApp: 'https://stark-hollows-07616.herokuapp.com/',
        gitHubPage: 'https://github.com/kmelter/tech-blog'
    },
    {
        projectName: 'Note Taker',
        image: noteTaker,
        deployedApp: 'https://tranquil-coast-74175.herokuapp.com/',
        gitHubPage: 'https://github.com/kmelter/note-taker'
    },
    {
        projectName: 'Weather Dashboard',
        image: weatherDashboard,
        deployedApp: 'https://kmelter.github.io/weather-dashboard/',
        gitHubPage: 'https://github.com/kmelter/weather-dashboard'
    },
    {
        projectName: 'Password Generator',
        image: passwordGenerator,
        deployedApp: 'https://kmelter.github.io/password-generator/',
        gitHubPage: 'https://github.com/kmelter/password-generator'
    },
];

export default ProjectList;