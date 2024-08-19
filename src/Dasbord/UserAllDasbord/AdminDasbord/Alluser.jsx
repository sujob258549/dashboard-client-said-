import { useState, useEffect } from "react";
import UseAxiosPublick from "../../../CastomHook/UseAxiosPublick";

const Alluser = () => {
    const axiospublick = UseAxiosPublick();
    const [users, setUser] = useState([]);

    useEffect(() => {
        axiospublick.get('/allusers')
            .then(res => {
                setUser(res?.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [axiospublick]);

    console.log(users);

    return (
        <div>
            <h1 className="text-2xl font-bold ml-5">All Users {users.length}</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User's Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Parcels Booked</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.number}</td>
                            <td className="px-6 py-4 whitespace-nowrap"></td>
                            <td className="px-6 py-4 whitespace-nowrap"></td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Make Delivery Men</button>
                                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Make Admin</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Alluser;
