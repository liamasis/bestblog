import React, { useEffect } from 'react'
import { SidePanel } from '../SidePanel/SidePanel'
import './Home.scss'; 
import { getPostsError, getPostsStatus, selectAllPosts } from '../../features/blogger/blogger';
import { useSelector, useDispatch } from 'react-redux';



const Home = () => {

  const dispatch = useDispatch()

  const post = useSelector(selectAllPosts)
  const getPostStatus = useSelector(getPostsStatus)
  const getPostError = useSelector(getPostsError)
  const errors = useSelector(getPostsError)

  
  useEffect(() => {

  }, [dispatch])

  return (
    <div className='container'>
        <div className="main_page">
            <div className="first_column">
                <div>Home</div>
            </div>
            <div className="second_column">
                <SidePanel/>
            </div>
        </div>
        
    </div>
    
  )
}
export default Home