import { useState } from 'react'
import './Register.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [check, setCheck] = useState(false)

  const handleUsernameInput = (e) => setUsername(e.target.value)
  const handlePasswordInput = (e) => setPassword(e.target.value)
  const handleConfirmPasswordInput = (e) => setConfirmPassword(e.target.value)
  const togglePasswordVisibility = () => {
    setCheck((prevState) => !prevState)
  }

  const apiUrl = 'http://127.0.0.1:8000/'

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password != confirmPassword) {
      setErrMsg('Passwords do not match.')
      return
    }

    try {
      await axios.post(`${apiUrl}user-registration/`, {
        username: username,
        password: password,
      })
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      setErrMsg('')
      navigate('/login', {
        state: { successMessage: 'Registration Successful. Please log in' },
      })
    } catch (error) {
      setErrMsg(error.message.data)
    }
  }
  return (
    <div className="register_container">
      <div className="register_box">
        <div className="register_heading">
          <h3>Register</h3>
        </div>
        {errMsg && (
          <div className="error">
            <Stack>
              <Alert severity="error">{errMsg}</Alert>
            </Stack>
          </div>
        )}
        <form onSubmit={handleSubmit} className="register_form" action="">
          <label htmlFor="">Username</label>
          <input type="text" required onChange={handleUsernameInput} />
          <label htmlFor="">Password</label>
          <input
            type={check ? 'text' : 'password'}
            required
            onChange={handlePasswordInput}
          />
          <label htmlFor="">Confirm Passowrd</label>
          <input
            type={check ? 'text' : 'password'}
            required
            onChange={handleConfirmPasswordInput}
          />
          <div className="">
            <label htmlFor="">Show Password</label>
            <input type="checkbox" onChange={togglePasswordVisibility} />
          </div>
          <button>Register</button>
        </form>
        <p>
          Already have an account?
          <Link className="login_link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Register
