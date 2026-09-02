'use client';

import { useState } from 'react';
import { FaComments, FaCopy, FaUser, FaCheck } from 'react-icons/fa';
import { directMessages } from '../constants';
import { Button } from '@/shareComponent';


const Direct = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);

    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className='bg-(--surface) border border-(--border-color) p-8 rounded-2xl'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex flex-col items-center mb-8'>
          <div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center'>
            <FaComments className='text-3xl text-(--primary)' />
          </div>

          <p className='text-xl font-bold text-center my-4 text-(--text-black)'>
            پاسخ‌های آماده برای منشی و ادمین پیج
          </p>

          <p className='text-(--text-muted) text-center'>
            بعد از انتشار پست تبلیغاتی، قطعا بیماران سوالات زیادی در دایرکت یا
            کامنت‌ها می‌پرسند. برای صرفه‌جویی در وقت مطب، پاسخ‌های استاندارد زیر
            را با یک کلیک کپی کرده و برای بیماران ارسال کنید.
          </p>
        </div>

        <div className='space-y-6'>
          {directMessages.map((item) => (
            <div
              key={item.id}
              className='border border-(--border-color) rounded-2xl'
            >
              <div className='border-b border-(--border-color) flex items-center gap-4 p-4'>
                <div className='w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center'>
                  <FaUser className='text-gray-600 text-sm' />
                </div>

                <p className='font-bold text-(--text-black)'>{item.question}</p>
              </div>

              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 bg-(--bg-gray-light)'>
                <p className='md:max-w-[95%] whitespace-pre-line leading-7 text-(--text-black)'>
                  {item.answer}
                </p>
                <Button
                  onClick={() => handleCopy(item.answer, item.id)}
                  className='flex items-center justify-center gap-2 shrink-0'
                >
                  {copiedId === item.id ? (
                    <>
                      <FaCheck />
                      کپی شد
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      کپی پاسخ
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Direct;