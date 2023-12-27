import { useState } from 'react'
import './Login.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)

  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()
  const login_container = useLocation()

  const dispatch = useDispatch()

  const handleUsernameInput = (e) => setUsername(e.target.value)
  const handlePasswordInput = (e) => setPassword(e.target.value)

  const togglePasswordVisibility = () => {
    setCheck((prevState) => !prevState)
  }
  return (
    <div className="login_container">
      <div className="login_box">
        <h3 className="login_heading">LOGIN</h3>
        <div className="">
          {errMsg && (
            <div className="error">
              <Stack>
                <Alert severity="error">{errMsg}</Alert>
              </Stack>
            </div>
          )}
        </div>
        <form className="login_form" action="">
          <label>Username</label>
          <input
            type="text"
            required
            name="username"
            className="input_username"
          />
          <label>Password</label>
          <input
            type={check ? 'text' : 'password'}
            required
            name="password"
            className="input_password"
          />
          <div className="">
            <label htmlFor="">show password</label>
            <input
              type="checkbox"
              checked={check}
              onChange={togglePasswordVisibility}
              name="show_password"
              id=""
            />
          </div>
          <button className="login_button">Login</button>
        </form>
        <p>
          Don't have an account?
          <Link className="register_link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Login
