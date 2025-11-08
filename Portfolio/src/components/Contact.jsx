import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    gsap.from(".contact-links", { opacity: 0, duration: 1 });
  }, []);

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Let’s work together or discuss your next project!</p>

      <div className="contact-links">
        <a href="https://discord.com/users/YOURDISCORDID" target="_blank">
          Discord
        </a>
        <a href="https://instagram.com/YOURINSTAGRAM" target="_blank">
          Instagram
        </a>
        <Link to="/tos">Terms of Service</Link>
      </div>
    </section>
  );
};

export default Contact;
