import { IoMdNotifications } from "react-icons/io";

const Header = (props) => (
  <div className="px-4 pt-5 pb-16 flex justify-between items-center">
    <div className="flex justify-between items-center">
      <img
        className="rounded-md h-12 w-12 object-cover"
        src={props.currentUser.avatar}
      ></img>
      <div className="flex flex-col ml-3">
        <div className="flex">
          <span className="text-white text-lg">
            {props.currentUser.nickname}
          </span>
          <button className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-down text-white"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        <span className="text-gray-300 text-xs">{props.currentUser.name}</span>
      </div>
    </div>
    <button className="relative">
      <div className="w-3 h-3 rounded-full bg-blue-400 absolute top-0 right-0 animate-ping" />
      <div className="w-3 h-3 rounded-full bg-blue-400 absolute top-0 right-0" />
      <IoMdNotifications className="text-gray-600 text-2xl" />
    </button>
  </div>
);

export default Header;
