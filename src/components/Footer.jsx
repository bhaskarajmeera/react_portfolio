import React from 'react'

export const Footer = () => {
  return (
    <>
<footer className="flex-center">
            <div className="main-footer">
        <div className="top">
            <div className="links">
                <h3>links</h3>
<ul>
    <li><a href="">
        Home
    </a></li>
    <li><a href="">
        Skills
    </a></li>
    <li><a href="">
        Projects
    </a></li>
    <li><a href="">
        Contact
    </a></li>
</ul>
            </div>
            <div className="socials">
                <h3>Socials Links
                </h3>
<ul>
    <li><a href="">
        LinkedIn
    </a></li>
    <li><a href="">
      GitHub
    </a></li>
    <li><a href="">
        Facebook
    </a></li>
    <li><a href="">
        YouTube
    </a></li>
</ul>
            </div>
        </div>
        <p>
            &copy; Copy rights Reserved by Bhaskar Ajmeera
        </p>
        </div>
</footer>
{/* Up arrow  */}
<a href="#hero">
    <div className="goUp">
        <i className="fa-solid fa-circle-arrow-up"></i>
    </div> 
</a>
    </>
  )
}
