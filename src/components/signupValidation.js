function Validation(values) {
  const error = {};
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;

  if (values.name === '') {
    error.name = 'Name should not be empty';
  } else {
    error.name = '';
  }

  if (values.email === '') {
    error.email = 'Email should not be empty';
  } else if (!emailPattern.test(values.email)) {
    error.email = 'Email format is invalid';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Password should not be empty';
  } else if (!passwordPattern.test(values.password)) {
    error.password = 'Password format is invalid';
  } else {
    error.password = '';
  }

  return error;
}

export default Validation;
