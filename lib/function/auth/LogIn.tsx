
export const baseUrl = process.env.URL || 'http://localhost:5000/api';

export const LogIn = async (data:{email:string,password:string}) => {
  try {
    const res = await fetch("http://localhost:5000/api/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json()
    return result;

  } catch (err) {
    return err;

  }
};

