import React, { useEffect } from "react";
import Hero from "./components/Hero";
import GFX from "./components/GFX";
import Scripting from "./components/Scripting";
import Modeling from "./components/Modeling";
import Animations from "./components/Animations";
import Contact from "./components/Contact";
import { Outlet, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <header className="topbar">
        <div className="center">
          <nav className="topnav">
            <div className="brand">MADBLOX252</div>
            <div className="links">
              <a href="#gfx">GFX</a>
              <a href="#scripting">Scripting</a>
              <a href="#modeling">Modeling</a>
              <a href="#animations">Animations</a>
              <a href="#contact">Contact</a>
              <Link to="/tos" className="tos-link">TOS</Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <GFX />
        <Scripting />
        <Modeling />
        <Animations />
        <Contact />
        <Outlet />
      </main>

      <div className="cursor" id="cursor" aria-hidden="true"></div>
      <div className="cursor-dot" id="cursorDot" aria-hidden="true"></div>
      <CursorScript />
    </div>
  );
}

function CursorScript() {
  React.useEffect(() => {
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursorDot");
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    window.addEventListener("mousemove", onMove);

    let rafId;
    function animate() {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;
      cursor.style.transform = `translate3d(${posX - 18}px, ${posY - 18}px, 0)`;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      rafId = requestAnimationFrame(animate);
    }
    animate();

    // enlarge on interactive
    document.querySelectorAll("a,button,.interactive").forEach(el=>{
      el.addEventListener("mouseenter", ()=> {
        cursor.style.width = "36px"; cursor.style.height = "36px";
      });
      el.addEventListener("mouseleave", ()=> {
        cursor.style.width = "20px"; cursor.style.height = "20px";
      });
    });

    return ()=> {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return null;
}

export default App;
