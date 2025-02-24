import React from 'react'
import './Products.css'
import book1 from '../../Assets/book (1).jpg'
import book2 from '../../Assets/book (1).png'
import book3 from '../../Assets/book (2).jpg'


const Products = () => {
  return (
    <div className='products'>
      <div className="product-title">
      <h1>You can buy my books here</h1>
      <p>Over the years, I've written several short stories, novels or novellas</p>
      <p>It would be great if you woulc consider buying from my store. </p>
        </div>
        <div className="product-items">
        <div className='product-list'>
          <a href="https://www.amazon.com.au/Education-Collection-Stories-Paul-Donovan/dp/1504302494 " target="_blank" rel="noopener noreferrer">
          <h1>Education</h1> 
          <img src={book1} alt="Paul Donovan Book Cover" />
          </a>          

          <p>A whimsical colection of short stories</p>
          </div>
          <div className='product-list'>
          <a href="https://pauldonovan.gumroad.com/l/VqwrZx" target="_blank" rel="noopener noreferrer">
          <h1>The Reflection</h1> 
          <img src={book2} alt="Paul Donovan Book Cover" />
          </a>
          <p>A small town. A murder. A new life. All is not well when John Moore moves to a small town to work at the local school.</p>

          </div>
          <div className='product-list'>
            <a href="  https://pauldonovan.gumroad.com/l/NWO ">
        
          <h1>New World Order</h1> 
          <img src={book3} alt="Paul Donovan Book Cover" />
          </a>
          <p>During the brutal covid lockdowns, one man seeks peace and freedom from the madness</p>
          </div>

        </div>
    </div>
  )
}

export default Products
