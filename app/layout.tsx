'use client'
import { Montserrat } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "./components/sideBar/Sidebar";
import Header from "./components/header/Header";
import { useState } from "react";



const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logreg = ['/login','/register']
export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  const path = usePathname()
  const [user,setUser] = useState()
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
