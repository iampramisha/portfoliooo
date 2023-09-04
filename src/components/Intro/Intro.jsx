import React from 'react';
import './intro.scss'
import { useEffect,useRef } from 'react';
import { init } from 'ityped';


const Intro = () => {
  const textRef=useRef();
   useEffect(()=>{
    init(textRef.current, 
      { showCursor: true,
        backDelay:1500,
        backspeed:60,
        strings: ['Developer ,','Designer'] })
   },[])
  return (
    <div className='intro' id='intro'>Intro
    <div className="left">
      <div className="imgContainer">
        <img className='pic' src="https://miro.medium.com/fit/c/1360/1360/1*FaP83GCa5bTCofsqCD0Ocg.png" alt="port" />
            </div>
    </div>
    <div className="right">
        <h6>Hi there, I'm a</h6>
        <h8>Freelance <span ref={textRef}></span></h8>
        <div className="downie">
       <img className='down' src="https://i.pinimg.com/736x/4c/30/41/4c304120fa9418e3220b5b4633d00454.jpg" alt="down" />
      </div>
      </div>
    </div>
  )
}

export default Intro;