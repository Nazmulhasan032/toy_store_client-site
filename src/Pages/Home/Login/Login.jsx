
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hook/UseTitle';

const Login = () => {
    useTitle('Login');
    const {signIn, googleLogin} = useContext(AuthContext);


    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin =()=>{
        googleLogin();

    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full">
                    
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <div>
                                <p className='text-center my-4'>or</p>
                                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Login with  <span className='ml-2'><FaGoogle /></span></button>

                            </div>
                            <p className='my-4 text-center'>New to Nazmul Toy Store? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;