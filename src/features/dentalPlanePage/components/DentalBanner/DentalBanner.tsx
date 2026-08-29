'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const DentalBanner = () => {
  const { t } = useTranslation();
  return (
    <div className='relative mb-12 overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-7 md:px-10 md:py-9 shadow-[0_20px_60px_rgba(15,23,42,0.08)]'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(17,74,159,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(17,74,159,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(160,188,222,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,47,112,0.35),transparent_30%)]' />
      <div className='relative md:flex items-center justify-between gap-8'>
        <div className='max-w-2xl'>
          <p className='inline-flex items-center rounded-full bg-(--light-primary) px-3 py-1 text-[12px] font-semibold text-(--primary) mb-4 border border-(--primary-border)'>
            طرح ویژه دنتالیت
          </p>
          <h1 className='text-[28px] md:text-[34px] font-extrabold leading-[1.45] text-(--text-black) mb-4'>
            {t('dental_plane:Dental_plan')}
          </h1>

          <p className='text-[18px] md:text-[20px] leading-8 font-normal text-second-text-color mb-0 max-w-xl'>
            {t('dental_plane:loan')}
          </p>
        </div>
        <div className='relative shrink-0 mt-6 md:mt-0 flex justify-center md:justify-end'>
          <div className='absolute inset-0 -z-10 mx-auto h-44 w-44 rounded-full bg-(--primary)/10 blur-3xl' />
          <Image
            src='/assets/dental-plane/dental-banner-image.svg'
            alt='dental-plane'
            width={312}
            height={196}
            className='w-50 h-30 md:w-78 md:h-49'
          />
        </div>
      </div>
    </div>
  );
};
