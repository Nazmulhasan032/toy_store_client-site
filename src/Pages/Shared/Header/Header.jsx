import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showEmail, setShowEmail] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleMouseEnter = () => {
    setShowEmail(true);
  };

  const handleMouseLeave = () => {
    setShowEmail(false);
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/allToys">All Toys</Link>{" "}
      </li>
      {/* <li><Link to="/myToys">My Toys</Link></li> */}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      {/* <li><button>Log out</button></li>
        <li> <Link to="/login">Login</Link> </li> */}

      {user?.email ? (
        <>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <Link to="/createPost">Create Post</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
      )}
    </>
  );
  
  const userEmail = user?.email || "";

  return (
    <div>
      <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser className="text-3xl" />
            {showEmail && (
              <div className="absolute top-10 left-0 bg-white p-2 rounded shadow">
                {userEmail}
              </div>
            )}
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
