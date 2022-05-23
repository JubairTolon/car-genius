import React from 'react';
import google from '../../../images/Social/google.ico'
import github from '../../../images/Social/git.png'
import facebook from '../../../images/Social/fb.png'
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>;
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {errorElement};
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 bg-info d-block mx-auto'>
                    <img className='mx-2' style={{ height: '30px' }} src={google} alt="" />
                    Google Sign In</button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 bg-info d-block mx-auto my-3'>
                    <img className='mx-2' style={{ height: '30px' }} src={github} alt="" />
                    Github Sign In</button>
                <button className='btn btn-primary w-50 bg-info d-block mx-auto'>
                    <img className='mx-2' style={{ height: '30px' }} src={facebook} alt="" />
                    Facebook Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;