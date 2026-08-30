"use client";


import { PostProps } from "../types";
import Caption from "./Caption";
import InstagramActions from "./InstagramActions";
import InstagramHeader from "./InstagramHeader";
import VideoPlayer from "./VideoPlayer";


const PhoneFrame = ({
  video,
  username,
 avatar,
  caption,
 likes,
}: PostProps) => {
  return (
    <div
      className="
      w-[360px]
      rounded-[42px]
      bg-(--surface)
      border
      border-(--border-color)
      shadow-xl
      overflow-hidden
      "
    >
      <div className="flex justify-center pt-3 pb-2">
        <div className="w-28 h-6 rounded-full bg-gray-200 flex items-center justify-center">
          <div className="w-10 h-1.5 rounded-full bg-gray-300" />
        </div>
      </div>

      <InstagramHeader
        username={username}
        avatar={avatar}
      />

      <VideoPlayer src={video} />

      <InstagramActions likes={likes} />

      <Caption
        username={username}
        caption={caption}
      />
    </div>
  );
};

export default PhoneFrame;