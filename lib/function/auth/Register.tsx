import { baseUrl } from "./getMe";

export const Register = async ({ data }: { data: { username: string, email: string; password: string } }) => {
    try {
        const res = await fetch(`${baseUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log(res)
        return await res.json();
    } catch (err) {
        console.log("err",err)
        return err;
    }
};