'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogin } from '@/features/Auth/hooks/useLogin';
import { toEnglishDigits } from '@/features/Auth/utils/toEnglishDigits';
import { OtpModal } from '@/features/Auth/OTPComponent/OtpModal';
import { Button, ResponsiveModal, SpinnerDiv } from '@/shareComponent';
import { HeaderLoginModalProps } from './types';



export function HeaderLoginModal({
  isOpen,
  onClose,
  name,
}: HeaderLoginModalProps) {
  const { t } = useTranslation(['landing', 'login']);
  const { onSubmit, loadingButton, isOpenOtpModal, setIsOpenOtpModal } =
    useLogin();
  const [phoneValue, setPhoneValue] = useState('');
  const [touched, setTouched] = useState(false);

  const handleOtpModalChange = (
    value: boolean | ((prev: boolean) => boolean),
  ) => {
    const nextValue =
      typeof value === 'function' ? value(isOpenOtpModal) : value;

    setIsOpenOtpModal(nextValue);

    if (!nextValue) {
      onClose();
    }
  };

  const isValid = /^09\d{9}$/.test(phoneValue);
  const showError = touched && !isValid;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTouched(true);

    if (!isValid) return;

    onSubmit({
      phoneNumber: phoneValue,
    });
  };

  return (
    <>
      <ResponsiveModal
        isOpen={isOpen && !isOpenOtpModal}
        onClose={onClose}
        title={t('landing:login_modal_title')}
      >
        <form onSubmit={handleSubmit} className='p-6 sm:p-8 sm:w-95'>
          <div className='flex justify-center'>
            <Image
              src='/assets/icons/logo.png'
              alt='logo'
              width={64}
              height={64}
              className='mb-4'
            />
          </div>

          <h2 className='text-[18px] font-bold text-center mb-2 text-(--text-muted) transition-colors'>
            باشگاه معرفین دنتالیت
          </h2>
          <p className='text-center mb-8 font-medium text-[14px] transition-colors'>
            شماره موبایل خود را جهت عضویت رایگان وارد کنید
          </p>

          <div className='mb-4'>
            <input
              type='text'
              inputMode='numeric'
              placeholder={t('login:phone_number')}
              value={phoneValue}
              onChange={(event) =>
                setPhoneValue(toEnglishDigits(event.target.value))
              }
              onBlur={() => setTouched(true)}
              className='w-full px-4 py-2 border rounded-lg outline-(--primary) bg-(--surface) border-(--border-color) text-(--text-muted) placeholder:text-text-disabled transition-colors'
            />
            {showError && (
              <p className='text-red-500 text-sm mt-1 transition-colors'>
                {t('login:phone_number_invalid')}
              </p>
            )}
          </div>

          <Button type='submit' disabled={!isValid} className='w-full'>
            {loadingButton ? <SpinnerDiv /> : t('login:login_panel')}
          </Button>
        </form>
      </ResponsiveModal>

      <ResponsiveModal
        isOpen={isOpen && isOpenOtpModal}
        onClose={() => setIsOpenOtpModal(false)}
      >
        <OtpModal
          name={name}
          setIsOpenOtpModal={handleOtpModalChange}
          phone={phoneValue}
        />
      </ResponsiveModal>
    </>
  );
}
