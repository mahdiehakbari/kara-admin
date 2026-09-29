'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogin } from '@/features/Auth/hooks/useLogin';
import { toEnglishDigits } from '@/features/Auth/utils/toEnglishDigits';
import { OtpModal } from '@/features/Auth/OTPComponent/OtpModal';
import { Button, ResponsiveModal, SpinnerDiv } from '@/shareComponent';

interface HeaderLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE_PATTERN = /^[0-9]{11,}$/;

/**
 * Two independent ResponsiveModal instances (phone step, then OTP step),
 * not one nested inside the other. Submitting the phone step closes this
 * modal and opens the OTP modal; going back from OTP re-opens this one.
 *
 * Uses a plain controlled input instead of react-hook-form's ref-based
 * register(): ResponsiveModal renders its `children` twice internally (one
 * DOM tree for the desktop layout, one for the mobile bottom sheet), which
 * would leave an uncontrolled/ref-registered field tracking only one of the
 * two duplicated inputs. A controlled value+onChange stays in sync across
 * both copies since they all re-render from the same component state.
 */
export function HeaderLoginModal({ isOpen, onClose }: HeaderLoginModalProps) {
  const { t } = useTranslation(['landing', 'login']);
  const { onSubmit, loadingButton, isOpenOtpModal, setIsOpenOtpModal } =
    useLogin();
  const [phoneValue, setPhoneValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = PHONE_PATTERN.test(phoneValue);
  const showError = touched && !isValid;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onSubmit({ phoneNumber: phoneValue });
  };

  return (
    <>
      <ResponsiveModal
        isOpen={isOpen && !isOpenOtpModal}
        onClose={onClose}
        title={t('landing:login_modal_title')}
      >
        <form onSubmit={handleSubmit} className='p-6 sm:p-8 sm:w-[380px]'>
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
          name='auth'
          setIsOpenOtpModal={setIsOpenOtpModal}
          phone={phoneValue}
        />
      </ResponsiveModal>
    </>
  );
}
