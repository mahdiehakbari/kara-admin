'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLogin } from './hooks/useLogin';
import { phoneRules } from './utils/validators';
import { ILoginFormValues } from './types';
import { Button, ResponsiveModal, SpinnerDiv } from '@/shareComponent';
import { OtpModal } from './OTPComponent/OtpModal';
import { toEnglishDigits } from './utils/toEnglishDigits';

export default function LoginForm() {
  const { t } = useTranslation();
  const { onSubmit, loadingButton, isOpenOtpModal, setIsOpenOtpModal } =
    useLogin();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ILoginFormValues>({ mode: 'onChange' });
  const phoneNumber = watch('phoneNumber');
  return (
    <>
      {' '}
      <form onSubmit={handleSubmit(onSubmit)}>
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
          پنل مدیریت معرف مشتری
        </h2>
        <p className=' text-center mb-8 font-medium text-[14px] transition-colors'>
          {t('login:user_name_pass')}
        </p>

        <div className='mb-4'>
          <input
            type='text'
            inputMode='numeric'
            placeholder={t('login:phone_number')}
            {...register('phoneNumber', {
              ...phoneRules(t),
              setValueAs: (value) => toEnglishDigits(value),
            })}
            className={`w-full px-4 py-2 border rounded-lg outline-(--primary) bg-(--surface) border-(--border-color) text-(--text-muted) placeholder:text-text-disabled transition-colors `}
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-sm mt-1 transition-colors'>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <Button type='submit' disabled={!isValid} className='w-full'>
          {loadingButton ? <SpinnerDiv /> : t('login:login_panel')}
        </Button>
      </form>
      <ResponsiveModal
        isOpen={isOpenOtpModal}
        onClose={() => setIsOpenOtpModal(false)}
      >
        <OtpModal
          name='auth'
          setIsOpenOtpModal={setIsOpenOtpModal}
          phone={phoneNumber}
        />
      </ResponsiveModal>
    </>
  );
}
