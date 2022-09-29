import React, { useState, useEffect } from 'react'
import {Form, Button} from 'react-bootstrap'
const Registration = () => {
  const [data, setData] = useState([{}])
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const submitForm=()=>{
    console.log(username)
  }
  function SubmitLogin(){

    useEffect(() => {
        fetch("/register").then(
            res => res.json()
        ).then(
            data => {
            
            console.log(data)
            }
        )
    }, []);
}
  return (
    <div className='form'>
        <div className='reg-container'>
                <h2>Registration </h2>
                <form method='POST' action='/register'>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Your Username'
                      value={username}
                      name='username'
                      onChange={(e) =>{setUsername(e.target.value)}}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Your First Name'
                      value={firstName}
                      name='first_name'
                      onChange={(e)=>{setFirstName(e.target.value)}}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Your Last Name'
                      value={lastName}
                      name='lastName'
                      onChange={(e)=>{setLastName(e.target.value)}}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder='Your Password'
                      value={password}
                      name='password'
                      onChange={(e)=>{setPassword(e.target.value)}}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder='Confirm your password'
                      value={confirmPassword}
                      name='confirmPassword'
                      onChange={(e)=>{setConfirmPassword(e.target.value)}}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Your Email'
                      value={email}
                      name='email'
                      onChange={(e)=>{setEmail(e.target.value)}}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Button as="sub" variant='primary' onClick={submitForm}>Submit</Button>
                  </Form.Group>
                  
                </form>
                
            </div>
    </div>
  )
}

export default Registration