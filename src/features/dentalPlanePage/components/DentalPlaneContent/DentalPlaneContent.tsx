'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';

export const DentalPlaneContent = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    video?.play();
    setShowControls(true);
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (video?.paused && !video?.seeking) {
      setShowControls(false);
    }
  };

  const handlePlay = () => {
    setShowControls(true);
  };

  return (
    <div className='mb-12'>
      <div className='relative overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 md:px-10 mb-12 shadow-[0_18px_40px_rgba(15,23,42,0.05)]'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-(--primary) via-transparent to-(--primary) opacity-80' />
        <h2 className='font-bold text-[24px] md:text-[28px] mb-4 text-(--text-black)'>
          {t('dental_plane:introducing_plan')}
        </h2>

        <p className='font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color mb-6'>
          {t('dental_plane:dental_plane_desc')}
        </p>
        <p className='font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color'>
          {t('dental_plane:dental_plane_desc2')}
        </p>
      </div>

      <div
        id='conditions_receiving'
        className='relative overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 md:px-10 mb-12 shadow-[0_18px_40px_rgba(15,23,42,0.05)] scroll-mt-24'
      >
        <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-(--primary) to-transparent opacity-70' />
        <h3 className='font-bold text-[14px] md:text-[15px] mb-6 text-(--text-black)'>
          {t('dental_plane:conditions_receiving')}
        </h3>

        <div className='md:flex items-center gap-1 mb-2'>
          <span className='inline-flex items-center rounded-full bg-(--light-primary) px-3 py-1 font-medium text-[14px] text-(--second-primary)'>
            {t('dental_plane:install_budget_app')}
          </span>
        </div>
        <p className='font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color mb-6'>
          {t('dental_plane:install_budget_app_desc')}
          <Link
            href='https://mybajet.ir/download'
            className='inline text-primary underline underline-offset-4 decoration-2 font-semibold mx-1'
            target='_blank'
          >
            {t('dental_plane:click_here')}
          </Link>
        </p>

        <div className='md:flex items-center gap-1 mb-2'>
          <span className='inline-flex items-center rounded-full bg-(--light-primary) px-3 py-1 font-medium text-[14px] text-(--second-primary)'>
            {t('dental_plane:after_receiving_credit')}
          </span>
        </div>
        <p className='font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color mb-6'>
          {t('dental_plane:after_receiving_credit_desc')}
          <Link
            href='#bajet_video'
            className='inline text-primary underline underline-offset-4 decoration-2 font-semibold mx-1'
          >
            {t('dental_plane:bajet_video_link')}
          </Link>
        </p>

        <div className='md:flex items-center gap-1 mb-2'>
          <span className='inline-flex items-center rounded-full bg-(--light-primary) px-3 py-1 font-medium text-[14px] text-(--second-primary)'>
            {t('dental_plane:activate_in_dentalit')}
          </span>
        </div>
        <p className='font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color mb-6'>
          {t('dental_plane:activate_in_dentalit_desc')}
        </p>

        <div className='md:flex items-center gap-1 mb-2'>
          <span className='inline-flex items-center rounded-full bg-(--light-primary) px-3 py-1 font-medium text-[14px] text-(--second-primary)'>
            {t('dental_plane:referral_to_doctors')}
          </span>
        </div>
        <p className='font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color mb-6'>
          {t('dental_plane:referral_to_doctors_desc')}
          
        </p>

        <div className='py-4 px-4 bg-(--light-primary) rounded-2xl mb-4 flex items-start gap-4 border border-(--primary-border)'>
          <Image
            src='/assets/icons/notice-icon.svg'
            alt='logo'
            width={20}
            height={20}
            className='mt-0.5'
          />
          <p className='font-normal text-[14px] md:text-[15px] leading-8 text-(--second-primary)'>
            {t('dental_plane:constitutes_receiving_credit')}
          </p>
        </div>
      </div>

      <div className='relative overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 md:px-10 mb-12 shadow-[0_18px_40px_rgba(15,23,42,0.05)]'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-(--primary) to-transparent opacity-70' />
        <h3 className='font-bold text-[14px] md:text-[15px] mb-3 text-(--second-primary)'>
          {t('dental_plane:conditions_requesting')}
        </h3>
        <ul className='list-disc px-7 font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color'>
          <li className='mb-2'>
            {t('dental_plane:conditions_requesting_desc1')}
          </li>
          <li className='mb-2'>
            {t('dental_plane:conditions_requesting_desc2')}
          </li>
          <li>{t('dental_plane:conditions_requesting_desc3')}</li>
        </ul>
      </div>

      <div className='relative overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 md:px-10 mb-12 shadow-[0_18px_40px_rgba(15,23,42,0.05)]'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-(--primary) via-transparent to-(--primary) opacity-60' />
        <h3 className='font-bold text-[14px] md:text-[15px] mb-3 text-(--second-primary)'>
          {t('dental_plane:why_installments')}
        </h3>
        <ul className='list-disc px-7 font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color'>
          <li className='mb-2'>{t('dental_plane:why_installments_desc1')}</li>
          <li className='mb-2'>{t('dental_plane:why_installments_desc2')}</li>
          <li className='mb-2'>{t('dental_plane:why_installments_desc3')}</li>
          <li>{t('dental_plane:why_installments_desc4')}</li>
        </ul>
      </div>

      <div
        className='relative overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 md:px-10 mb-12 shadow-[0_18px_40px_rgba(15,23,42,0.05)]'
        id='process_receiving'
      >
        <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-(--primary) to-transparent opacity-70' />
        <h3 className='font-bold text-[14px] md:text-[15px] mb-3 text-(--second-primary)'>
          {t('dental_plane:who_can_purchase')}
        </h3>
        <ul className='list-disc px-7 font-normal text-[14px] md:text-[15px] leading-8 text-second-text-color'>
          <li className='mb-2'>{t('dental_plane:who_can_purchase_desc1')}</li>
          <li className='mb-2'>{t('dental_plane:who_can_purchase_desc2')}</li>
        </ul>
      </div>

      <h2
        className='font-bold text-[24px] md:text-[28px] mb-4 text-(--text-black)'
        id='bajet_video'
      >
        {t('dental_plane:kalanow_credit')}
      </h2>
      <div className='flex justify-center mb-10'>
        <div className='relative bg-black rounded-[48px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.32)] w-[330px]'>
          {/* notch */}
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-3xl z-10'></div>

          {/* screen with correct aspect ratio */}
          <div className='relative w-full aspect-[9/19.5] bg-black rounded-[40px] overflow-hidden'>
            <video
              ref={videoRef}
              className='absolute top-0 left-0 w-full h-full object-cover'
              src='/assets/video/dentalit.mp4'
              playsInline
              preload='metadata'
              controls={showControls}
              onPause={handlePause}
              onPlay={handlePlay}
            />

            {!showControls && (
              <button
                onClick={playVideo}
                className='absolute inset-0 flex items-center justify-center'
              >
                <div className='bg-(--surface)/90 px-6 py-2 rounded-xl shadow-lg font-semibold'>
                  ▶ پخش
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
