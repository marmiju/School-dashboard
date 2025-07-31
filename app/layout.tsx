'use client'
import { Montserrat } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "./components/InputBox/sideBar/Sidebar";
import Header from "./components/header/Header";



const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logreg = ['/login','/register']
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = usePathname()
  console.log(path)
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
       {logreg.includes(path) ? children : <div className="grid grid-cols-12"><Header/><Sidebar/><div className="col-span-12 lg:col-span-10">{children}</div></div>}
      </body>
    </html>
  );
}
