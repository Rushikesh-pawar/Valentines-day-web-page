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
        <p>_____ will you be my valentine?</p>
        
        {yesClicked && (
          <>
            <p className="yay-text">Yay!</p>
            <img 
              src="https://media.giphy.com/media/gKsJUddjnpIw2T7i65/giphy.gif" 
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
