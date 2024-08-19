
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import UseAxiosPublick from "./UseAxiosPublick";
import { useQuery } from "@tanstack/react-query";


const UseSpicifayProduct = () => {
    const {user} = useContext(CreatAuthContext)
    const axiosPublick = UseAxiosPublick()
    const {data : spicifyproductinfo} = useQuery({
        queryKey:[user?.email, "spicifyproductinfo"],
        queryFn: async()=>{
            const res = await axiosPublick.get(`/spicifyproductinfo/${user.email}`)
            return res?.data
        }
    })
    return [spicifyproductinfo]
       
};

export default UseSpicifayProduct;