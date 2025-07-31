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
    if (!res.ok) throw new Error('Login failed');
    return await res.json();
  } catch (err) {
    console.error(err)
    return '!logged'
  }
};
