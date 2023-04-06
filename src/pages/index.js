import React from 'react'
import '../styles/Home.module.css'
import Link from 'next/link'
function index() {
  return (
    <>
   <div className='aboutrocket'>
   <h1 className='textrocket'>About Rocket</h1>
      <button className='about'>
        <Link href="/about">
          Play Again
        </Link>
      </button>
   </div>
      <main className='display'>
        <h2 className='textsub'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Sapiente, eos esse voluptatum assumenda architecto praesentium sequi <br />
          dicta molestias modi eligendi tempore delectus? <br />
          Perferendis libero laboriosam fugiat laudantium, <br />
          perspiciatis sequi quasi?<br />
        </h2>

        <iframe width="844" height="4149" src="https://rive.app/s/YiNefvUdkEKME1IcHRYNGA/embed" allowfullscreen></iframe>


      </main>
    </>
  )
}

export default index;