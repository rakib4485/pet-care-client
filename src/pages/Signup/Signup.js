import React from 'react';
import loginImg from '../../assets/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='mx-[10%]'>
                <div className="my-20">
                    <h2 className="text-5xl font-bold text-secondary">Get Started</h2>
                    <p>Sign up to access all feature</p>
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
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
                                <button className="btn btn-primary text-white">Sign up</button>
                            </div>

                        </form>
                    </div>
                    <div className="text-center mt-3">
                        <p>Already have an account? <Link to='/login' className='font-bold'>Sign In</Link></p>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='h-full'>
                    <img src={loginImg} alt="" className='h-full'/>
                </div>
                <div className='absolute bottom-5 mx-[10%]'>
                    <h2 className="text-4xl text-white font-semibold">Get the Best Service for Your Beloved Pet</h2>
                    <p className="text-white">We take care Like Ours. Entrust Your pet without any worries in the best pet care service</p>
                </div>
            </div>

        </div>
    );
};

export default Signup;