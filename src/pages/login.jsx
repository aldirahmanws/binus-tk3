import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Users from '../dummy/users';
import Alert from 'react-bootstrap/Alert';

const Login = ({ onSubmit }) => {
  const [form, setForm] = useState({
    'email': '',
    'password': '',
  });

  const [error, setError] = useState('');


  const onLogin = e => {
    e.preventDefault();

    if (Users.email !== form.email) {
      setError('Email Salah')
      return
    }

    if (Users.password !== form.password) {
      setError('Password Salah')
      return
    }

    setError('')
    localStorage.setItem('is_login', true)
    onSubmit()
  }

  const handleChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <Container className='mt-5'>
      {
        error ?
          <Alert variant='danger'>{error}</Alert> : null
      }
      <center>
        <h1>Login</h1>
      </center>

      <Form onSubmit={onLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name="email" placeholder="Enter email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" name="password" placeholder="Password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
