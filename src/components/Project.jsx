import React from "react";
import bhaskar from "../assets/bhaskar.jpg";
import { Title } from "./Title";
import { Card } from "./Card";




export const Project = () => {

  const projects = [
    {
      image: bhaskar,
      github: "https://bhaskarajmeera.github.io/maheshframes/",
      url: "https://bhaskarajmeera.github.io/maheshframes/",
      title: "My Photograpy",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: bhaskar,
      github: "https://react-prank-calculator-olive.vercel.app/",
      url: "https://react-prank-calculator-olive.vercel.app/",
      title: "Prank Calculater",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: bhaskar,
      github: "https://bhaskarajmeera.github.io/contactlist/",
      url: "https://bhaskarajmeera.github.io/contactlist/",
      title: "Contact list App",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: bhaskar,
      github: "https://github.com",
      url: "",
      title: "My portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
  ];
  
  return (
   
    <section className="projects container" id="projects">
      <Title title="My Projects" />
      <div className="grid project-container">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
   
  );
};
