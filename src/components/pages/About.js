import React from "react";
import selfPortrait from "../../assets/images/kmimage.PNG";

export default function About() {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <img src={selfPortrait} alt="" />
            <p>
            Graduated from Truman State University in May 2020 with a Bachelor of Science in Biology.
            Currently enrolled in a coding bootcamp through Washington University in Saint Louis, Missouri.
            </p>
        </div>
    );
}