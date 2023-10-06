function Validation(values) {
  const error = {};
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Changed variable name to camelCase
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/; // Changed variable name to camelCase

  if (values.email === '') {
    error.email = 'Email should not be empty'; // Changed error message
  } else if (!emailPattern.test(values.email)) {
    error.email = 'Email format is invalid'; // Changed error message
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Password should not be empty'; // Changed error message
  } else if (!passwordPattern.test(values.password)) {
    error.password = 'Password format is invalid'; // Changed error message
  } else {
    error.password = '';
  }

  return error;
}

export default Validation;
