import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/images/gfx1.png",
  "/images/gfx2.png",
  "/images/gfx3.png",
  "/images/gfx4.png",
  "/images/gfx5.png",
  "/images/gfx6.png"
];

export default function GFX(){
  const ref = useRef();
  useEffect(()=>{
    const cards = ref.current.querySelectorAll(".card");
    gsap.from(cards, {y:30,opacity:0,stagger:0.12,duration:1,ease:'power3.out', scrollTrigger:{trigger:ref.current, start:'top 80%'}});
  },[]);
  return (
    <section id="gfx" aria-label="GFX Renders">
      <h2 className="section-title">GFX / Renders</h2>
      <div className="grid" ref={ref}>
        {IMAGES.map((src,i)=>(
          <div key={i} className="card">
            <div className="bg nodl" style={{backgroundImage:`url(${src})`}}></div>
            <div className="dl-overlay" aria-hidden="true"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
