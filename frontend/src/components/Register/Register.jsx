import { useState } from 'react'
import './Register.scss'

const Register = () => {
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
        <form className="register_form" action="">
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
            <input type="checkbox" />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}
export default Register
