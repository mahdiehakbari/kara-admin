"use client";

import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  username: string;
  avatar?: string;
}

const InstagramHeader = ({ username, avatar }: Props) => {
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      {/* Right */}
      <div className='flex items-center gap-3'>
        <div className='relative h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100'>
          {avatar ? (
            <Image src={avatar} alt={username} fill className='object-cover' />
          ) : (
            <FaUserCircle className='h-full w-full text-gray-400' />
          )}
        </div>
        <span className='text-[15px] font-semibold text-(--text-black)'>
          {username}
        </span>
      </div>

      {/* Left */}
      <button className='text-2xl  transition'>
        <HiDotsHorizontal className='text-(--text-black)' />
      </button>
    </div>
  );
};

export default InstagramHeader;