import React from 'react';
import "../styles/style.css";
import resume from "../Assets/Maddy Kimborowicz Resume.pdf"


function Footer() {
  return(
<footer>
<p>&copy;Copyright 2022 Maddy Kimborowicz</p>
<button><a href= {resume } download="Maddy Kimborowicz Resume">Download Resume</a></button>

 </footer>
  );
}

export default Footer;
