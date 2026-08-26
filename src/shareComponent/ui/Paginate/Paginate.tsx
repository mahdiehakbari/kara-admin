import Image from 'next/image';
import { Button } from '../Button/Button';
import { PaginateProps } from './types';

export const Paginate = ({
  page,
  currentPage,
  totalPages,
  handlePageClick,
  handlePreviousPage,
  handleNextPage,
}: PaginateProps) => {
  const getMobilePages = () => {
    const pages = [];
    if (currentPage > 2) pages.push(1);
    if (currentPage > 3) pages.push('dots-start');
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('dots-end');
    if (currentPage < totalPages - 1) pages.push(totalPages);
    return pages;
  };

  const mobilePages = getMobilePages();

  return (
    <div className='flex justify-center md:justify-start items-center gap-2 md:my-6 my-10'>
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePreviousPage(page)}
        className={`w-8.5 h-8.5 px-3 py-2 text-sm rounded-md ml-6 ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed bg-gray-200'
            : 'bg-(--primary) hover:bg-gray-200'
        }`}
      >
        <Image
          src='/assets/icons/arrow.svg'
          alt='prev'
          width={20}
          height={20}
          className='rotate-180'
        />
      </Button>

      {/* <div className='hidden md:flex gap-1'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8.5 h-8.5 px-3 py-1 rounded-md text-sm ${
                currentPage === i + 1
                  ? 'bg-(--primary) text-white'
                  : ` ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div> */}

      <div className={`flex ${totalPages > 5 && 'w-[200px] '} gap-1`}>
        {mobilePages.map((p, i) =>
          p === 'dots-start' || p === 'dots-end' ? (
            <span key={i} className='px-2 text-gray-500'>
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => handlePageClick(Number(p))}
              className={`w-7.5 h-7.5 text-sm rounded-md ${
                currentPage === p ? 'bg-(--primary) text-white' : ''
              }`}
            >
              {p}
            </button>
          ),
        )}
      </div>

      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`w-8.5 h-8.5 px-3 py-2 text-sm rounded-md mr-6 ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed bg-(--surface)'
            : 'hover:bg-(--surface)'
        }`}
      >
        <Image
          src='/assets/icons/arrow.svg'
          alt='next'
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};
