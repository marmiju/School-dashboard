
export const deleteUser = async (id:number, token:string)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/${id}`,{
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    })
    return res.json()
}