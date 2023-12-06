import React, { useEffect } from 'react'
import { SidePanel } from '../SidePanel/SidePanel'
import './Home.scss'; 
import { getPostsError, getPostsStatus, selectAllPosts, fetchPosts } from '../../features/blogger/blogger';
import { useSelector, useDispatch, connect } from 'react-redux';
import BlogExcerpt from '../../features/blogger/BlogExcerpt'


const Home = () => {

  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const getPostStatus = useSelector(getPostsStatus)
  const getPostError = useSelector(getPostsError)
  const errors = useSelector(getPostsError)


  useEffect(() => {
    if (getPostStatus === 'idle') {
      dispatch(fetchPosts())
    } 
  }, [dispatch, getPostStatus])

  let content
  if(getPostStatus === 'loading') {
    content = <div className='content'>
      Loading...
    </div>
  } else if (getPostStatus === 'succeeded') {
    content = posts.map((post) => 
      <BlogExcerpt key={post.id} postID={post.id} post={post}/>
    )
  } else if (getPostStatus === 'failed') {
    content = <div className='content'>
      failed {getPostError}
    </div>
  }


  return (
    <div className='container'>
        <div className="main_page">
            <div className="first_column">
                <div>{content}</div>
            </div>
            <div className="second_column">
                <SidePanel/>
            </div>
        </div>
        
    </div>
    
  )
}
export default Home