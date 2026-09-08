/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import { RefreshCw } from 'lucide-react';
import {
  FieldValues,
} from 'react-hook-form';
import { Input } from '@/shareComponent/ui/Input/Input';
import { CaptchaProps } from './types';



const Captcha = <T extends FieldValues>({
  captchaImage,
  captchaExpired,
  captchaLoading,
  loadCaptcha,
  register,
  errors,
  name,
  touchedFields,
  isSubmitted,
  differentwith
}: CaptchaProps<T>) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-center'>
      {/* Captcha image */}
      <div className='flex min-h-[52px] flex-1 items-center gap-3'>
        {captchaImage && !captchaExpired ? (
          <div className='flex h-[52px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-(--border-color) bg-white px-3'>
            <img
              src={captchaImage}
              alt='captcha'
              className='h-full max-w-full object-contain'
            />
          </div>
        ) : (
          <div className='flex h-[52px] flex-1 items-center justify-center rounded-xl border border-dashed border-(--border-color) bg-(--surface)'>
            <span className='text-xs text-(--text-muted)'>
              کپچا منقضی شده است
            </span>
          </div>
        )}

        <button
          type='button'
          onClick={loadCaptcha}
          disabled={captchaLoading}
          title='تولید کپچای جدید'
          className='flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-(--border-color) transition hover:bg-(--primary)/5 disabled:cursor-not-allowed disabled:opacity-50'
        >
          <RefreshCw
            size={18}
            className={
              captchaLoading
                ? 'animate-spin text-(--primary)'
                : 'text-(--text-muted)'
            }
          />
        </button>
      </div>

      {/* Captcha code */}
      <div className={`mb-[8px] w-full ${differentwith === 'profile' ? 'md:w-[150px]' : 'md:w-[220px]'}`}>
        <Input
          label='کد امنیتی'
          name={name}
          register={register}
          errors={errors}
          type='text'
          maxLength={6}
          rules={{
            required: 'وارد کردن کد امنیتی الزامی است',
          }}
          textError='وارد کردن کد امنیتی الزامی است'
          disabled={!captchaImage || captchaExpired}
          //@ts-ignore
          touchedFields={touchedFields}
          isSubmitted={isSubmitted}
        />
      </div>
    </div>
  );
};

export default Captcha;