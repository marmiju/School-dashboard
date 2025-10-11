"use client";

import Image from "next/image";
import next from "@/public/next.svg";

import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { RiAccountCircle2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { GetMe } from "@/lib/function/auth/getMe";
import { userWithDetails } from "@/lib/interface/UserWithdetails";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState<userWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();



  return (
    <div className="flex col-span-12 bg-secondary">
      <ToastContainer />
      <div className="flex w-full max-w-[98%] mx-auto justify-between p-1 md:px-2 lg:px-4">
        <div className="flex gap-4 h-[80px]">
          <Image
            className="bg-black rounded hidden md:block"
            src={next}
            alt="logo"
            width={80}
            height={80}
          />
          <div className="grid items-center">
            <h3 className="text-sm text-gray-600">
              Welcome back <br />
              <span className="text-2xl text-primary font-semibold">
               MAR miju
              </span>
            </h3>
          </div>
        </div>
        {user && (
          <Link
            className="text-4xl flex items-center justify-center"
            href={`/profile/${user.user_id}`}
          >
            <div className="rounded-2xl text-black grid justify-center items-center">
              <RiAccountCircle2Line />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
