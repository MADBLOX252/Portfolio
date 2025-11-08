import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function Hero(){
  const root = useRef();
  useEffect(()=>{
    const el = root.current;
    gsap.from(el.querySelector(".hero-title"), {opacity:0,y:40,duration:1});
    gsap.from(el.querySelector(".hero-sub"), {opacity:0,y:20,duration:1,delay:0.3});
  },[]);
  return (
    <section className="hero" ref={root}>
      <h1 className="hero-title">MADBLOX252</h1>
      <p className="hero-sub">GFX • Scripting • Modeling • Animations</p>
      <div className="scroll-hint">Scroll ↓</div>
    </section>
  )
}
