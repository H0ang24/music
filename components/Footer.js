import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiMusicNote1 } from "react-icons/ci";
import { VscDiffAdded } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

export default function Footer() {
  return (
    <div className="w-[240px] h-screen pl-10 flex flex-col gap-6 p-7 font-medium bg-white">
      <img className="w-[120px] h-[40px] mb-6" src="logo.png"></img>
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 flex flex-col gap-6 mb-4">
          <p>Library</p>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle />
            <p>Recent</p>
          </div>
          <div className="flex items-center gap-2">
            <CiMusicNote1 />
            <p>Playlist</p>
          </div>
          <div className="flex items-center gap-2">
            <VscDiffAdded />
            <p>Create playlist</p>
          </div>
        </div>
        <div className="text-gray-500 flex flex-col gap-6">
          <p>Settings</p>
          <div className="flex items-center gap-2">
            <CiUser />
            <p>Playlist</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLogout />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
