'use client'
import React, { useState } from 'react'
import InputBox from '../InputBox/InputBox'
import avatar from '@/public/avatar.png'
import Image from 'next/image'
import { ImageInput } from '../fileInput/ImageInput'
import { Button } from '../btn/Button/Button'
import { MdOutlineUpdate } from 'react-icons/md'
import { baseUrl } from '@/lib/function/auth/getMe'
import { UserInterface } from '@/lib/interface/UserWithdetails'


const UpdateUser = ({ userDataProps }: { userDataProps: UserInterface }) => {
  const [userdata, setUserdata] = useState<UserInterface>(userDataProps)
  const [isLoading, setisloading] = useState<boolean>(false)
  const [preview, setPreview] = useState<string | null>( userdata.profile_picture ? userdata.profile_picture : null);

  // Handle text field change
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleImageChange = (file: File | null) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreview("pre"+fileURL);
      console.log(typeof(fileURL), fileURL);
      setUserdata((prev) => ({
        ...prev,
        profile_image: file
      }))

    }
  };


  

  return (
    <div className="p-4 flex flex-wrap gap-2">
      {/* update section */}
      <div className='flex justify-between items-center w-full '>
        <h3>Update Data:{userdata.id}</h3>
        <Button text={isLoading ? "not to submit" : "Submit Now"} icon={<MdOutlineUpdate />} onClick={isLoading ? () => { } : ()=>{}} custom_css={isLoading ? 'bg-gray-400 cursor-not-allowed' : ''} />
      </div>


      {/* Primary Info */}
      <div className="w-full flex flex-wrap gap-2 bg-white p-2 rounded-2xl">
        {/* Avatar */}
        <div className="w-[100%] md:w-[30%] space-y-2">
          <Image
            className="w-full h-64 object-cover rounded-2xl p-2 border border-gray-300"
            src={
              preview
                ? preview.startsWith("pre")
                 ? preview.slice(3)
                 : `${baseUrl}/` + preview
                : avatar 
            }
            alt="profile photo"
            width={300}
            height={300}
          />

          <ImageInput handleChange={handleImageChange} />
        </div>

        {/* Primary details */}
        <div className="w-full md:w-[68%] space-y-2">
          <InputBox
            label="নামঃ "
            name="name"
            onChenge={handleOnChange}
            value={userdata.name}
            placeholder="N/A"
            type="text"
          />
          <div className="grid md:flex space-x-1.5 w-full">
            <InputBox
              label="ই-মেইলঃ "
              name="email"
              onChenge={handleOnChange}
              value={userdata.email}
              placeholder="N/A"
              type="email"
            />
            <InputBox
              label="ফোনঃ "
              name="phone"
              onChenge={handleOnChange}
              value={userdata.phone!}
              placeholder="N/A"
              type="number"
            />
          </div>

          <div className='grid grid-cols-3 gap-2'>
            <InputBox label='শিক্ষাগত যোগ্যতা' name='class_name' onChenge={handleOnChange} value={userdata.education!} placeholder='N/A' type='text' />
            {/* <InputBox label='ক্লাস রোলঃ ' name='class_role' onChenge={handleOnChange} value={userdata.class_role!} placeholder='N/A' type='text' /> */}
            <InputBox label='ধর্মঃ' name='religion' onChenge={handleOnChange} value={userdata.religion!} placeholder='N/A' type='text' />

          </div>
        </div>
      </div>

      {/* secondary options */}
      <div className='bg-secondary w-full p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <InputBox
          label="ঠিকানাঃ"
          name="address"
          onChenge={handleOnChange}
          value={userdata.address || ""}
          placeholder="N/A"
        />

        <InputBox
          label="জন্ম তারিখঃ "
          name="birth_date"
          onChenge={handleOnChange}
          value={userdata.birthDate ? new Date(userdata.birthDate).toISOString().split("T")[0] : ""}
          type="date"
          placeholder="N/A"
        />

        <InputBox
          label="রক্তের গ্রুপঃ"
          name="blood_group"
          onChenge={handleOnChange}
          value={userdata.bloodgrp || ""}
          placeholder="N/A"
        />

        <InputBox
          label="শিক্ষাগত যোগ্যতা"
          name="education"
          onChenge={handleOnChange}
          value={userdata.education || ""}
          placeholder="N/A"
        />

        <InputBox
          label="ভূমিকা"
          name="role"
          onChenge={handleOnChange}
          value={userdata.role || ""}
          placeholder="N/A"
        />

        <InputBox
          label="যোগদানের তারিখঃ"
          name="join_date"
          onChenge={handleOnChange}
          value={userdata.joinDate ? new Date(userdata.joinDate).toISOString().split("T")[0] : ""}
          type="date"
          placeholder="N/A"
        />


      </div>
    </div>
  )
}

export default UpdateUser
