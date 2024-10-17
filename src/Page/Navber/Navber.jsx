import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";


const Navber = () => {
    const { logOut, user } = useAuth();
    // console.log(user);


    const Navigate =
        <>
            <Link className="m-2" to="/">Home</Link>
            <Link className="m-2" to="/LineCharts">LineCharts</Link>
            <Link className="m-2" to="/AddPost">AddPost</Link>
            <Link className="m-2" to="/UserPosts">UserPost</Link>
            <Link className="m-2" to="/AllPost">AllPost</Link>
            <Link className="m-2" to="/Login">Login</Link>
            <Link className="m-2" to="/Register">Register</Link>
          
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Navigate}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Website Name</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navigate}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* profile start */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt=""
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                            {user?.displayName}
                            </li>
                            <li>
                            {user?.email}
                            </li>
                            <li><a>Settings</a></li>
                            <button onClick={() => logOut()}>Logout</button>
                        </ul>
                    </div>
                    {/* profile end */}
                </div>
            </div>
            {/*  */}
        </div>
    );
};
export default Navber;