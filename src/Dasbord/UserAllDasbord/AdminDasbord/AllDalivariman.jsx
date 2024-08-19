import { useEffect, useState } from "react";
import UseAxiosPublick from "../../../CastomHook/UseAxiosPublick";
import UseDalevariman from "../../../CastomHook/UseDalevariman";


const AllDalivariman = () => {
    const [deliveryman] = UseDalevariman()
    console.log(deliveryman);
    const axiospublick = UseAxiosPublick();
    const [deliveryMen, setdeliveryMen] = useState([]);

    useEffect(() => {
        axiospublick.get('/alldalivariman')
            .then(res => {
                setdeliveryMen(res?.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [axiospublick]);
    console.log(deliveryMen);
    return (
        <div>
            <h1 className="text-2xl font-bold ml-5">All Delivery Men {deliveryMen.length}</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Man's Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Parcels Delivered</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Review</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {deliveryMen.map((deliveryMan) => (
                        <tr key={deliveryMan._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{deliveryMan.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{deliveryMan.number}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{deliveryMan.delevary}</td>
                            <td className="px-6 py-4 whitespace-nowrap"></td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              
                                <button
                                    className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                                
                                >
                                    Make Admin
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllDalivariman;