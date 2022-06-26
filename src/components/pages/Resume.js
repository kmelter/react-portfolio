import React from "react";
import resume from '../../assets/images/resumeScreenshot.PNG';

export default function About() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <div>Click on resume to download:</div>
            <a href="https://drive.google.com/file/d/18_6vrZ-qlRfnWFwcV8xjuHgqeu0OWPZ3/view?usp=sharing" target="_blank" rel="noreferrer">
                <img src={resume} alt="" />
            </a>
        </div>
    );
}