import React from 'react'
import { Link } from "react-router-dom";
import './Article.css'

const Article = ({posts}) => {
 
    const articleArray = posts.map(post => {

      const { id, title, date = "August 15, 2024", preview } = post;

      return (

          <div key={id} className="article">
              <article className='article-section'>
                  <h3 className='article-header'>{title}</h3>
                  <small>{date}</small>
                  <p>{preview}</p>
                  <p>
                      <Link className={"link-style"} to={`/article/${id}`}>Read more</Link>
                  </p>
              </article>
          </div >
      )
  })
  return (
    <>
        <section className="article">
            {articleArray}
        </section>
    </>

)

  }


export default Article
