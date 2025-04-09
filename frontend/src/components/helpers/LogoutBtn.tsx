'use client';

import { signOut } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function LogoutBtn() {
  const logout = () => {
    signOut();
    toast.success("Logged out successfully!");
  };
  
  return (
    <p
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 cursor-pointer hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={logout}
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Logout
    </p>
  );
}