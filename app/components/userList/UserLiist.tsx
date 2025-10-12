
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
            <div className='overflow-scroll'>
                <table className="w-full  ">
                    <thead className="">
                        <tr className="bg-primary text-white">
                            <th className="p-2  truncate sm:whitespace-normal">Image</th>
                            <th className="p-2  truncate sm:whitespace-normal">Name</th>
                            <th className="p-2  truncate sm:whitespace-normal">Email</th>
                            <th className="p-2  truncate sm:whitespace-normal">Phone</th>
                            
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="text-center bg-secondary border border-gray-300  transition-all duration-300">
                                <tr className='w-16 h-16 m-auto'>
                                    <Image className='w-16 h-16 m-auto  object-cover' src={user.profile_picture ? user.profile_picture : 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'} alt={user.name} width={50} height={50} />
                                </tr>
                                <td className="p-2  truncate sm:whitespace-normal">{user.name}</td>
                                <td className="p-2  overflow-ellipsis truncate sm:whitespace-normal">{user.email}</td>
                                <td className="p-2  overflow-ellipsis truncate sm:whitespace-normal">{user.phone}</td>
                                <td className="gap-2 space-x-4">
                                    <button className='cursor-pointer text-blue-500' ><GrView/></button>
                                    <button className='cursor-pointer text-yellow-600'><FaEdit/></button>
                                    <button className='cursor-pointer text-red-500' ><IoTrashBin/></button>
                                    
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