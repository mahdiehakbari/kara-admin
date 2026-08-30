"use client";

import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
import { useState } from "react";

interface Props {
  likes: number;
}

const InstagramActions = ({ likes }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className='px-4 pt-3'>
      <div className='flex items-center justify-between'>
        {/* Left Icons */}
        <div className='flex items-center gap-5'>
          <button
            onClick={() => setLiked(!liked)}
            className='text-2xl transition hover:scale-110 text-(--text-black)'
          >
            {liked ? <FaHeart className='text-red-500 ' /> : <FaRegHeart />}
          </button>

          <button className='text-2xl transition hover:scale-110 text-(--text-black)'>
            <FaRegComment />
          </button>

          <button className='text-2xl transition hover:scale-110 text-(--text-black)'>
            <FaRegPaperPlane />
          </button>
        </div>

        {/* Right */}
        <button className='text-2xl transition hover:scale-110 text-(--text-black)'>
          <FaRegBookmark />
        </button>
      </div>

      <p className='mt-3 text-sm font-semibold  text-(--text-black)'>
        {liked ? likes + 1 : likes} likes
      </p>
    </div>
  );
};

export default InstagramActions;