import React from 'react';
import '../styles/Contact.css';


function Contact() {
    return (
<section class="contact">

<div class="container">
  <h2>Contact Me</h2>
  <form target="_blank" action="https://formsubmit.co/maddykimborowicz@gmail.com" method="POST">
    <div class="form-group">
          <input type="text" name="name" placeholder="Name" required></input>
        </div>
          <input type="email" name="email" placeholder="Email" required></input>
    <div class="form-group">
      <textarea placeholder="Your Message" id="submit-btn" name="message" rows="5" required></textarea>
    </div>
    <button type="submit">Submit Form</button>
  </form>
</div>


</section>
);
}

export default Contact;