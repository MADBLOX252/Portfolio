import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IMAGES = ["/images/script1.png", "/images/script2.png"];

export default function Scripting(){
  const root = useRef();
  useEffect(()=>{
    gsap.from(root.current.querySelectorAll(".card, .lead"), {x:-40,opacity:0,duration:1,stagger:0.12, scrollTrigger:{trigger:root.current, start:'top 85%'}});
  },[]);
  return (
    <section id="scripting" ref={root}>
      <h2 className="section-title">Scripting</h2>
      <div className="scripting center">
        <div>
          <p className="lead">Robust scripts, clean APIs and performance-minded systems for game dev and mods.</p>
          <div className="meta">
            <div className="tag">Lua</div>
            <div className="tag">JS</div>
            <div className="tag">Tools</div>
          </div>
        </div>
        <div style={{display:'grid',gap:16}}>
          {IMAGES.map((s,i)=>(
            <div className="card" key={i}>
              <div className="bg nodl" style={{backgroundImage:`url(${s})`}}></div>
              <div className="dl-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
