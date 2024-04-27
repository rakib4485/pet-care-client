import React from 'react';
import loginImg from '../../assets/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='grid grid-cols-2 items-center'>
            <div className='mx-[10%]'>
                <h2 className="text-5xl font-bold text-secondary">Welcome Back!!</h2>
                <p>Sign in to continue your journey</p>
                <div className="form-control mt-6 ">
                    <button className="flex items-center justify-center btn btn-secondary btn-outline text-lg">
                        <FcGoogle className="mr-1 text-green-800"></FcGoogle> Login With Google
                    </button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Login</button>
                        </div>

                    </form>
                </div>
                <div className="text-center mt-3">
                        <p>Don't have an account? <Link to='/signup' className='font-bold'>Sign up</Link></p>
                    </div>
            </div>
            <div className='relative'>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className='absolute bottom-5 mx-[10%]'>
                    <h2 className="text-4xl text-white font-semibold">Get the Best Service for Your Beloved Pet</h2>
                    <p className="text-white">We take care Like Ours. Entrust Your pet without any worries in the best pet care service</p>
                </div>
            </div>
        </div>
    );
};

export default Login;