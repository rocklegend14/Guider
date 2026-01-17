import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { validateEmail, validatePassword } from "../../utils/validators"

export default function LoginForm() {
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password)
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(Boolean)) return

    console.log("Login data:", form)

    // TEMP: simulate successful login
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="input-group">
        <span className="input-icon">✉</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-input"
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="input-group">
        <span className="input-icon">🔒</span>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="form-input"
        />
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>
      <button type="submit" className="btn-primary">LOG IN</button>
      <div className="forgot-wrapper">
        <Link to="/forgot-password"><button className="forgot-password">Forgot password?</button></Link>
      </div>
      
    </form>
  )
}
