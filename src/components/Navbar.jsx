import React from 'react'

export const Navbar = () => {
  return (
    <>
    <header>
        <div class="name container flex ">
        <div class="logo flex">
            <div>Bhaskar Ajmeera</div>
            <div class="line">Soft.Engineer</div>
        </div>
        <div>
        <label for="hamburgerMenu">
          <i class="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburgerMenu"/>
        </div>
        <div class="menu">
            <ul class="flex navigation">
            <li><a href="#hero">
                Home</a></li>
            <li><a href="#skills"
                >Skills</a></li>
            <li><a href="#projects
                ">Projects</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contact">Conact us</a></li>
            </ul>
        </div>
        </div>
      </header>  
    </>
  );
};
