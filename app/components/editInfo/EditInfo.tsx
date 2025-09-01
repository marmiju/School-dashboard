'use client'
import { UserType } from '@/lib/function/users/getUSerById'
import React, { useState } from 'react'
import InputBox from '../InputBox/InputBox'




const EditInfo = ({ userData }: { userData: UserType }) => {
  const [userdata, setuserdata] = useState<UserType>(userData)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setuserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='p-4 flex flex-wrap gap-2'>
      <InputBox label='username' name='username' onChenge={handleOnChange} value={userdata.username} placeholder='empty field' required type='text' />
      <InputBox label='username' name='username' onChenge={handleOnChange} value={userdata.username} placeholder='empty field' required type='text' />
      <InputBox label='username' name='username' onChenge={handleOnChange} value={userdata.username} placeholder='empty field' required type='text' />
      <InputBox label='username' name='username' onChenge={handleOnChange} value={userdata.username} placeholder='empty field' required type='text' />
    </div>
  )
}

export default EditInfo
