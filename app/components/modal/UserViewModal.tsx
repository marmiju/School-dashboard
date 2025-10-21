import { UserInterface } from '@/lib/interface/UserWithdetails'
import Image from 'next/image'
import React from 'react'
import { ImCross } from 'react-icons/im'

const UserViewModal = ({ user, onchenge }: { user: UserInterface | null, onchenge: (id: number) => void }) => {
    return (
        <div className='fixed text-text inset-0 bg-background/70 backdrop-blur-sm flex justify-center items-center z-10'>
            <div className='bg-secondary border border-primary/20 gap-4  p-4 rounded-xl relative flex flex-col md:flex-row  max-w-md space-y-4'>
                <button onClick={() => onchenge(0)} className='bg-background absolute top-[-5px] left-[-5px] rounded-full hover:bg-red-600 duration-300 text-[10px] w-5 h-5 flex justify-center items-center p-1 cursor-pointer'><ImCross /></button>
                {/* content */}

                {/* first div for primary info */}
                <div className='flex flex-col'>
                    <div className=''>
                        {user?.profile_picture ?
                            <Image src={user!.profile_picture!} alt={user!.name!} width={200} height={200} className='rounded-sm' />
                            : <div className='w-44 h-44 bg-primary object-cover rounded-2xl flex justify-center items-center text-8xl text-background font-bold'>{user!.name!.charAt(0).toUpperCase()}</div>
                        }
                    </div>
                </div>

                {/* second div for secondry info */}
                <div>
                    <p className='text-xl text-primary'><span className='text-text/50'>নাম:</span> {user?.name || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>পদবি:</span> {user?.designation || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>ইমেইল:</span> {user?.email || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>মোবাইল:</span> {user?.phone || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>রোল:</span> {user?.role || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>ঠিকানা:</span> {user?.address || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>শিক্ষাগত যোগ্যতা:</span> {user?.education || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>যোগদানের তারিখ:</span> {user?.joinDate?.slice(0,10) || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>জন্মদিন:</span> {user?.birthDate?.slice(0,10) || 'N/A'}</p>
                    <p className='text-text/90'><span className='text-text/50'>ধর্মঃ</span> {user?.religion || 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

export default UserViewModal