
import { Button } from '../btn/Button/Button'
import { GrView } from 'react-icons/gr'
import { FaEdit } from 'react-icons/fa'
import { IoTrashBin } from 'react-icons/io5'
import { UserInterface } from '@/lib/interface/UserWithdetails'
import { Suspense } from 'react'

interface props {
    users: UserInterface[]
}

const UserLiist = ({ users }: props) => {

    return (
        <Suspense fallback={<div>Wait Jsut A Time...</div>}> 
            <div className='overflow-auto'>
                <table className="w-full  border-collapse border border-red-500">
                    <thead className="border">
                        <tr className="bg-primary text-white border border-red-500">

                            <th className="p-2 border border-gray-300 truncate sm:whitespace-normal">Name</th>
                            <th className="p-2 border border-gray-300 truncate sm:whitespace-normal">Email</th>
                            <th className="p-2 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="text-center hover:bg-secondary/20 transition-all duration-300">

                                <td className="p-2 border truncate sm:whitespace-normal">{user.name}</td>
                                <td className="p-2 border overflow-ellipsis truncate sm:whitespace-normal">{user.email}</td>
                                <td className="flex justify-center p-2 border border-gray-300">
                                    <Button text="" icon={<GrView />} custom_css="m-2 bg-green-600 text-sm hover:bg-green-400" />
                                    <Button text="" icon={<FaEdit />} custom_css="m-2" />
                                    <Button text="" icon={<IoTrashBin />} custom_css="m-2 bg-red-600 hover:bg-red-400" />
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