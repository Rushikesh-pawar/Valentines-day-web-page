"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoHover = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="main-div-sid">
      <div className="content-box">
        <img src="/baby-elephant.jpg" alt="baby elephant" className="elephant-image" />
        <p>Siddhi will you be my valentine?</p>
        
        {yesClicked && (
          <>
            <p className="yay-text">Yay!</p>
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXJrdWNqZ2pqczMycHVxa2c2N3ZjbWpnczdpaDJpNG5rZGIxZTY4eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HSCZMUa1ao17h7l5mg/giphy.gif" 
              alt="celebration" 
              className="celebration-gif"
            />
          </>
        )}

        {!yesClicked && (
          <>
            <div className="buttons-container">
              <button className="yes-btn" onClick={handleYesClick}>Yes!</button>
              <button 
                className="no-btn"
                onMouseEnter={handleNoHover}
                style={{
                  position: noButtonPos.x > 0 ? 'fixed' : 'relative',
                  left: `${noButtonPos.x}px`,
                  top: `${noButtonPos.y}px`,
                }}
              >
                No!
              </button>
            </div>
            <p className="footer-text" style={{ fontSize: '0.8rem' }}>No seems a little shy!</p>
          </>
        )}
      </div>
    </div>
  )
}
