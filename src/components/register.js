import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import {
  Card,
  Input,
  Button,
  Typography,
} from '@material-tailwind/react';
import '../App.css';
import Validation from './signupValidation';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios.post('http://localhost:8081/signup', values)
        .then(() => navigate('/'))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false} className="bg-white w-100 p-5">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <Input size="lg" type="text" label="name" name="name" onChange={handleInput} />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>
            <div>
              <Input type="email" size="lg" label="email" name="email" onChange={handleInput} />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div>
              <Input type="password" size="lg" label="password" name="password" onChange={handleInput} />
              {errors.password && <span className="text-red-500">{errors.password}</span>}
            </div>
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <Link to="/" className="font-medium text-gray-900">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;
