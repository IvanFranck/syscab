import ArrowDown from "../public/icon/arrow-down";
import Notification from "../public/icon/notification";
import UserIcon from "../public/icon/user";

export default function Header() {
  return (
    <header className=" border-solid border-b pb-4">
      <div className="flex flex-row justify-between">
        {/* search bar */}
        <form>
          <input type="text" className="form-input px-4 py-1 text-base rounded-md" placeholder="Rechercher" />
        </form>

        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-center relative">
            <Notification width={24} height={24} color="#141414" />
            <span className="bg-red-600 h-2 w-2 rounded-full absolute t-0 right-0.5"></span>
          </div>
          <div className="flex flex-row justify-between items-center mx-5">
            <span className="rounded-full p-2 bg-gray-400 flex justify-center items-center">
              <UserIcon width={24} height={24} color="#141414"  />
            </span>
            <span className="px-3">John Doe</span>
            <ArrowDown width={15} height={15} color="#141414" />
          </div>
        </div>
      </div>
    </header>
  );
}
