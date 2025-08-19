import EditInfo from '@/app/components/editInfo/EditInfo'
import { GetUserDetails } from '@/lib/function/users/getUSerById'
import React from 'react'

interface PageProps {
  params: { id: string }
}

const Page = async ({ params }: PageProps) => {
  const id = params.id    
  const UserDetails = await  GetUserDetails(Number(id))
  console.log("UserDetails", UserDetails);

  
  // ...existing code...
return (
  
    <EditInfo userData={UserDetails}/>
  
)
// ...existing code...
}

export default Page;
