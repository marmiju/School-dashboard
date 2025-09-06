import { userWithDetails } from "@/lib/interface/UserWithdetails";

export const baseUrl = process.env.URL || 'http://localhost:5000/api';
export const GetMe = async () => {
  try {
    const res = await fetch(`${baseUrl}/me`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    console.log(res)
    if (!res.ok) throw new Error('server error');
    const result = await res.json();
    return result.user as userWithDetails;

  } catch (err) {
    console.error(err)
    throw err;
  }
};
