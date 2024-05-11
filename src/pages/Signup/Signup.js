import React, { useContext } from 'react';
import loginImg from '../../assets/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {

    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignup = (event) => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const role = 'user';
        const user = {
             image, email, role, password
        }
        console.log(user)

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=c0a6c5eff4efffdee5df0347dc585c96`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const userInfo = {
                        displayName: name,
                        photoURL: imgData.data.url
                    }

                    createUser(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            const img=imgData.data.url
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(name, email, role, img);
                                })
                                .then(err => console.log(err))
                        })
                        .catch(err => console.error(err))

                }
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
          const user = result.user;
          console.log(user);
          const role='user';
          saveUser(user.displayName, user.email, role, user.photoURL);
        })
        .catch(error => console.error(error))
      }

    const saveUser = (name, email, role, image) => {
        const user = { name, email, role, image };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate(from, {replace: true});
            })
    }
    return (
        <div className='grid grid-cols-2'>
            <div className='mx-[10%]'>
                <div className="my-20">
                    <h2 className="text-5xl font-bold text-secondary">Get Started</h2>
                    <p>Sign up to access all feature</p>
                    <div className="form-control mt-6 ">
                        <button onClick={handleGoogleSignIn} className="flex items-center justify-center btn btn-secondary btn-outline text-lg">
                            <FcGoogle className="mr-1 text-green-800"></FcGoogle> Login With Google
                        </button>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <form className="" onSubmit={handleSignup}>

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
                                    placeholder=""
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
                                <input type='submit' value='sign up' className="btn btn-primary text-white"/>
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
                    <img src={loginImg} alt="" className='h-full' />
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