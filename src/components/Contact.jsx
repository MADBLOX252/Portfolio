import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Contact(){
  const root = useRef();
  useEffect(()=>{
    gsap.from(root.current, {opacity:0,y:20,duration:1, scrollTrigger:{trigger:root.current, start:'top 90%'}});
    // Block right-click on contact links to discourage download
    function prevent(e){ e.preventDefault(); }
    document.addEventListener('contextmenu', prevent);
    return ()=> document.removeEventListener('contextmenu', prevent);
  },[]);
  return (
    <section id="contact" ref={root}>
      <h2 className="section-title">Contact</h2>
      <p style={{marginTop:12}}>For commissions: DM on Discord or Instagram.</p>
      <div className="contact-links">
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="interactive">Instagram</a>
        <a href="https://discord.gg/your-invite" target="_blank" rel="noreferrer" className="interactive">Discord</a>
      </div>
    </section>
  )
}
