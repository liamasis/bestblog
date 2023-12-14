import { useEffect } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryFilter } from '../../features/blogger/bloggerSlice'
import {
  fetchCategories,
  selectAllCategories,
} from '../../features/categories/categorySlice'

export const NavBar = () => {
  const dispatch = useDispatch()

  const categories = useSelector(selectAllCategories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      dispatch(setCategoryFilter())
    } else {
      dispatch(setCategoryFilter(category))
    }
  }

  let nav_items
  nav_items = categories.map((category) => (
    <li
      key={category.id}
      className="nav_link"
      onClick={() => handleCategoryClick(`${category.name}`)}
    >
      {category.name}
    </li>
  ))
  console.log(nav_items)
  return (
    <div className="top_section">
      <nav className="nav_wrapper">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="logo">BEST</h1>
        </Link>
        <div>
          <ul className="menu_wrapper">
            <li className="nav_link" onClick={() => handleCategoryClick('all')}>
              all
            </li>
            {nav_items}
          </ul>
        </div>
        <div>
          <div className="button_holder">
            <Link to="login/">
              <button>Login</button>
            </Link>
            <Link to="register/">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
