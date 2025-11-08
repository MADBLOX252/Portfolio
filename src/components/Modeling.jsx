import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IMAGES = ["/images/model1.png","/images/model2.png","/images/model3.png","/images/model4.png"];

export default function Modeling(){
  const root = useRef();
  useEffect(()=>{
    const cards = root.current.querySelectorAll(".card");
    cards.forEach((card)=>{
      gsap.fromTo(card,{y:30,opacity:0},{y:0,opacity:1,duration:1,scrollTrigger:{trigger:card,start:'top 90%'}});
    });
  },[]);
  return (
    <section id="modeling" ref={root}>
      <h2 className="section-title">Modeling</h2>
      <div className="grid">
        {IMAGES.map((s,i)=>(
          <div className="card" key={i}>
            <div className="bg nodl" style={{backgroundImage:`url(${s})`}}></div>
            <div className="dl-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
