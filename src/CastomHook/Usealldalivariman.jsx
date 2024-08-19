
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import UseAxiosPublick from "./UseAxiosPublick";
import { useQuery } from "@tanstack/react-query";


const UseallDalivariman = () => {
    const {user} = useContext(CreatAuthContext)
    console.log(user);
    const axiosPublick = UseAxiosPublick()
    const {data : deliverymans} = useQuery({
        queryKey:["deliverymans"],
        queryFn: async()=>{
            const res = await axiosPublick.get("/alldalivariman")
            return res?.data
        }
    })
    return [deliverymans]
       
};

export default UseallDalivariman;