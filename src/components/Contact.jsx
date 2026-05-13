import React from "react";
import { Title } from "./Title";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Title title="Contact" />
      <div className="flex social">
        <a href="www.linkedin.com/in/bhaskarajmeera">
          <i className="fa-brands fa-linkedin" style={{ color: "blue" }}></i>
        </a>
        <a href="https://github.com/bhaskarajmeera">
          <i className="fa-brands fa-github" style={{ color: "black" }}></i>
        </a>
        <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube" style={{ color: "red" }}></i>
        </a>
        <a href="tel:+61412345678">
          <i className="fa-solid fa-mobile" style={{ color: "grey" }}></i>
        </a>
      </div>
      <h3>OR</h3>

      <div className="flex-center">
        <a href="mailto:youremail@gmail.com" className="email-section flex-center">
          <span>youremail@gmail.com</span>
          <div className="email-icon flex-center">
            <i className="fa-solid fa-paper-plane" style={{ color: "blue" }}></i>
          </div>
        </a>
      </div>
    </section>
  );
};
