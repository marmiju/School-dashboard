import React from 'react'

interface ImageInputProps {
  handleChange: (file: File | null) => void
}

export const ImageInput: React.FC<ImageInputProps> = ({ handleChange }) => {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    handleChange(file)
  }

  return (
    <div className="w-64  overflow-hidden border-blue-600 bg-black text-white p-2 m-2 rounded-md">
      <input 
        type="file" 
        name="profile_image" 
        accept="image/*"
        onChange={onFileChange}
      />
    </div>
  )
}
