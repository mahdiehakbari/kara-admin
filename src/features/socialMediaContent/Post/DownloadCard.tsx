"use client";


import { Button } from "@/shareComponent";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

interface Props {
  desc: string;
  title: string;
  onDownload?: () => void;
}

const DownloadCard = ({
  desc,
  title,
  onDownload,
}: Props) => {
  return (
    <div className='rounded-3xl border border-(--border-color) bg-(--surface) p-5 shadow-sm'>
      <div className='flex items-center gap-4'>
        {/* Info */}

        <div className='flex flex-1 flex-col justify-between'>
          <div>
            <h3 className='line-clamp-2 text-lg text-(--text-black) font-semibold mb-2'>
              {title}
            </h3>

            <p className='text-(--text-muted)'>{desc}</p>
          </div>

          <Button className='w-full mt-4 gap-2' onClick={onDownload}>
            <FiDownload size={18} />
            دانلود ویدئو (کیفیت بالا)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;