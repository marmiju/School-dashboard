import { userType } from "@/app/components/AddUser/AddUser";
import { baseUrl } from "../auth/getMe";

export const CreateUser = async (userData: userType,token:string) => {
    const formData = new FormData();

    for (const key in userData) {
        const value = userData[key as keyof typeof userData];

        // Handle null or undefined values if needed
        if (value !== undefined && value !== null) {
            formData.append(key, String(value));
        }
    }


    const response = await fetch(`${baseUrl}/api/createUser`, {
        method: 'POST',
        body: formData,
        headers: {
            'authorization': `Bearer ${token}`,
        },
    })
    const result = await response.json();
    return result;
};
