import React, { useEffect } from "react";
import gsap from "gsap";

const GFX = () => {
  useEffect(() => {
    gsap.from(".gfx-grid", { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <section id="gfx">
      <h2>GFX / Renders</h2>
      <div className="gfx-grid">
        <div className="gfx-card" style={{ backgroundImage: "url('/images/gfx1.png')" }}></div>
        <div className="gfx-card" style={{ backgroundImage: "url('/images/gfx2.png')" }}></div>
        <div className="gfx-card" style={{ backgroundImage: "url('/images/gfx3.png')" }}></div>
      </div>
    </section>
  );
};

export default GFX;
