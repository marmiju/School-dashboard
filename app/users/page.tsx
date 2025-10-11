
import { getUsers } from "@/lib/function/users/getUsers"
import UserLiist from "../components/userList/UserLiist"
import { Button } from "../components/btn/Button/Button"
import { CgAdd } from "react-icons/cg"
import Pagegnation from "../components/pagegnation/pagegnation"

const page = async () => {
    const Users = await getUsers()
    

  return (

    <div className='p-2 '>
       
            {/* userBar  */}
            <div className="p-4 border-b">
                <h1 className="text-2xl font-bold">Users</h1>
                <p className="text-sm text-text/70">Manage your users</p>
            </div>
            
            {/* add new User */}
            <div className="flex  justify-between items-center p-4 border-b">
                <p className=" text-sm lg:text-2xl">totsal user: {Users.length}</p>
                <Button text="Add New User" icon={<CgAdd/>} custom_css="my-4"/>
            </div>



            {/* User List */}
            <UserLiist users={Users}/>
            
        
             
        
    </div>
    
  )
}

export default page
