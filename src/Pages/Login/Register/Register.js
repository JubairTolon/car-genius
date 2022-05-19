import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;

        createUserWithEmailAndPassword(email, pass)
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