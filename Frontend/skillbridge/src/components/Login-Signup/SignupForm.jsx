import { useState } from "react"
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateRole
} from "../../utils/validators"

export default function SignupForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  })

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {
      fullName: validateFullName(form.fullName),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirmPassword: validateConfirmPassword(
        form.password,
        form.confirmPassword
      ),
      role: validateRole(form.role)
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error !== null)) return

    console.log("Signup success:", form)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      

      <div className="input-group">
        <span className="input-icon">👤</span>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Name"
          className="form-input"
        />
        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
      </div>

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

      <div className="input-group">
        <span className="input-icon">🔒</span>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="form-input"
        />
        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
      </div>

      <div className="input-group">
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="form-input form-select"
        >
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <span className="error-text">{errors.role}</span>}
      </div>

      <button type="submit" className="btn-primary">SIGN UP</button>
    </form>
  )
}
