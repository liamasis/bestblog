import React from 'react'
import './BlogExcerpt.scss'; 
const apiurl = 'http://127.0.0.1:8000/'
import { Link } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export const BlogExcerpt = ({postID, post}) => {

    const date = post && post.date_posted ? new Date(post.date_posted) : new Date();
    const options = {year: 'numeric', month: 'long', day:'numeric'}
    const formatDate = date.toLocaleDateString('en-UK', options)
    
    return (
        <div className='blog-container'>
            <img className='blog-image' width='100%' height='350px' src={apiurl + post.image} alt="name" loading='lazy'/>
            <div className="blog">
                <div className="blog-header">
                    <div className="blog-title">
                        <h2>
                            {post.title}
                        </h2>
                    </div>
                    <div className="stamp">
                        <div className="blog-owner">
                            {post.owner}
                        </div>
                        <div className="blog-post-date">
                            <AccessTimeIcon className='svg_icons'/>
                            <p>
                                {formatDate}
                            </p>
                        </div>
                    </div>
                    
                </div>
                
                
                
                <div className="blog-content">
                    <div className="blog-description">
                        <p>
                            {post.descripts.substring(0,100)}...
                        </p>
                        <div className="button_container">
                            <Link to={`blog/${postID}`}>
                                <button>read more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default BlogExcerpt