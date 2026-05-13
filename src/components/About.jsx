import React from 'react';
import bhaskar from "../assets/bhaskar.jpg";
import { Title } from './Title';
export const About = () => {
  return (
    <>
    <section className="about" id="about">
      <Title title="About Me" />

      <div className="container flex about-conent">
        <div className="flex-center myImg">
          <img src={bhaskar} alt="prem's image" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Bhaskar Ajmeera</h2>
          <p>
            I am a results‑driven Full Stack Developer specializing in building responsive, scalable, and high‑performance web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, AWS, and REST API development. I work across the full development lifecycle — from UI/UX implementation to backend architecture and cloud deployment.
          </p>
          <p>
            I bring strong problem‑solving skills, clean coding practices, and a commitment to delivering reliable, production‑ready solutions. My experience includes developing dynamic front‑end interfaces, designing secure API endpoints, integrating databases, and deploying applications on AWS.
          </p>
          <p>Newcastle, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Cricket</span>
              <span>Netflix</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};
