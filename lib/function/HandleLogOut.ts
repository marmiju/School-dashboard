
import { redirect } from "next/navigation"
import { LogOut } from "./auth/LogOut"
import { toast } from "react-toastify"

export const HandleLogOut=async ()=>{
        const res = await LogOut()
        if (res==='LogOut'){
            redirect('/login')
        }else{
         toast.error(res)
        }
    }