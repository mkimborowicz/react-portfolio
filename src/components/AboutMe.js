import React from "react";
import "../styles/style.css";

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
<div class="about-me">
      <img class="image" src={require("../Assets/Avatar.jpg")} />
      <p>
        I am currently enrolled in University of Washington full stack web
        developement program! I was born and raised in Seattle, Washington.
        Being surrounded by many tech companies and opportunities sparked an
        interest in learning to code. In my journey so far I have had hands on
        experience learning HTML, CSS, Javascript, API's, Sequelize, Node,
        Handlebars, MonoDB, and react. I am horrible at writing these so I will
        write a better one later.
      </p>
      </div>
    </section>
  );
}
export default AboutMe;
