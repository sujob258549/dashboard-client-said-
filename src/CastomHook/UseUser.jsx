import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import UseAxiosPublick from "./UseAxiosPublick";
import { useQuery } from "@tanstack/react-query";


const UseUser = () => {
    const { user } = useContext(CreatAuthContext)
    const axiosPublick = UseAxiosPublick()
    const {data : isUser} = useQuery({
        queryKey:[user?.email, "isUser"],
        queryFn: async()=>{
            const res = await axiosPublick.get(`/user/main/${user.email}`)
            return res?.data?.user
        }
    })
    return [isUser]
};

export default UseUser;