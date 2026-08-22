'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLogin } from './hooks/useLogin';
import { passwordRules, phoneRules } from './utils/validators';
import { ILoginFormValues } from './types';
import { Button, SpinnerDiv } from '@/shareComponent';

export default function LoginForm() {
  const { t } = useTranslation();
  const { onSubmit, loadingButton, showPassword, toggleShowPassword } =
    useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginFormValues>({ mode: 'onChange' });

  return (
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
        {t('login:login_admin_panel')}
      </h2>
      <p className=' text-center mb-8 font-medium text-[14px] transition-colors'>
        {t('login:user_name_pass')}
      </p>

      <div className='mb-4'>
        <input
          type='text'
          inputMode='numeric'
          placeholder={t('login:phone_number')}
          {...register('phoneNumber', phoneRules(t))}
          className={`w-full px-4 py-2 border rounded-lg outline-(--primary)
            bg-(--surface)
            border-(--border-color)
            text-(--text-muted)
            placeholder:text-text-disabled
            transition-colors
          `}
        />
        {errors.phoneNumber && (
          <p className='text-red-500 text-sm mt-1 transition-colors'>
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      <div className='mb-18 relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={t('login:password')}
          {...register('password', passwordRules(t))}
          className={`w-full px-4 py-2 border rounded-lg outline-(--primary)
        bg-(--surface)
            border-(--border-color)
            text-(--text-muted)
            placeholder:text-text-disabled
            transition-colors
          `}
        />

        <button
          type='button'
          onClick={toggleShowPassword}
          className='h-10.25 absolute inset-y-0 left-3 flex items-center justify-center px-2 text-gray-600 transition-colors'
        >
          <Image src='/assets/icons/eye.svg' alt='eye' width={20} height={20} />
        </button>

        {errors.password && (
          <p className='text-red-500 text-sm mt-1 transition-colors'>
            {errors.password.message}
          </p>
        )}
      </div>

      <Button type='submit' disabled={!isValid} className='w-full'>
        {loadingButton ? <SpinnerDiv /> : t('login:login_panel')}
      </Button>
    </form>
  );
}
