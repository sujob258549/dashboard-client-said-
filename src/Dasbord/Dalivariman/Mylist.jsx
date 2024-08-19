
import { useContext, useEffect, useState } from "react";
import UseAxiosPublick from "../../CastomHook/UseAxiosPublick";
import { CreatAuthContext } from "../../Firebase/Authprovider";
import Swal from "sweetalert2";

const Mylist = () => {
    const { user } = useContext(CreatAuthContext);
    const [spicifyproductinfos, setSpicifyproductinfo] = useState([]);
    const axiosPublick = UseAxiosPublick();
    const cancelStatus = 'sending';
    const finalStatus = 'Delivered';
    const alldalivarid = spicifyproductinfos.length;

    useEffect(() => {
        if (user?.email) {
            axiosPublick.get(`/spicifyproductinfo/${user.email}`)
                .then(res => {
                    setSpicifyproductinfo(res.data);
                    console.log(res.data);
                });
        }
    }, [user?.email, axiosPublick]);

    const handelupdateCancelStatus = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublick.patch(`/canceldalivary/${id}`, { status: cancelStatus })
                    .then(res => {
                        // Optionally update the state or handle success response
                        console.log('Status updated', res.data);
                    });
            }
        });
    };
    const handelupdateDalivaridStatus = (ids) => {
        axiosPublick.patch(`/fainaldalivary/${ids}`, { status: finalStatus })
            .then(res => {
                // Optionally update the state or handle success response
                console.log('Status updated', res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status delevared success",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }
    const handelDalivary = () => {
        axiosPublick.patch(`/adddalivari/${user?.email}`, { dalivary: alldalivarid })
            .then(res => {
                // Optionally update the state or handle success response
                console.log('Status updated', res.data);
            });
    }
    handelDalivary();
    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="max-w-[1000px]">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-black">All Orders</h2>
                        <span className="px-3 py-1 text-xs text-black bg-blue-100 rounded-full dark:text-blue-400">{spicifyproductinfos.length}</span>
                    </div>
                    <div className="flex flex-col mt-6 text-black">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right">Booked User’s Name</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Receivers Name
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Booked User’s Phone
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Requested Delivery Date
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Approximate Delivery Date
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Receiver’s Phone Number
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Receivers Address
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Delivered
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right">
                                                    Cancel Button
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {spicifyproductinfos.map(product => (
                                                <tr key={product?._id}>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.name}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.receiverName}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.phone}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.requestedDeliveryDate}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.approximateDeliveryDate}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.receiverPhone}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">{product?.productInfo?.deliveryAddress}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <button onClick={() => handelupdateDalivaridStatus(product._id)} className="btn bg-green-600 text-white">Delivered</button>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <button onClick={() => handelupdateCancelStatus(product._id)} className="btn bg-red-600 text-white">Cancel</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mylist;
