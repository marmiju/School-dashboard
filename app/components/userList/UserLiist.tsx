
import { GrView } from 'react-icons/gr'
import { FaEdit } from 'react-icons/fa'
import { IoTrashBin } from 'react-icons/io5'
import { UserInterface } from '@/lib/interface/UserWithdetails'
import { Suspense } from 'react'
import Image from 'next/image'

interface props {
    users: UserInterface[]
}

const UserLiist = ({ users }: props) => {

    return (
        <Suspense fallback={<div>Wait Jsut A Time...</div>}>
            <div className='overflow-auto'>
                <table className="w-full  ">
                    <thead className="">
                        <tr className="bg-secondary font-semibold text-sm text-primary">
                            <th className="  ">serial</th>
                            <th className="  ">Name</th>
                            <th className=" ">Email</th>
                            <th className=" ">Phone</th>
                            <th className=" ">Role</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr key={user.id} className="text-center bg-secondary border border-background text-text/70  transition-all duration-300">
                                
                                <td className=" p-1 truncate sm:whitespace-normal ">{index+1}</td>
                                <td className=" p-1 truncate sm:whitespace-normal ">{user.name}</td>
                                <td className=" p-1  overflow-ellipsis truncate sm:whitespace-normal">{user.email}</td>
                                <td className=" p-1  overflow-ellipsis truncate sm:whitespace-normal">{user.phone}</td>
                                <td className=" p-1  overflow-ellipsis truncate sm:whitespace-normal">{user.role}</td>
                                <td className="gap-2 space-x-4">
                                    <button className='cursor-pointer text-text' ><GrView/></button>
                                    <button className='cursor-pointer text-yellow-200'><FaEdit/></button>
                                    <button className='cursor-pointer text-red-200' ><IoTrashBin/></button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </Suspense>

    )
}

export default UserLiist