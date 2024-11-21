import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { TbBrandCodepen } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { LiaConnectdevelop } from "react-icons/lia";
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    
    const links = <>
        <li><NavLink className='py-1 px-3' to="/"><FaHome />Home</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/brands"><TbBrandCodepen />Brands</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/my-profile"><IoPersonCircle />My Profile</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/about-dev"><LiaConnectdevelop />About Dev</NavLink></li>
    </>
    const joining = <>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/sign-up" className="btn">Sign up</Link>
    </>
    return (
        <div className="navbar w-11/12 mx-auto px-0">
            <div className="navbar-start md:w-1/2 w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
                        {links}
                    </ul>
                </div>
                <Link to='/' className="font-bold text-xl italic">Discount PRO</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            {
                user ? (
                    <div className="navbar-end gap-2">
                        <h2>{user.email}</h2>
                        <button className='btn' onClick={logOut}>Log Out</button>
                    </div>
                ):
                (
                        <div className="navbar-end">
                            <div className='gap-2 hidden lg:flex'>
                                {joining}
                            </div>
                            <div>
                                <details className="dropdown block lg:hidden">
                                    <summary className="btn m-1">Join</summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[10] md:w-52 w-40 p-2 shadow gap-2 right-0">
                                        {joining}
                                    </ul>
                                </details>
                            </div>
                        </div>
                )
            }
        </div>
    );
};

export default NavBar;