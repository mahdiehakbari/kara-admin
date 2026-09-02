
import { Button } from "@/shareComponent";
import { FaDownload } from "react-icons/fa";
import { medias } from "../constants";

const Story = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
        {medias.map((item) => (
          <div
            key={item.id}
            className='flex h-full flex-col rounded-2xl border border-(--border-color) bg-(--surface) p-5 shadow-sm transition hover:shadow-md'
          >
            {/* Media */}
            <div>
              {item.isVideo ? (
                <video
                  controls
                  className='mb-4 aspect-9/16 w-full rounded-2xl object-cover shadow-sm'
                >
                  <source src={item.src} type='video/mp4' />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className='mb-4 w-full rounded-2xl shadow-sm'
                />
              )}
            </div>

            {/* Content */}
            <div className='flex flex-1 flex-col'>
              <h3 className='min-h-14 text-center text-lg font-semibold text-(--text-black)'>
                {item.title}
              </h3>

              <a
                href={item.src}
                download={item.fileName}
                className='mt-auto pt-4'
              >
                <Button className='flex w-full items-center justify-center gap-2'>
                  <FaDownload className='text-sm' />
                  {item.downloadText}
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;