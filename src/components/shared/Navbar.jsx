"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const router = useRouter();

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-bold text-lg">
            Book<span className="font-bold text-xl text-[#131356]">Nest</span>
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-md font-semibold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>

          {user && (
            <>
              <li>
                <Link href="/order">Order</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </>
          )}
        </ul>

        <div className="flex gap-4 items-center">
          {!user ? (
            <ul className="flex items-center gap-4 text-md font-semibold">
              <li>
                <button
                  onClick={() => router.push("/register")}
                  className="btn bg-green-600 text-white rounded-2xl"
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/signin")}
                  className="btn bg-blue-600 text-white rounded-2xl"
                >
                  Sign In
                </button>
              </li>
            </ul>
          ) : (
            <>
              <Image
                src={user?.image || userAvatar}
                alt="User avatar"
                width={40}
                height={40}
                className="rounded-full"
              />

              <button
                className="btn btn-error text-white font-semibold rounded-2xl"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
