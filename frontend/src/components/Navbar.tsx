import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            alt="Clean Whale Logo"
            src={"/logo.svg"}
            width={100}
            height={62}
            priority
          />
        </Link>
        {!session && <ul className="flex gap-1">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>}
      </div>
    </nav>
  );
}