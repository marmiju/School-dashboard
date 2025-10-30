'use client'
import { GrView } from 'react-icons/gr'
import { FaEdit } from 'react-icons/fa'
import { IoTrashBin } from 'react-icons/io5'
import { UserInterface } from '@/lib/interface/UserWithdetails'
import { Suspense, useState } from 'react'
import UserViewModal from '../modal/UserViewModal'
import { toast, ToastContainer } from 'react-toastify'
import UserDelModal from '../modal/UserdelModal'

interface Props {
    users: UserInterface[]
}

const UserLiist = ({ users }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpendel, setIsOpendel] = useState(false)
    const [user, setUser] = useState<UserInterface | null>(null)
    const [delUserId, setDelUserId] = useState<number | null>(null)

    // Open view modal
    const handleView = (userid: number) => {
        const usr = users.find(u => u.id === userid)
        setUser(usr || null)
        setIsOpen(true)
    }

    // Open delete modal
    const handleDelModal = (userid: number) => {
        setDelUserId(userid)
        setIsOpendel(true)
    }

    // Close delete modal
    const handleDelClose = () => {
        setIsOpendel(false)
        setDelUserId(null)
    }

    return (
        <Suspense fallback={<div>Wait Just A Time...</div>}>
            <ToastContainer />
            {isOpendel && delUserId && (
                <UserDelModal id={delUserId} onchenge={handleDelClose} />
            )}
            {isOpen && user && (
                <UserViewModal onchenge={() => setIsOpen(false)} user={user} />
            )}
            <div className='overflow-auto'>
                <table className="w-full border-collapse space-y-2">
                    <thead>
                        <tr className="bg-secondary font-semibold text-sm text-primary">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="text-center bg-secondary border border-background text-text/70 transition-all duration-300">
                                <td className="p-1 truncate sm:whitespace-normal">{user.id}</td>
                                <td className="p-1 truncate sm:whitespace-normal">{user.name}</td>
                                <td className="p-1 overflow-ellipsis truncate sm:whitespace-normal">{user.email}</td>
                                <td className="p-1 overflow-ellipsis truncate sm:whitespace-normal">{user.phone}</td>
                                <td className="p-1 overflow-ellipsis truncate sm:whitespace-normal">{user.role}</td>
                                <td className="gap-2 space-x-4">
                                    <button onClick={() => handleView(user.id!)} className='cursor-pointer text-text'><GrView /></button>
                                    <button className='cursor-pointer text-yellow-200'><FaEdit /></button>
                                    <button onClick={() => handleDelModal(user.id!)} className='cursor-pointer text-red-200'><IoTrashBin /></button>
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
