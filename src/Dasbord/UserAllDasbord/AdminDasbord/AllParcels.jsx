
import { useState } from 'react';
import { useEffect } from 'react';
import UseAxiosPublick from '../../../CastomHook/UseAxiosPublick';
import React from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';





const AllParcels = () => {
const axiosPublick = UseAxiosPublick()
const [dalivariman , setdalivariman] = useState([])


useEffect(()=>{
    axiosPublick.get('/alldalivariman')
    .then(res =>{
        setdalivariman(res?.data)
    })
},[axiosPublick])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const axiousPublick = UseAxiosPublick();
    const [productInfo, setProdictInfo] = useState([])
    const [id, setId] = useState('')
    useEffect(() => {
        axiousPublick.get('/productinfo')
            .then(res => {
                console.log(res?.data);
                setProdictInfo(res?.data)
            })
    }, [axiousPublick])

    const status = {
        status: "On The Way"
    }


    const handeldalivariman = e => {
        e.preventDefault();
        const delivarimanid = e.target.dman.value;
        const approximateDeliveryDate = e.target.date.value;
        const productUpdatedate = { delivarimanid, approximateDeliveryDate };
        const allupdadeData = { productUpdatedate, status };
        axiousPublick.patch(`/updateproductinfo/${id}`, allupdadeData)
            .then(res => {
                console.log(res?.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status delevared success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    };


    const openUpdateModal = (productId) => {
        setId(productId)
        openModal()
    }


    console.log(productInfo);
    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="max-w-[1000px]">

                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <button onClick={closeModal}>close</button>
                        <div></div>
                        <div className="w-full max-w-lg mx-auto p-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-lg font-medium mb-6">Payment Information</h2>
                                <form onSubmit={handeldalivariman}>
                                    <div className="">
                                        <select name='dman' className="select select-bordered w-full ">
                                            <option disabled selected>select dalivary man id</option>
                                           {
                                            dalivariman.map(d =>(
                                                <option key={d._id}>{d.email}</option>
                                            ))
                                           }
                                            
                                        </select>
                                        <input name="date" type="date" className="mt-5 input  input-bordered w-full" />
                                    </div>
                                    <div className="mt-8">
                                        <button type="submit" className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Modal>

                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-black">All Order</h2>
                        <span className="px-3 py-1 text-xs text-black bg-blue-100 rounded-full  dark:text-blue-400">{productInfo.length}</span>
                    </div>
                    <div className="flex flex-col mt-6 text-black">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>User’s Name </span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>User’s Phone </span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Booking Date</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Requested Delivery Date</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Cost</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Status</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Manage Buutton</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        </svg>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 ">
                                            {
                                                productInfo.map(product => (
                                                    <tr key={product._id}>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product.productInfo.name}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product.status.number}</td>
                                                        <td className="px-4 text-center py-4 text-sm whitespace-nowrap">{product.productInfo.phone}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap text-center">{product.productInfo.requestedDeliveryDate}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap"><p className={product.status.status === 'panding' ? "bg-green-200 text-red-600 px-3 py-1 rounded-md" : "bg-green-200 text-green-900-600 px-3 py-1 rounded-md"}>{product.status.status}</p></td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">10</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap"> <button onClick={() => { openUpdateModal(product._id) }} className="btn bg-green-600 text-white">Manage Button</button></td>
                                                    </tr>
                                                ))
                                            }
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

export default AllParcels;
