import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseAxiosPublick from '../../CastomHook/UseAxiosPublick';
import { CreatAuthContext } from '../../Firebase/Authprovider';

const Myparsel = () => {
    const axiosPublick = UseAxiosPublick();
    const { user } = useContext(CreatAuthContext);
    const [spicifyproductinfos, setSpicifyproductinfo] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true); 

        axiosPublick.get(`/myproduct/${user?.email}`)
            .then(res => {
                setSpicifyproductinfo(res?.data);
                setLoading(false); 
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
                setLoading(false); 
            });
    }, [user?.email, axiosPublick]); // Dependency array with user?.email and axiosPublick

    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="max-w-[1000px]">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-black">All Orders</h2>
                        <span className="px-3 py-1 text-xs text-black bg-blue-100 rounded-full">{spicifyproductinfos.length}</span>
                    </div>
                    <div className="flex flex-col mt-6 text-black">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                    {loading ? (
                                        <p>Loading...</p> // Placeholder for loading state
                                    ) : (
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left">Parcel Type</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Requested Delivery Date</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Approximate Delivery Date</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Booking Date</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Delivery Men ID</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Booking Status</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Review Button</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Pay Button</th>
                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left">Update Button</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {spicifyproductinfos.map(product => (
                                                    <tr key={product?._id}>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.parcelType}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.requestedDeliveryDate}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.approximateDeliveryDate}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.status?.date?.slice(0, 10)}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.deliveryMenId}</td>
                                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                                <h2 className="text-sm font-normal text-emerald-500">{product?.status?.status}</h2>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <button className="btn bg-yellow-600 text-white">Review</button>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <button className="btn bg-green-600 text-white">Pay</button>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <Link to={`update/${product._id}`} className="btn bg-green-600 text-white">Update</Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Myparsel;
