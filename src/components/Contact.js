import React from 'react';
import "../styles/style.css";


function Contact() {
    return (
<section id="contact">

<div class="container">
  <h2>Contact</h2>
  <p>Questions, Comments, want to collaborate? Feel free to contact me here.</p>
  <form target="_blank" action="https://formsubmit.co/maddykimborowicz@gmail.com" method="POST">
    <div class="form-group">
          <input type="text" name="name" placeholder="Name" required></input>
        </div>
          <input type="email" name="email" placeholder="Email" required></input>
    <div class="form-group">
      <textarea placeholder="Your Message" id="submit-btn" name="message" rows="10" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>



</section>
);
}

export default Contact;