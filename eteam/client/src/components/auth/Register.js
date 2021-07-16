import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

function Register() {
    
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

  const {name, email, password, password2} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
      e.preventDefault();
      if(password !== password2){
          console.log("Password doesn't match")
      } else {
          const newUser = {name, email, password, password2};
          try {
            const config = {
                headers: {
                    'Content-Type': "application/Json"
                }
            }
            const body = JSON.stringify(newUser);
            const res = await axios.post('http://localhost:5000/api/users', body, config)
            console.log(res.data)
          } catch (err) {
              console.error(err.response.data)
          }
      }
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            onChange={e => onChange(e)}
            value={name} required />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            name="email" 
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
}

export default Register;
