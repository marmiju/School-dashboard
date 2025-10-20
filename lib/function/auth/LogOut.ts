
export const LogOut = async () => {
  const res =  typeof window !== 'undefined' ? localStorage.removeItem('token') : 'something went wrong';
  return res;
}
