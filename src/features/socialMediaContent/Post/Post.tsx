
'use client';

import { useState } from "react";
import DownloadCard from "./DownloadCard";
import PostInfo from "./PostInfo";
import { FaEye } from "react-icons/fa";
import PhoneFrame from "./PhoneFrame";

const Post = () => {
  const [caption, setCaption] = useState('');

  const handleDownload = () => {
    const link = document.createElement('a');

    link.href = '/assets/video/نحوه-استفاده-بیمار-از-سامانه.mp4';
    link.download = 'Dentalit-Video.mp4';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* ستون اول */}
        <div className='min-w-0'>
          <div className='mb-6'>
            <DownloadCard
              desc='این ویدئو طرح اعتباری دنتالیت را از جانب یک بیمار به زبان ساده توضیح می‌دهد.'
              title='تیزر معرفی درمان اقساطی با دنتالیت و باجت'
              onDownload={handleDownload}
            />
          </div>

          <PostInfo caption={caption} setCaption={setCaption} />
        </div>

        {/* ستون دوم */}
        {/* <div className='min-w-0'> */}
        <div
          className='
          min-w-0
          flex
          flex-col
          items-center
          justify-center
          lg:sticky
          lg:top-10
          lg:h-fit
        '
        >
          <PhoneFrame
            video='/assets/video/نحوه-استفاده-بیمار-از-سامانه.mp4'
            username='Dentalit'
            likes={342}
            caption={caption}
          />

          <div className='mt-2 flex items-center gap-2'>
            <FaEye className='text-xl text-(--text-muted)' />

            <p className='text-(--text-muted)'>پیش‌نمایش پست در گوشی بیماران</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Post;

