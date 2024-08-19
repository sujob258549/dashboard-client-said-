import { useContext } from "react";
import { CreatAuthContext } from "../../Firebase/Authprovider";
import { Link } from "react-router-dom";


const Myprofile = () => {
    const{user} = useContext(CreatAuthContext)
    return (
        <div>
            <div className="w-full max-w-md mx-auto  px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center -mt-16 md:justify-end">
                    <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user?.photoURL} />
                </div>

                <h2 className="mt-2 text-xl text-center font-semibold text-black md:mt-0">{user?.email}</h2>

                <p className="mt-2 text-center text-xl font-bold py-5">{user?.displayName}</p>
                <div className="flex pb-5 justify-center"><Link to={'updateusernameandphoto'} className="btn mx-auto text-xl font-medium bg-green-600 text-white">Update</Link></div>
            </div>
        </div>
    );
};

export default Myprofile;