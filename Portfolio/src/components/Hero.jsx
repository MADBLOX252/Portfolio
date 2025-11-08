import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1.5 });
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-text gradient-text">MADBLOX252</h1>
      <p className="subtitle">Full Stack Developer / Creator</p>
      <a href="#gfx" className="scroll-hint">↓ Scroll</a>
    </section>
  );
};

export default Hero;
