import { useContext, useState } from "react";
import shopinglogo from '../assets/image/logo/track.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import './nav.css'
import { CreatAuthContext } from "../Firebase/Authprovider";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const navigate = useNavigate()
    const { user, signout } = useContext(CreatAuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const navLink = <>

        <NavLink to={'/'}>Home</NavLink>
        {
            user && <>
                 <NavLink to={'/dasbord'}>Dasbord</NavLink>
            </>
        }
        {/* <NavLink>Contact</NavLink> */}
    </>


    const handelLogout = () => {
        signout()
        navigate('/login')
    }
    const sublink = <>
        <Link to={'/dasbord'} className="btn text-white w-full text-[18px] font-bold  bg-[#16A34A]">Dashboard </Link>
        <button className="btn text-white w-full text-[18px] font-bold  bg-[#a42c2c]" onClick={handelLogout}>Logout</button>

    </>
    return (
        <nav className="relative bg-white shadow">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-auto h-6 md:h-16 object-cover sm:h-7" src={shopinglogo} alt="" />
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <>
                                        <div className="flex gap-1 items-center">

                                            <GiHamburgerMenu className="text-3xl"></GiHamburgerMenu>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex gap-1 items-center">
                                        <IoMdClose className="text-3xl"></IoMdClose>
                                    </div>
                                )}
                            </button>
                            <div>
                                {
                                    user && <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                {
                                                    user?.photoURL && <img
                                                        src={user.photoURL}
                                                        className="object-cover w-full h-full"
                                                        alt="avatar"
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu submenu my-10  ml-10  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            {
                                                sublink
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out text-black lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col bg-white md:bg-transparent menu -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {
                                navLink
                            }
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button
                                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover: dark:hover:text-gray-400 focus: dark:focus:text-gray-400 focus:outline-none"
                                aria-label="show notifications"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {
                                user && <div className="dropdown dropdown-end hidden md:block">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                user?.photoURL ? <img
                                                    src={user.photoURL}
                                                    className="object-cover w-full h-full"
                                                    alt="avatar"
                                                />
                                                    : ""
                                            }
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="flex flex-col gap-3 menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52">
                                        {
                                            sublink
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                        {
                            user ? '' : <Link to={'/login'} className="ml-2 py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
                                Login
                            </Link>
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
