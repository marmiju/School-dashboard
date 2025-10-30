import { redirect } from "next/navigation";

export const LogOut = async () => {
   typeof window !== 'undefined' ? localStorage.removeItem('token') : 'something went wrong';
  redirect('/login')
}
