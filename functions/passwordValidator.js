/*
  Password Validator
  1. Must be at least 8 characters long
  2. Must contain at least one number
  3. Must contain at least one uppercase letter
  4. Must contain at least one lowercase letter
  5. Must contain at least one special character
  6. Cannot contain the username
  7. Cannot contain 'password'
*/

const passwordValidator = (password, user) => {
  const passwordLength = password.length
  const passwordNumber = /\d/.test(password)
  const passwordUpper = /[A-Z]/.test(password)
  const passwordLower = /[a-z]/.test(password)
  const passwordSpecial = /[^A-Za-z0-9]/.test(password)
  const username = /[A-Za-z0-9]/.test(password)
  const passwordIsPassword = /password/.test(password)

  if (
    passwordLength >= 8 &&
    passwordNumber &&
    passwordUpper &&
    passwordLower &&
    passwordSpecial &&
    !username &&
    !password
  ) {
    return `Welcome, ${user}`
  }
  return `${user} your password sucks, try again`
}

const passwordValidatorTest = passwordValidator('password', 'domh')
console.log(passwordValidatorTest)
