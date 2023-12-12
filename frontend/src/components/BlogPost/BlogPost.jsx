import React, { useEffect } from 'react'
import './BlogPost.scss'; 
import { fetchPostById, getPostError, getPostStatus, selectPost } from '../../features/blogger/blogSlice';
import { useParams } from 'react-router-dom';

export const BlogPost = () => {

  const dispatch = useDispatch()

  const post = useSelector(selectPost)
  const postStatus = useSelector(getPostStatus)
  const getPostError = useSelector(getPostError)

  const postID = useParams()

  useEffect(() => {
    dispatch(fetchPostById(postID))
  }, [])
  return (
    <div>
        BlogPost
    </div>
  )
}

export default BlogPost