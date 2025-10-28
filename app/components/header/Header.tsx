"use client";

import Image from "next/image";
import next from "@/public/next.svg";

import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { RiAccountCircle2Line } from "react-icons/ri";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { UserInterface } from "@/lib/interface/UserWithdetails";
import LogOutButton from "../btn/LogOutButton";

const Header = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (!token) {
    redirect('/login');
  }

  return (
    <div className="flex col-span-10 h-20 bg-secondary">
      <ToastContainer />
      <div className="flex w-full max-w-[98%] mx-auto justify-between items-center p-1 md:px-2 lg:px-4">
        <div className="flex gap-4 h-[80px]">
          <Image
            className="bg-black rounded hidden md:block"
            src={next}
            alt="logo"
            width={80}
            height={80}
          />
          <div className="grid items-center">
            <h3 className="text-sm text-text/80">
              Welcome back <br />
              <span className="text-2xl text-primary font-semibold">
                MAR miju
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
