import React from "react";
import "../styles/style.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div class="project-container">
        <div class="project-card">
          <img class="image" src={require("../photos/joinin.png")} />
          <h3>Project 1</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../photos/deja-brew.png")} />
          <h3>Project 2</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../photos/weather.png")} />
          <h3>Project 3</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../photos/code-quiz.png")} />
          <h3>Project 4</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../photos/tech-blog.png")} />
          <h3>Project 5</h3>
          <hr />
          <a href="">View App</a>
          <a href="">View Repo</a>
        </div>
        <div class="project-card">
          <img class="image" src={require("../photos/planner.png")} />
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
