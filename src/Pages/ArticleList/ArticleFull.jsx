import React from 'react'
import { useParams } from 'react-router-dom'
import './ArticleFull.css'

const ArticleFull = ({posts}) => {

  let {id} = useParams();

  const post = posts.find((article) => article.id === Number(id))

  if(!post) {
    return <div>Article not found!</div>;
  }

  return (
      <section className='article-section'>
        <div>
      <h1 className='article-title'>{post.title}</h1>
      <p className='article-date'>Published on: {post.date}</p>

      </div>

      <div className='article-content'>
      
      <div className='article-left'>
      <p>{post.content}</p>
      </div>
      <div className='article-img'>
      <img src={post.image} alt={post.preview}/>
      </div>
      </div>
             
        
      
      </section>
  
  )
}

export default ArticleFull
