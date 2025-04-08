import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          alt="Clean Whale Logo"
          src={"/logo.svg"}
          width={100}
          height={62}
          priority
        />
        {/* TODO: Conditionally render */}
        <ul className="flex gap-1">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}