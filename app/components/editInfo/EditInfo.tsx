'use client'
import { UserType } from '@/lib/function/users/getUSerById'
import React from 'react'
import InputBox from '../InputBox/InputBox'


const handleOnchenge = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  // Handle input change logic here
}

const EditInfo = ({userData}:{userData: UserType}) => {
  return (
    <div>
      <InputBox label='username' name='username' onChenge={handleOnchenge}  value={userData.username} placeholder='empty field' required type='text'/>
    </div>
  )
}

export default EditInfo
