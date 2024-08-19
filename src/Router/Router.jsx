import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../loginandregister/Login";
import Signup from "../loginandregister/Signup";
import Userdasbord from "../Dasbord/Userdasbord";
import BookParsel from "../Dasbord/UserAllDasbord/BookParsel";
import Myparsel from "../Dasbord/UserAllDasbord/Myparsel";
import Myprofile from "../Dasbord/UserAllDasbord/Myprofile";
import UpdateUserProfile from "../Dasbord/UserAllDasbord/UpdateUserProfile";
import AllParcels from "../Dasbord/UserAllDasbord/AdminDasbord/AllParcels";
import MyReviews from "../Dasbord/Dalivariman/MyReviews";
import Alluser from "../Dasbord/UserAllDasbord/AdminDasbord/Alluser";
import AllDalivariman from "../Dasbord/UserAllDasbord/AdminDasbord/AllDalivariman";
import UpdateParsel from "../Dasbord/UserAllDasbord/UpdateParsel";
import Mylist from "../Dasbord/Dalivariman/Mylist";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/dasbord',
                element: <Userdasbord></Userdasbord>,
                children: [
                    {
                        path: 'bookparsel',
                        element: <BookParsel></BookParsel>
                    },
                    {
                        path: 'myparsel',
                        element: <Myparsel></Myparsel>
                    },
                    {
                        path: 'myProfile',
                        element: <Myprofile></Myprofile>
                    },
                    {
                        path: 'myProfile/updateusernameandphoto',
                        element: <UpdateUserProfile></UpdateUserProfile>
                    },
                    {
                        path: 'allparcel',
                        element: <AllParcels></AllParcels>
                    },
                    {
                        path: 'myreviews',
                        element: <MyReviews></MyReviews>
                    },
                    {
                        path: 'allusers',
                        element: <Alluser></Alluser>
                    },
                    {
                        path: 'alldalivariman',
                        element: <AllDalivariman></AllDalivariman>
                    },
                    {
                        path: 'mylest',
                        element: <Mylist></Mylist>
                    },
                    {
                        path: 'myparsel/update/:id',
                        element: <UpdateParsel></UpdateParsel>,
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_bakend_url}/priductinfo/${params.id}`)
                    }
                ]
            }

        ]



    }
])

export default router;