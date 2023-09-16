import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div id='home' className='home'>
      <div className="intro">
        <article className="intro-description">
          <h2>Hello, I'm</h2>
          <h1 className='my-name'>Perry Fung</h1>
          <h2 style={{fontSize: "2.25rem"}}>I'm a </h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('')
              .pauseFor(3000)
            typewriter.typeString('Front-end Developer.')
              .callFunction(() => {
                console.log('String typed out.');
              })
              .pauseFor(2500)
              .deleteAll()
              .pauseFor(1000)
            typewriter.typeString('Web Developer.')
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .pauseFor(2500)
              .deleteAll()
              .pauseFor(2500)
              .start();
              
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
        </article>
        <div className="avatar">
          <img src="https://picsum.photos/id/4/1200/1200" alt="" className="img-avatar" />
        </div>
      </div>
    </div>
  )
}
