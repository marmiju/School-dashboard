import { UserInterface } from '@/lib/interface/UserWithdetails'

import React from 'react'
import { ImCross } from 'react-icons/im'
import UpdateUser from '../UpdateInput/UpdateInput'

const EditUserModal = ({ user,closehandler }: { user: UserInterface | null , closehandler:()=>void }) => {
    return (
        <div className='fixed overflow-auto text-text inset-0 bg-background/70 backdrop-blur-sm flex justify-center items-center z-10 '>
            <div className=''>
                <button onClick={closehandler} className='bg-red-400 absolute top-2 left-2 rounded-full hover:bg-red-600 duration-300 text-[10px] w-5 h-5 flex justify-center items-center p-1 cursor-pointer'><ImCross /></button>
                {/* content */}
                <UpdateUser user={user!}/>
            </div>
        </div>
    )
}

export default EditUserModal