import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/loading';
import useToken from '../../../hooks/useToken';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (token) {
        navigate('/home');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, pass, name);
        await updateProfile({ displayName: name });
        // navigate('/home')
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter your name' required />

                <input type="email" name='email' placeholder=' Enter your email' required />

                <input type="password" name='password' placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="">Accept terms and condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Accept terms and condition</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account?  <Link to={'/login'} className='text-primary text-decoration-none pe-auto' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;