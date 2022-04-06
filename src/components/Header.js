import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div>LOGO</div>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>


      <div class="header-text">
      <h1>Maddy Kimborowicz</h1>
      <p>Full Stack Developer</p>
      </div>
    </header>
  );
}

export default Header;
