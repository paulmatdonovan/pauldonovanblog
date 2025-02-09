import React from 'react'
import image1 from '../../Assets/blogImage (1).png'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-left">
      <h1>I'm Paul Donovan. This is my blog. I hope you like it</h1>
<h3>I'm a part time English teacher and aspiring web developer. <br /> I also write in my spare time. <br />You'll find some refections here and some of the stories ive written over the year. you can support my work by buying any of my books or hiring me for your next web development project. </h3>
      </div>
<div className="home-right">
  <img src={image1} alt="legendary website builder" />
</div>
    </div>
  )
}

export default Home
