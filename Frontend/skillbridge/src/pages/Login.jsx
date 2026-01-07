import { useState } from "react"
import { Link } from "react-router-dom"
import { validateEmail, validatePassword } from "../utils/validators"

export default function Login() {
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

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
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={form.rememberMe}
            onChange={handleChange}
          />
          Remember me
        </label>
      </div>

      <div>
        <button type="submit">Login</button>
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">New User ? Sign up</Link>
      </div>
    </form>
  )
}
