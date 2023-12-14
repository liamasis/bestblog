import React, { useEffect } from 'react'
import './BlogPost.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById, getPostError, getPostStatus, selectPost } from '../../features/blogger/blogSlice';
import { useParams } from 'react-router-dom';
import { SingleBlogExcerpt } from '../../features/blogger/SingleBlogExcerpt'
import { SidePanel } from '../../components/SidePanel/SidePanel'

export const BlogPost = () => {

  const dispatch = useDispatch()

  const post = useSelector(selectPost)
  const postStatus = useSelector(getPostStatus)
  const postError = useSelector(getPostError)
  

  const postID = useParams()
  
  useEffect(() => {
    dispatch(fetchPostById(postID))
  }, [dispatch])

  let content

  if (postStatus == 'loading'){
    content = <div className="">Loading</div>
  } else if (postStatus == 'succeeded') {
    content = <SingleBlogExcerpt key={post.id} postID={post.id} post={post}/>
  }
  
  return (
    <div className='post_container'>
        <div className="first_column">
            {content}
        </div>
       
        <div className="second_column">
            <SidePanel/>
        </div>
    </div>
  )
}

export default BlogPost