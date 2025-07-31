import { baseUrl } from "./auth/getMe"

export const LogOut = async () => {
    const res = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        credentials: 'include',
    })
    if(!res.ok){
        return 'Log Out failed'
    }
    return 'LogOut'
}
