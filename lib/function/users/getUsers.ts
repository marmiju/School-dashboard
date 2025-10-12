import { UserInterface } from "@/lib/interface/UserWithdetails";
import { baseUrl } from "../auth/getMe"

export const getUsers = async (id?:number) => {
    let url: string;
    if (id) {
        url =` ${baseUrl}/getUsers?page=${id}`;
    } else {
        url =` ${baseUrl}/getUsers`;
    }


    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });
    const data = await res.json()
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const result: UserInterface[] = data.users;
    return result;
}