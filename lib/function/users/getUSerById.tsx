import { baseUrl } from "../auth/getMe";
import { cookies } from "next/headers";

 export interface UserType {
  id: number;
  user_id: number;
  username: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  birth_date: Date;
  blood_group: string;
  class_name: string;
  class_role: string;
  education: string;
  religion: string;
  profile_image: string;
  join_date: Date;
  created_at: Date;
  updated_at: Date;
}



export const GetUserDetails = async (id: number) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  console.log("token", token);

  const res = await fetch(`${baseUrl}/user/details/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `token=${token}` // ✅ Token manually pass in header for server-side
    },
    // No need for credentials in server-side fetch
  });

  const data= await res.json();
  const result:UserType = data.result
  console.log(result);
  return result;
}
