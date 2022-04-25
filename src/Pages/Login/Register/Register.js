import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const name = nameRef.current.value;
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter your name' required />

                <input type="email" name='email' placeholder=' Enter your email' required />

                <input type="password" name='password' placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account?  <Link to={'/login'} className='text-danger text-decoration-none pe-auto' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;