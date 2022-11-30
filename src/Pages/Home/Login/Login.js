import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const {logInUser, googleLogIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.form?.pathname || '/';

    const handleLogin = data =>{
        setLoginError('')
        console.log(data);
        logInUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast('User Login Successfully');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error.message)
            setLoginError(error.message);
        });
    }

    const handleGoogleLogin = (data) =>{
        // event.preventDefault();
        googleLogIn(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast('User Login Successfully');
        })
        .catch(error => {
            console.error(error.message)
        });
    }


    return (
        <div className='h-[500px] flex justify-center items-center shadow-2xl'>
            <div className='w-96 p-7 bg-base-100 card bg-orange-100'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">


                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>Don’t have a account?<Link className='text-secondary' to="/signup"> SignUp</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;