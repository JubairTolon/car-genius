import React from 'react';
import google from '../../../images/Social/google.ico'
import github from '../../../images/Social/git.png'
import facebook from '../../../images/Social/fb.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-primary w-50 bg-info d-block mx-auto'>
                    <img className='mx-2' style={{ height: '30px' }} src={google} alt="" />
                    Google Sign In</button>
                <button className='btn btn-primary w-50 bg-info d-block mx-auto my-3'>
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