import { useState } from "react"
import { Link } from "react-router-dom"
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateRole
} from "../utils/validators"

export default function Signup() {
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

    // 🔒 ALL validation in one place
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

    // stop submission if ANY error exists
    if (Object.values(newErrors).some(error => error !== null)) return

    console.log("Signup success:", form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <div>
        <label>Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p>{errors.fullName}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>

      <div>
        <label>Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <p>{errors.role}</p>}
      </div>

      <button type="submit">Create Account</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  )
}
