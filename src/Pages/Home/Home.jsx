import React from 'react'
import image1 from '../../Assets/blogImage (1).png'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-left">
      <h1>I'm Paul Donovan. This is my blog. I hope you like it</h1>

      </div>
<div className="home-right">
  <img src={image1} alt="legendary website builder" />
</div>
    </div>
  )
}

export default Home
