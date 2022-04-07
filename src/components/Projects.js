import React from "react";
import "../styles/style.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div class="project-container">
        <div class="project-card">
          <img class="image" src={require("../Assets/joinin.png")} />
          <h3>Project 1</h3>
          <hr />
          <a href="https://join-in-app.herokuapp.com/" target="blank">View App</a>
          <a href="https://github.com/kelseybrianne/full-stack-app" target="blank">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/deja-brew.png")} />
          <h3>Deja Brew</h3>
          <hr />
          <a href="https://lonewolfco.github.io/deja-brew/" target="blank">View App</a>
          <a href="https://github.com/lonewolfco/deja-brew" target="blank">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/weather.png")} />
          <h3>Project 3</h3>
          <hr />
          <a href="https://mkimborowicz.github.io/weather-dashboard/" target="blank">View App</a>
          <a href="https://github.com/mkimborowicz/weather-dashboard" target="blank">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/code-quiz.png")} />
          <h3>Project 4</h3>
          <hr />
          <a href="https://mkimborowicz.github.io/code-quiz/" target="blank">View App</a>
          <a href="https://github.com/mkimborowicz/code-quiz" target="blank">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/tech-blog.png")} />
          <h3>Project 5</h3>
          <hr />
          <a href="https://mk-tech-blog.herokuapp.com/" target="blank">View App</a>
          <a href="https://github.com/mkimborowicz/tech-blog" target="blank">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/planner.png")} />
          <h3>Project 6</h3>
          <hr />
          <a href="https://mkimborowicz.github.io/seize-the-day-planner/" target="blank">View App</a>
          <a href="https://github.com/mkimborowicz/seize-the-day-planner" target="blank">View Repo</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
