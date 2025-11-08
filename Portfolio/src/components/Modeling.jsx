import React, { useEffect } from "react";
import gsap from "gsap";

const Modeling = () => {
  useEffect(() => {
    gsap.from(".modeling-grid", { opacity: 0, y: 100, duration: 1 });
  }, []);

  return (
    <section id="modeling">
      <h2>Modeling</h2>
      <p>Detailed 3D environments, props, and assets designed for realism and optimization.</p>
      <div className="modeling-grid">
        <div
          className="gfx-card"
          style={{ backgroundImage: "url('/images/model1.png')" }}
        ></div>
        <div
          className="gfx-card"
          style={{ backgroundImage: "url('/images/model2.png')" }}
        ></div>
        <div
          className="gfx-card"
          style={{ backgroundImage: "url('/images/model3.png')" }}
        ></div>
      </div>
    </section>
  );
};

export default Modeling;
