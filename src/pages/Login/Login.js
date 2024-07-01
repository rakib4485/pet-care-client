import React, { useContext } from 'react';
import loginImg from '../../assets/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
        })
        .then(err => {
          console.error(err);
        })
        form.reset();
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
          const user = result.user;
          saveUser(user.displayName, user.email, user.photoURL);
        })
        .then(error => console.error(error))
    }

    const saveUser = (name, email, image) => {
        const user = {name, email, image, role: 'user'};
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
        <div className='grid grid-cols-2 items-center'>
            <div className='mx-[10%]'>
                <h2 className="text-5xl font-bold text-secondary">Welcome Back!!</h2>
                <p>Sign in to continue your journey</p>
                <div className="form-control mt-6 ">
                    <button onClick={handleGoogleSignIn} className="flex items-center justify-center btn btn-secondary btn-outline text-lg">
                        <FcGoogle className="mr-1 text-green-800"></FcGoogle> Login With Google
                    </button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="" onSubmit={handleLogin}>

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