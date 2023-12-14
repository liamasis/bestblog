import React, { useEffect } from 'react'
import { SidePanel } from '../SidePanel/SidePanel'
import { BlogPost } from '../BlogPost/BlogPost'
import './Home.scss'
import {
  selectCategoryFilter,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
  fetchPosts,
} from '../../features/blogger/bloggerSlice'
import { useSelector, useDispatch, connect } from 'react-redux'
import BlogExcerpt from '../../features/blogger/BlogExcerpt'
import {
  fetchCategories,
  selectAllCategories,
} from '../../features/categories/categorySlice'

const Home = () => {
  const posts = useSelector(selectAllPosts)
  const getPostStatus = useSelector(getPostsStatus)
  const getPostError = useSelector(getPostsError)
  const errors = useSelector(getPostsError)

  const categoryFilter = useSelector(selectCategoryFilter)

  const categories = useSelector(selectAllCategories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    if (getPostStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch, getPostStatus])

  console.log(categoryFilter)
  const filteredPosts = categoryFilter
    ? posts.filter((post) =>
        post.category.some(
          (categoryId) =>
            categories.find((category) => category.id === categoryId)?.name ===
            categoryFilter
        )
      )
    : posts

  let content

  if (getPostStatus === 'loading') {
    content = <div className="content">Loading...</div>
  } else if (getPostStatus === 'succeeded') {
    content = filteredPosts.map((post) => (
      <BlogExcerpt key={post.id} postID={post.id} post={post} />
    ))
  } else if (getPostStatus === 'failed') {
    content = <div className="content">failed {getPostError}</div>
  }

  return (
    <div className="container">
      <div className="main_page">
        <div className="first_column">
          <div className="blog_container">{content}</div>
        </div>
        <div className="second_column">
          <SidePanel />
        </div>
      </div>
    </div>
  )
}
export default Home
