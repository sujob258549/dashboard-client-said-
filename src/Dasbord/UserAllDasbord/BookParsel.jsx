import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreatAuthContext } from './../../Firebase/Authprovider';
import UseAxiosPublick from './../../CastomHook/UseAxiosPublick';
import Swal from "sweetalert2";


const BookParsel = () => {
    const { user } = useContext(CreatAuthContext);
    const [number, setNumber] = useState('');
    console.log(number.number);
    useEffect(()=>{
        axiosPublick.get(`/soicifaiUser/${user.email}`)
        .then(res => {
            setNumber(res?.data)
        })
    },[])
    const axiosPublick = UseAxiosPublick()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const status = {
        status: "pending",
        date: new Date(),
        number :number.number
    }
    const onSubmit = data => {
        const productInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            parcelType: data.parcelType,
            parcelWeight: parseInt(data.parcelWeight),
            receiverName: data.receiverName,
            receiverPhone: data.receiverPhone,
            deliveryAddress: data.deliveryAddress,
            requestedDeliveryDate: data.requestedDeliveryDate,
            deliveryAddressLatitude: data.deliveryAddressLatitude,
            deliveryAddressLongitude: data.deliveryAddressLongitude,
            deliveryPrice: parseFloat(data.parcelWeight * 50) // Corrected variable name
        }

        console.log(productInfo, status);
        const prosuctAllInfo = {
            productInfo, status
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  Ok!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublick.post('/priductinfo', prosuctAllInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Success",
                                text: "User created successfully!",
                            });
                        }
                    })
            }
        });

    };


    return (
        <div>
            <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                <div className="mt-10 text-center font-bold">Contact Us</div>
                <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Name *"
                                readOnly
                                // value={user.displayName}
                                value={user?.displayName || ""}
                                name="name"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Email *</label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Email *"
                                readOnly
                                name="email"
                                value={user?.email || ""}
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                            <input
                                type="number"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Phone Number *"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <p className="text-red-500">Phone number is required</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Parcel Type *</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Parcel Type *"
                                {...register("parcelType", { required: true })}
                            />
                            {errors.parcelType && <p className="text-red-500">Parcel type is required</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Parcel Weight *</label>
                            <input
                                type="number"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Parcel Weight *"
                                {...register("parcelWeight", { required: true })}
                            />
                            {errors.parcelWeight && <p className="text-red-500">Parcel weight is required</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Receiver’s Name *</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Receiver’s Name *"
                                {...register("receiverName", { required: true })}
                            />
                            {errors.receiverName && <p className="text-red-500">Receiver’s name is required</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Receiver's Phone Number *</label>
                            <input
                                type="tel"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Receiver's Phone Number *"
                                {...register("receiverPhone", { required: true })}
                            />
                            {errors.receiverPhone && <p className="text-red-500">Receiver's phone number is required</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Parcel Delivery Address *</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Parcel Delivery Address *"
                                {...register("deliveryAddress", { required: true })}
                            />
                            {errors.deliveryAddress && <p className="text-red-500">Delivery address is required</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Requested Delivery Date *</label>
                            <input
                                type="date"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Requested Delivery Date *"
                                {...register("requestedDeliveryDate", { required: true })}
                            />
                            {errors.requestedDeliveryDate && <p className="text-red-500">Requested delivery date is required</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Delivery Address Latitude *</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Delivery Address Latitude *"
                                {...register("deliveryAddressLatitude", { required: true })}
                            />
                            {errors.deliveryAddressLatitude && <p className="text-red-500">Delivery address latitude is required</p>}
                        </div>
                    </div>
                    <div className="my-6">
                        <label className="block text-sm font-semibold text-gray-700">Delivery Address Longitude *</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Delivery Address Longitude *"
                            {...register("deliveryAddressLongitude", { required: true })}
                        />
                        {errors.deliveryAddressLongitude && <p className="text-red-500">Delivery address longitude is required</p>}
                    </div>
                    <div className="text-center">
                        <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookParsel;
