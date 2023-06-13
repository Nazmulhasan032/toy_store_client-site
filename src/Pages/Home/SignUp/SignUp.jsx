import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hook/UseTitle';
import Swal from 'sweetalert2';

const SignUp = () => {
  useTitle('SignUp')
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const { createUser } = useContext(AuthContext);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      
    }

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUser(email, password);
      form.reset();
      setSuccess('You have successfully registered.');
     
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Sign Up</button>
              </div>
            </form>
            <p className="my-4 text-center">Already have an account? <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
            {success && <p className="text-success">{success}</p>}
            {error && <p className="text-danger">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

