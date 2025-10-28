export const getUserById = async (userId: number) => {
    try {
        const res = await fetch(`${process.env.URL}/getUser/${userId}`, {})
        if (!res.ok) {
            throw new Error(`Failed to fetch user with ID ${userId}`);
        }
        const data = await res.json();
        console.log("User Data:", data);
        return data.user;
    } catch (error) {
        console.log("Error fetching user by ID:", error);
        return null;
    }
}