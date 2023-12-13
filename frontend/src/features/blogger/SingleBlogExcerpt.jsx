import React from 'react'
import './SingleBlogExcerpt.scss'

export const SingleBlogExcerpt = ({post}) => {
    const apiurl = 'http://127.0.0.1:8000/'


  return (
    <div className="post_page">
        
        <div className="post_image">
            <img className='blog-image' width='100%' min-height='700px' src={apiurl + post.image} alt={post.title} loading='lazy'/>
        </div> 
        
        <div className="post_content">
            <div className="post_header">
                {post.title}
                {post.id}
            </div>
            {post.descripts}
        </div>
    </div>
  )
}

export default SingleBlogExcerpt