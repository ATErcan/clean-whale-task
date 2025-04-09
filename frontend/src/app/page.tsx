import { getServerSession } from "next-auth";
import Image from "next/image";

import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-92.87px)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <header className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="mb-2 tracking-[-.01em]">Hello {session?.user.email}</h1>
        </header>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 cursor-pointer hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Logout
          </p>
        </div>
      </main>
    </div>
  );
}
