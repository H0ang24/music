import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function Header() {
  const [chuyenTrang, setChuyenTrang] = useState(1);
  return (
    <div className="flex justify-between items-center  h-[84px] w-full shadow-sm bg-white px-10">
      <div className="flex text-gray-500 font-medium gap-4">
        <p
          onClick={() => {
            setChuyenTrang(1);
          }}
          className={` ${
            chuyenTrang == 1
              ? "text-yellow-400 border-b-2 border-yellow-400 cursor-pointer "
              : ""
          }`}
        >
          Home
        </p>
        <p
          onClick={() => {
            setChuyenTrang(2);
          }}
          className={` ${
            chuyenTrang == 2
              ? "text-yellow-400 border-b-2 border-yellow-400 cursor-pointer "
              : ""
          }`}
        >
          Browser
        </p>
        <p
          onClick={() => {
            setChuyenTrang(3);
          }}
          className={` ${
            chuyenTrang == 3
              ? "text-yellow-400 border-b-2 border-yellow-400 cursor-pointer "
              : ""
          }`}
        >
          Search
        </p>
        <p
          onClick={() => {
            setChuyenTrang(4);
          }}
          className={` ${
            chuyenTrang == 4
              ? "text-yellow-400 border-b-2 border-yellow-400 cursor-pointer "
              : ""
          }`}
        >
          Social
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-2xl pr-2 border-r-2 border-gray-400 text-gray-500">
          <IoIosNotificationsOutline />
        </div>

        <img
          className="rounded-full w-[35px] aspect-square	"
          src="gwen.png"
        ></img>
      </div>
    </div>
  );
}
