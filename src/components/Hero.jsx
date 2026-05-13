import React from "react";
import bhaskar from "../assets/bhaskar.png";

export const Hero = () => {
  return (
    <>
    <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I`m <span>Bhaskar Ajmeera</span>
            </div>
            <div className="tag">Soft. Engineer</div>
            <p>I am a results‑driven Full Stack Developer specializing in building responsive, scalable, and high‑performance web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, AWS, and REST API development.</p>
            <div>
              <a href={bhaskar} download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={bhaskar} alt="prem speaking" />
          </div>
        </div>
      </section>
    </>
  );
};

