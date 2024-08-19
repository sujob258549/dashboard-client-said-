
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import UseAxiosPublick from "./UseAxiosPublick";
import { useQuery } from "@tanstack/react-query";


const UseDalevariman = () => {
    const {user} = useContext(CreatAuthContext)
    console.log(user);
    const axiosPublick = UseAxiosPublick()
    const {data : deliveryman} = useQuery({
        queryKey:[user?.email, "deliveryman"],
        queryFn: async()=>{
            const res = await axiosPublick.get(`/user/deliveryman/${user.email}`)
            return res?.data.deliveryman
        }
    })
    return [deliveryman]
       
};

export default UseDalevariman;