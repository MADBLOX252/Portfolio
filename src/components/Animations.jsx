import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VIDEOS = ["/videos/anim_placeholder.png"]; // placeholder; replace with your mp4 paths

export default function Animations(){
  const root = useRef();
  const canvasRefs = useRef([]);
  useEffect(()=>{
    const cvs = canvasRefs.current;
    cvs.forEach((c, idx)=>{
      if(!c) return;
      // simple fade-in
      gsap.from(c, {opacity:0,y:20,duration:1,scrollTrigger:{trigger:c,start:'top 85%'}});
    });
    // Note: If you replace placeholders with real video files (mp4/webm),
    // you can add code to draw video frames to the canvas for protection.
  },[]);
  return (
    <section id="animations" ref={root}>
      <h2 className="section-title">Animations</h2>
      <div className="grid">
        {VIDEOS.map((src,i)=>(
          <div className="card" key={i}>
            <canvas ref={el => canvasRefs.current[i]=el} style={{width:'100%',height:'260px',display:'block'}} />
            <div className="dl-overlay"></div>
          </div>
        ))}
      </div>
      <small style={{opacity:0.6, marginTop:12}}>Replace placeholders in <code>public/videos</code> with MP4/WEBM and extend the component to stream frames into the canvas for added protection.</small>
    </section>
  )
}
