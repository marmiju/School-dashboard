
export const baseUrl = process.env.URL || 'http://localhost:5000/api';

export const LogIn = async ({ data }: { data: { email: string; password: string } }) => {
  try {
    const res = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // if you're using cookies
      body: JSON.stringify(data),
    });

    console.log(res)
    if (!res.ok) throw new Error('Login failed');
    return await res.json();
  } catch (err) {
        return err;

  }
};

