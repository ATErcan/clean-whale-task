import { getServerSession } from "next-auth";
import Image from "next/image";

import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import LogoutBtn from "@/components/helpers/LogoutBtn";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-84.5px)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] md:min-h-[calc(100vh-102px)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="w-[11.25rem] h-[38px] dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <header className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="mb-2 tracking-[-.01em]">
            Hello {session?.user.email}
          </h1>
        </header>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <LogoutBtn />
        </div>
      </main>
    </div>
  );
}
