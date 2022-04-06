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
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/deja-brew.png")} />
          <h3>Project 2</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/weather.png")} />
          <h3>Project 3</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/code-quiz.png")} />
          <h3>Project 4</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/tech-blog.png")} />
          <h3>Project 5</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../Assets/planner.png")} />
          <h3>Project 6</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
