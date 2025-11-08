import React, { useEffect } from "react";
import gsap from "gsap";

const Animations = () => {
  useEffect(() => {
    gsap.from(".animations-grid", { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <section id="animations">
      <h2>Animations</h2>
      <p>Smooth, cinematic motion created for characters, cutscenes, and showcases.</p>
      <div className="animations-grid">
        <video
          src="/videos/anim1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-card"
        ></video>
        <video
          src="/videos/anim2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-card"
        ></video>
      </div>
    </section>
  );
};

export default Animations;
