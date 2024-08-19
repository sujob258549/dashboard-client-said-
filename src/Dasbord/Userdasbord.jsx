import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CreatAuthContext } from './../Firebase/Authprovider';
import Useadmin from "../CastomHook/Useadmin";
import UseUser from "../CastomHook/UseUser";
import UseDalevariman from "../CastomHook/UseDalevariman";
import MyReviews from "./Dalivariman/MyReviews";
import { FaRegStar } from "react-icons/fa";


const Userdasbord = () => {
    const { user } = useContext(CreatAuthContext)
    const [isUser] = UseUser()
    const [isAdmin] = Useadmin()
    const [deliveryman] = UseDalevariman()
    console.log(deliveryman);
    return (
        <div className="flex md:flex-row flex-col min-h-screen bg-gray-100 container mx-auto">
            {/* Sidebar */}
            <div className=" md:flex flex-col w-full md:w-64 bg-gray-800">
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <span className="text-white font-bold uppercase">Daystar Dashboard</span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className=" flex md:flex-col flex-row flex-wrap justify-center px-2 py-4 bg-gray-800">
                        {
                            user && isUser && <>
                                <Link to={'bookparsel'} className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                        />
                                    </svg>
                                    Book parsel
                                </Link>
                                <Link to={'myparsel'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                        />
                                    </svg>
                                    My Parcels 
                                </Link>


                                <Link to={'myProfile'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">

                                    ❖  My Profile
                                </Link>

                            </>
                        }
                        {
                            user && deliveryman && <>
                                <Link to={'mylest'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                    <FaRegStar className="mr-2"></FaRegStar>  My Delivery List
                                </Link>
                                <Link to={'myreviews'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                    <FaRegStar className="mr-2"></FaRegStar>  My Reviews
                                </Link>
                            </>
                        }

                        {
                            isAdmin && user && <>
                                <Link to={'allparcel'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">

                                    ❖ All Parcels
                                </Link>
                                <Link to={'alldalivariman'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">

                                    ➔ All Delivery Men
                                </Link>
                                <Link to={'allusers'} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">

                                    ➔ All Users
                                </Link>


                            </>
                        }


                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1 py-5 md:py-10">
                <div className="p-4">
                    <h1 className="md:text-4xl text-center text-2xl font-bold">Welcome to Dashboard </h1>
                </div>
                <Outlet></Outlet>

            </div>
        </div >
    );
};

export default Userdasbord;
