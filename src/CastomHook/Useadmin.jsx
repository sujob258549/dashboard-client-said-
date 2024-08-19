
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import UseAxiosPublick from "./UseAxiosPublick";
import { useQuery } from "@tanstack/react-query";


const Useadmin = () => {
    const {user} = useContext(CreatAuthContext)
    const axiosPublick = UseAxiosPublick()
    const {data : isadmin} = useQuery({
        queryKey:[user?.email, "isadmin"],
        queryFn: async()=>{
            const res = await axiosPublick.get(`/user/admin/${user.email}`)
            return res?.data.admin
        }
    })
    return [isadmin]
       
};

export default Useadmin;