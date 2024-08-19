import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logopng from '../assets/image/register/logopng register.png';
import './loginandregister.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CreatAuthContext } from "../Firebase/Authprovider";
import Swal from "sweetalert2";
import { IoMdPhotos } from "react-icons/io";
import UseAxiosPublick from "../CastomHook/UseAxiosPublick";



// const imgage_hosting_kye = import.meta.env.VITE_image_bb_api_kye;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgage_hosting_kye}`


const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, upadateprofile, setuser, user, signout } = useContext(CreatAuthContext);
    const axiosPublick = UseAxiosPublick()
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;
        const userType = e.target.userType.value
        const number = e.target.number.value
        const userInfo = {
            name,number, photo, email, password, userType
        }
        if (password.length < 6) {
            toast.error('Password must be 6 characters or longer!');
            return;
        }
        if (password !== cpassword) {
            toast.error('Passwords do not match!');
            return;
        }
        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            toast.error('Please use a stronger password.');
            return;
        }
        // const res = await axiosPublick.post(image_hosting_api, photo, {
        //     headers: { 'content-type': 'multipart/form-data' }
        // })


        // console.log(res.data);
        // const image = res.data.data.display_url;

        creatUser(email, password)
            .then(result => {
                axiosPublick.post('/user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Success",
                                text: "User created successfully!",
                            });
                        }
                    })
                console.log(result);
                upadateprofile(name, photo)
                setuser({ ...user, photoURL: photo, displayName: name })

                signout();
                navigate('/login');
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);
            });
    };

    return (
        <div className="">
            <section className="background-register">
                <div className="container flex items-center justify-center">
                    <form onSubmit={handleRegister} className="w-full mx-5 md:mx-auto bg-[#ffffffb0] max-w-md p-5 my-5 md:my-10 rounded-md" style={{ boxShadow: "1px 1px 10px" }}>
                        <div className="flex justify-center mx-auto">
                            <img className="h-24" src={logopng} alt="Logo" />
                        </div>

                        <div className="flex items-center justify-center mt-6">
                            <Link to={'/login'} className="w-1/3 pb-4 text-black font-medium text-center capitalize border-b dark:border-gray-400">
                                Sign In
                            </Link>
                            <a href="#" className="w-1/3 pb-4 font-medium text-center capitalize border-b-2 text-black border-blue-500 dark:border-blue-400">
                                Sign Up
                            </a>
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <input name="name" type="text" className="block w-full py-3  bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" required />
                        </div>


                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <FaPhoneAlt className="ml-3 text-2xl"></FaPhoneAlt>
                            </span>
                            <input name="number" type="number" className="block w-full py-3  bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Phone Number" required />
                        </div>
                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <IoMdPhotos className="ml-3 text-2xl"></IoMdPhotos>
                            </span>
                            <input name="image" type="text" className="block w-full py-3  bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Photo url" required />
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input name="email" type="email" className="block w-full py-3  bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />
                        </div>
                        <select name="userType" className="select select-bordered w-full mt-5">
                            <option disabled selected>Select user type</option>
                            <option value={'user'}>user</option>
                            <option value={'DeliveryMen'}>DeliveryMen</option>
                        </select>
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <input name="password" type={showPassword ? 'text' : 'password'} className="block w-full px-10 py-3 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
                            <div className="absolute right-5 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                            </div>
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <input name="cpassword" type={showPassword ? 'text' : 'password'} className="block w-full px-10 py-3 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" required />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>
                            <div className="mt-6 text-center">
                                <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Signup;
