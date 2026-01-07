export function validateEmail(email) {
  if (!email) return "Email is required"

  const value = email.trim()

  if (value.length > 254)
    return "Email is too long"

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!emailRegex.test(value))
    return "Enter a valid email address"

  return null
}


export function validatePassword(password) {
  if (!password) return "Password is required"

  if (password.length < 8)
    return "Password must be at least 8 characters"

  if (password.length > 64)
    return "Password must be less than 64 characters"

  if (!/[A-Z]/.test(password))
    return "Password must contain at least one uppercase letter"

  if (!/[a-z]/.test(password))
    return "Password must contain at least one lowercase letter"

  if (!/[0-9]/.test(password))
    return "Password must contain at least one number"

  if (!/[!@#$%^&*]/.test(password))
    return "Password must contain at least one special character"

  return null
}


export function validateFullName(name) {
  if (!name) return "Full name is required"

  const value = name.trim()

  if (value.length < 3)
    return "Full name is too short"

  if (value.length > 50)
    return "Full name is too long"

  const nameRegex =
    /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/

  if (!nameRegex.test(value))
    return "Full name contains invalid characters"

  return null
}


export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword)
    return "Please confirm your password"

  if (password !== confirmPassword)
    return "Passwords does not match"

  return null
}


export function validateRole(role) {
  const allowedRoles = ["user", "admin"]

  if (!role) return null

  if (!allowedRoles.includes(role))
    return "Invalid role selected"

  return null
}
