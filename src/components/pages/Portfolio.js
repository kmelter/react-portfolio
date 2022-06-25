import React from "react";

export default function Portfolio() {
    return (
        <div class="work-examples">
          <section class="card" id="large-card">
            <h2>Diet App - Group Project 2</h2>
            <a href = "https://afternoon-refuge-37114.herokuapp.com/login" target="_blank">
              <img src="./assets/images/afternoon-refuge-37114.herokuapp.com_login (2).png" alt="diet app" />
            </a>
          </section>
          <section class="card">
            <h2>Crypto Dashboard - Group Project 1</h2>
            <a href = "https://kmelter.github.io/crypto-dashboard/" target="_blank">
              <img src="./assets/images/kmelter.github.io_crypto-dashboard_.png" alt="crypto dashboard" />
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
            <img src="../../assets/images/password-generator-screenshot.png" alt="" />
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