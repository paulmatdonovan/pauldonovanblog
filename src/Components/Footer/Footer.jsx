import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">   
        <div className="footer-content">
            <div className="footer-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                    <a href="https://x.com/PaulDonovanWeb" target="_blank" rel="noopener noreferrer">X</a>
                    <a href="https://www.linkedin.com/in/paul-donovan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                </div>
              <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/articles">Articles</a></li>
              </ul>
              </div>
              <div className="footer-section">
              <h4>Subscribe</h4>
              <form className="newsletter-form">
              <input type="email" placeholder="Still under construction..." />
              <button type="submit">Subscribe</button>
              </form>
              </div>

        </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paul Donovan. All rights reserved.</p>
                <p className="attribution">Website created by Elevate Web Solutions</p>

        </div>
         </div>

    
       
    )
    }

export default Footer
