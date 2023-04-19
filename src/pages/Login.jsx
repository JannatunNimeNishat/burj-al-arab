import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //
        setSuccess('')
        setError('')
        signIn(email,password)
        .then(result =>{
            setSuccess('successfully login')
        })
        .catch(error=>{
            setError(error.message)
        })

    }
    return (
        <div className='my-container'>
            <div className="hero mt-5 mb-3 bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Show password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p><small>New to Burj al Arab ? </small><Link to='/register' className="btn btn-link" >Please register</Link></p>
                            {/* error */}
                            {
                                error &&
                                <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{error}</span>
                                    </div>
                                </div>}
                            {/* success */}
                            {
                                success &&
                                <div className="alert alert-success shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{success}</span>
                                    </div>
                                </div>
                            }
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;