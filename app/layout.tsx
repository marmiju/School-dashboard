'use client'
import { Hind_Siliguri, Montserrat, Poppins, Tiro_Bangla, } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "./components/sideBar/Sidebar";
import Header from "./components/header/Header";



const montserrat = Hind_Siliguri({
  weight: '400'
});

const logreg = ['/login','/register']
export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  const path = usePathname()
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} `}
      >
       {logreg.includes(path) ? children : <div className="grid grid-cols-12"><Header/><Sidebar/><div className="col-span-12 lg:col-span-10 mt-15 lg:mt-0">{children}</div></div>}
      </body>
    </html>
  );
}
