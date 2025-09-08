import { baseUrl } from "./getMe"

export const LogOut = async () => {
    const res = await fetch(`${baseUrl}/api/logout`, {
        method: 'GET',
        credentials: 'include',
    })
    if(!res.ok){
        return 'Log Out failed'
    }
    return 'LogOut'
}
