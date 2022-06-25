import React from "react";
import dietApp from "../../assets/images/afternoon-refuge-37114.herokuapp.com_login (2).png";
import cryptoDashboard from "../../assets/images/kmelter.github.io_crypto-dashboard_.png";


export default function Portfolio() {
    return (
        <div class="work-examples">
          <section class="card" id="large-card">
            <h2>Diet App - Group Project</h2>
            <img src={dietApp} alt=""></img>
            <a href="https://afternoon-refuge-37114.herokuapp.com/login" target="_blank">
                Deployed Application
            </a>
            <a href = "https://github.com/kmelter/full-stack-diet-app" target = "_blank">
                GitHub Link
            </a>
          </section>
          <section class="card">
            <h2>Crypto Dashboard - Group Project</h2>
            <img src={cryptoDashboard} alt="" />
            <a href="https://kmelter.github.io/crypto-dashboard/" target="_blank">
                Deployed Application
            </a>
            <a href = "https://github.com/kmelter/crypto-dashboard" target = "_blank">
                GitHub Link
            </a>
          </section>
          <section class="card">
            <h2>Tech Blog</h2>
            <img src="../../assets/images/stark-hollows-07616.herokuapp.com_(2).png" alt="" />
            <a href="https://stark-hollows-07616.herokuapp.com/" target="_blank">
                Deployed Application
            </a>
            <a href = "https://github.com/kmelter/tech-blog" target = "_blank">
                GitHub Link
            </a>
          </section>
          <section class="card">
            <h2>Note Taker</h2>
            <img src="../../assets/images/tranquil-coast-74175.herokuapp.com_.png" alt="" />
            <a href="https://tranquil-coast-74175.herokuapp.com/" target="_blank">
                Deployed Application
            </a>
            <a href = "https://github.com/kmelter/note-taker" target = "_blank">
                GitHub Link
            </a>
          </section>
          <section class="card">
            <h2>Weather Dashboard</h2>
            <img src="../../assets/images/weather-dashboard-screenshot.png" alt="" />
            <a href="https://kmelter.github.io/weather-dashboard/" target="_blank">
                Deployed Application
            </a>
            <a href = "https://github.com/kmelter/weather-dashboard" target = "_blank">
                GitHub Link
            </a>
          </section>
          <section class="card">
            <h2>Password Generator</h2>
            <img src="./Otis.jpg" alt="" />
            <a href="https://kmelter.github.io/password-generator/" target="_blank">
                Deployed Application
            </a>
            <a href = "https://github.com/kmelter/password-generator" target = "_blank">
                GitHub Link
            </a>
          </section>
        </div>
    );
}