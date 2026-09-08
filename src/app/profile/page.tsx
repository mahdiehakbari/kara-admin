
'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { Button, Captcha, SpinnerDiv } from '@/shareComponent';
import {
  getCustomerIntroductionCaptcha,
  updateCustomerIntroducerProfile,
} from '@/features';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/store/Auth/authStore';
import { toEnglishDigits } from '@/features/Auth/utils/toEnglishDigits';

interface IProfileFormValues {
  nationalId: string;
  cardNumber: string;
  captchaCode: string;
  captchaId: string;
}

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaExpired, setCaptchaExpired] = useState(false);

  const captchaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const CAPTCHA_EXPIRE_TIME = 2 * 60 * 1000;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, isSubmitted },
    setValue,
  } = useForm<IProfileFormValues>({
    mode: 'onChange',
    defaultValues: {
      nationalId: '',
      cardNumber: '',
      captchaCode: '',
      captchaId: '',
    },
  });

  const loadCaptcha = async () => {
    try {
      setCaptchaLoading(true);
      setCaptchaExpired(false);

      const captcha = await getCustomerIntroductionCaptcha(1);

      const imageSrc = `data:image/png;base64,${captcha.captchaImage}`;

      setCaptchaImage(imageSrc);

      setValue('captchaId', captcha.id, {
        shouldValidate: false,
      });

      setValue('captchaCode', '', {
        shouldValidate: false,
      });

      if (captchaTimerRef.current) {
        clearTimeout(captchaTimerRef.current);
      }

      captchaTimerRef.current = setTimeout(() => {
        setCaptchaImage(null);
        setCaptchaExpired(true);

        setValue('captchaId', '', {
          shouldValidate: false,
        });

        setValue('captchaCode', '', {
          shouldValidate: false,
        });
      }, CAPTCHA_EXPIRE_TIME);
    } catch (error) {
      console.error('Captcha error:', error);
      toast.error('دریافت تصویر کپچا با خطا مواجه شد.');
    } finally {
      setCaptchaLoading(false);
    }
  };

  const onSubmit = async (data: IProfileFormValues) => {
    setLoading(true);

    try {
      const response = await updateCustomerIntroducerProfile({
        nationalId: data.nationalId,
        cardNumber: data.cardNumber.replace(/-/g, ''),
        captchaCode: data.captchaCode,
        captchaId: data.captchaId,
      });

      const { token, user, expiresAt } = response.data;
      setAuth(token, user, expiresAt);

      Cookies.set('token', token);
      Cookies.set('expiresAt', expiresAt);
      Cookies.set('isLoggedIn', 'true');

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('اطلاعات پروفایل با موفقیت ثبت شد.');

      router.push('/panel');
    } catch (err) {
      const error = err as AxiosError<{
        message?: string;
      }>;

      toast.error(
        error.response?.data?.message || 'ثبت اطلاعات با خطا مواجه شد.',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCaptcha();

    return () => {
      if (captchaTimerRef.current) {
        clearTimeout(captchaTimerRef.current);
      }
    };
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center bg-(--background) px-4'>
      <div
        className='
          w-full
          max-w-md
          rounded-2xl
          p-6
          md:p-8
          bg-(--surface)
          border
          border-(--border-color)
          shadow-sm
        '
      >
        <div className='mb-8'>
          <h2 className='text-[20px] font-bold text-(--text-muted) mb-2'>
            تکمیل اطلاعات پروفایل
          </h2>

          <p className='text-[13px] text-(--gray-text-second)'>
            لطفاً اطلاعات خود را برای تکمیل پروفایل وارد کنید.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label
              htmlFor='nationalId'
              className='block text-sm font-medium text-(--text-muted) mb-2'
            >
              کد ملی
            </label>

            <input
              id='nationalId'
              type='text'
              inputMode='numeric'
              maxLength={10}
              placeholder='کد ملی را وارد کنید'
              {...register('nationalId', {
                required: 'وارد کردن کد ملی الزامی است.',
                setValueAs: (value) => toEnglishDigits(value),
                validate: (value) => {
                  const nationalId = toEnglishDigits(value);
                  return (
                    /^[0-9]{10}$/.test(nationalId) || 'کد ملی باید ۱۰ رقم باشد.'
                  );
                },
              })}
              className=' w-full px-4 py-2.5 border rounded-lg outline-none bg-(--surface) border-(--border-color) text-(--text-muted) placeholder:text-text-disabled focus:border-(--primary) transition-colors '
            />

            {errors.nationalId && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.nationalId.message}
              </p>
            )}
          </div>

          <div className='mb-6'>
            <label
              htmlFor='cardNumber'
              className='block text-sm font-medium text-(--text-muted) mb-2'
            >
              شماره کارت بانکی جهت واریز مبالغ پاداش معرفی
            </label>

            <input
              id='cardNumber'
              type='text'
              inputMode='numeric'
              maxLength={19}
              placeholder='6037-9918-1234-5678'
              {...register('cardNumber', {
                required: 'وارد کردن شماره کارت الزامی است.',
                validate: (value) => {
                  const cardNumber = value.replace(/-/g, '');

                  if (!/^\d{16}$/.test(cardNumber)) {
                    return 'شماره کارت باید ۱۶ رقم باشد.';
                  }

                  return true;
                },
                onChange: (e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 16);

                  const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-');

                  e.target.value = formattedValue;
                },
              })}
              className='
                    w-full
                    px-4
                    py-2.5
                    border
                    rounded-lg
                    outline-none
                    bg-(--surface)
                    border-(--border-color)
                    text-(--text-muted)
                    placeholder:text-text-disabled
                    focus:border-(--primary)
                    transition-colors
                '
            />

            {errors.cardNumber && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.cardNumber.message}
              </p>
            )}
            <div className='mt-6'>
              <Captcha
                captchaImage={captchaImage}
                captchaExpired={captchaExpired}
                captchaLoading={captchaLoading}
                loadCaptcha={loadCaptcha}
                register={register}
                errors={errors}
                touchedFields={touchedFields}
                isSubmitted={isSubmitted}
                name={'captchaCode'}
                differentwith='profile'
              />
            </div>
          </div>

          <Button
            type='submit'
            disabled={!isValid || loading}
            className='w-full'
          >
            {loading ? (
              <SpinnerDiv size='sm' className='text-white' />
            ) : (
              'ثبت اطلاعات'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
