import UserIcon from "../public/icon/user";
import Document from "../public/icon/document";
import Link from "next/link";

export default function SideBarNav() {
  return (
    <div className="bg-gray-400 h-screen w-40">
      <div className=" my-9 flex flex-col justify-center items-start">
        <span className="mb-4  pl-6">Logo</span>
        <ul className="w-full">
          <Link href="/clients">
            <li className="flex flex-row my-9 items-center w-full cursor-pointer  pl-6">
              <UserIcon width={20} height={20} color="#141414" />
              <span className="pl-4">Clients</span>
            </li>
          </Link>
          <Link href="/actes">
          <li className="flex flex-row items-center w-full cursor-pointer  pl-6">
            <Document width={20} height={20} color="#141414" />
            <span className="pl-4"> Actes</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
