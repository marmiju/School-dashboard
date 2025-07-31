export interface Navlink {
    id:number,
    title:string,
    link:string
}

export const NavLinks:Navlink[] = [
    {id:1,title:'DashBoard',link:'/'},
    {id:2,title:'Students',link:'/students'},
    {id:3,title:'Teachers',link:'/teachers'},
    {id:4,title:'Notice',link:'/notice'},
]