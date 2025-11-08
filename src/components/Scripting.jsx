import React, { useEffect } from "react";
import gsap from "gsap";

const Scripting = () => {
  useEffect(() => {
    gsap.from(".scripting-content", { opacity: 0, x: -100, duration: 1 });
  }, []);

  return (
    <section id="scripting">
      <h2>Scripting</h2>
      <div className="scripting-content">
        <div className="text">
          <p>
            I specialize in creating efficient, modular, and optimized Roblox scripts — 
            from advanced gameplay mechanics to automated systems. 
            My scripting focuses on performance, scalability, and creative innovation.
          </p>
        </div>
        <div className="images">
          <div
            className="gfx-card"
            style={{ backgroundImage: "url('/images/script1.png')" }}
          ></div>
          <div
            className="gfx-card"
            style={{ backgroundImage: "url('/images/script2.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Scripting;
