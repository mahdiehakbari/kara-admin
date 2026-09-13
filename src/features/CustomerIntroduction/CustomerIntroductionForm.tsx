'use client';

import { useForm } from 'react-hook-form';
import {
  ArrowLeft,
  MessageSquareText,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { useCustomerIntroductionStore } from '@/store/customerIntroduction/customerIntroduction.store';
import {
  CustomerIntroductionFormValues,
  TCustomerIntroductionFormProps,
} from './types';
import { CUSTOMER_INTRODUCTION_DEFAULT_VALUES } from './constants';
import { Button, Captcha, Input, SpinnerDiv } from '@/shareComponent';
import { useTranslation } from 'react-i18next';
import { validationRules } from './validationRules';
import { CustomerIntroductionHeader } from './CustomerIntroductionHeader';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IUser } from '../layout/types';
import { getCustomerIntroductionCaptcha } from './services/getCustomerIntroductionCaptcha';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const CAPTCHA_EXPIRE_TIME = 2 * 60 * 1000;

export const CustomerIntroductionForm = ({
  name,
  onSuccess,
}: TCustomerIntroductionFormProps) => {
  const { t } = useTranslation();
  const rules = validationRules(t);

  const { isLoading, submitCustomerIntroduction } =
    useCustomerIntroductionStore();

  const [user, setUser] = useState<IUser | null>(null);

  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaExpired, setCaptchaExpired] = useState(false);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);
  const router = useRouter();
  const captchaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, touchedFields, isSubmitted },
    reset,
    setValue,
  } = useForm<CustomerIntroductionFormValues>({
    defaultValues: CUSTOMER_INTRODUCTION_DEFAULT_VALUES,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const showIntroducerName = watch('showIntroducerName');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Invalid user JSON:', e);
      }
    }
  }, []);

  const fullName = user?.fullName || '[نام معرف]';

  const loadCaptcha = async () => {
    try {
      setCaptchaLoading(true);
      setCaptchaExpired(false);
      setCaptchaImage(null);

      const captcha = await getCustomerIntroductionCaptcha();

      const imageSrc = `data:image/png;base64,${captcha.captchaImage}`;

      setCaptchaImage(imageSrc);

      setValue('captchaId', captcha.id, {
        shouldValidate: false,
      });

      setValue('captchaCode', '', {
        shouldValidate: false,
        shouldDirty: false,
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

  useEffect(() => {
    loadCaptcha();

    return () => {
      if (captchaTimerRef.current) {
        clearTimeout(captchaTimerRef.current);
      }
    };
  }, []);

  const onSubmit = async (values: CustomerIntroductionFormValues) => {
    if (!captchaImage) {
      toast.error(
        'اعتبار کپچا به پایان رسیده است. لطفاً کپچای جدید دریافت کنید.',
      );
      return;
    }

    try {
      const success = await submitCustomerIntroduction(values);

      if (!success) {
        setValue('captchaCode', '', {
          shouldValidate: false,
          shouldDirty: false,
        });

        setValue('captchaId', '', {
          shouldValidate: false,
          shouldDirty: false,
        });

        setCaptchaRefresh((prev) => prev + 1);

        return;
      }

      reset(CUSTOMER_INTRODUCTION_DEFAULT_VALUES);

      setCaptchaImage(null);
      setCaptchaExpired(true);

      if (captchaTimerRef.current) {
        clearTimeout(captchaTimerRef.current);
      }

      if (name === 'addCustomer') {
        toast.success('اطلاعات مشتری با موفقیت ثبت شد.');
        onSuccess?.();
      } else {
        toast.success('اطلاعات مشتری با موفقیت ثبت شد.', {
          onClose: () => {
            router.push('/panel/customer-list');
          },
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || 'ثبت اطلاعات با خطا مواجه شد.',
        );
      } else {
        toast.error('ثبت اطلاعات با خطا مواجه شد.');
      }
      setValue('captchaCode', '', {
        shouldValidate: false,
        shouldDirty: false,
      });

      setValue('captchaId', '', {
        shouldValidate: false,
        shouldDirty: false,
      });

      setCaptchaRefresh((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (captchaRefresh === 0) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCaptcha();
  }, [captchaRefresh]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-3xl w-full'
      dir='rtl'
    >
      <div
        className={`overflow-hidden rounded-2xl ${
          name !== 'addCustomer' ? 'border border-(--border-color)' : ''
        } bg-(--surface) shadow-sm p-6`}
      >
        <CustomerIntroductionHeader />

        <div className='md:p-6 space-y-6'>
          {/* اطلاعات مشتری */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <Input
              label='نام'
              name='firstName'
              register={register}
              errors={errors}
              textError={rules.firstName.required}
              type='text'
              rules={rules.firstName}
            />

            <Input
              label='نام خانوادگی'
              name='lastName'
              register={register}
              errors={errors}
              textError={rules.lastName.required}
              type='text'
              rules={rules.lastName}
            />

            <div className='md:col-span-2 flex justify-center'>
              <div className='w-full md:w-[calc(50%-10px)]'>
                <Input
                  label='شماره موبایل'
                  name='phoneNumber'
                  register={register}
                  errors={errors}
                  textError={rules.phoneNumber.required}
                  type='tel'
                  rules={rules.phoneNumber}
                />
              </div>
            </div>
          </div>

          <div>
            <div className='mb-2 mt-6 flex items-center gap-1.5 text-xs font-semibold text-(--text-muted)'>
              <MessageSquareText size={15} />

              <span className='mr-2'>
                پیش‌نمایش متن پیامک ارسالی برای مدعو:
              </span>
            </div>

            <div className='mb-4 space-y-3 rounded-xl border border-(--border-color) bg-(--surface) p-4'>
              <div className='rounded-lg p-3.5 shadow-xs'>
                <p className='text-sm leading-relaxed text-justify whitespace-pre-line'>
                  {showIntroducerName
                    ? `دوست عزیز، شما توسط ${fullName} به طرح ملی دنتالیت دعوت شده‌اید.\nمی‌توانید تا سقف ۱۵۰ میلیون تومان اعتبار دندانپزشکی دریافت کنید و هزینه‌ها را در ۱۲ قسط بپردازید. این تسهیلات از طریق طرح طب نو بانک تجارت ارائه می‌شود.`
                    : `دعوت‌نامه اختصاصی شما برای طرح ملی دنتالیت صادر شد!\nمی‌توانید تا سقف ۱۵۰ میلیون تومان اعتبار دندانپزشکی دریافت کنید و هزینه‌ها را در ۱۲ قسط بپردازید. این تسهیلات از طریق طرح طب نو بانک تجارت ارائه می‌شود.`}
                </p>

                <p>
                  ثبت‌نام:{' '}
                  <Link
                    href='https://dentalit.ir/'
                    className='text-(--primary) underline'
                  >
                    Dentalit.ir
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* نام معرف */}
          <label className='my-2 flex cursor-pointer select-none items-center gap-3'>
            <input
              type='checkbox'
              {...register('showIntroducerName')}
              className='h-4 w-4 cursor-pointer rounded border-slate-300 text-(--primary) transition-all'
            />

            <span className='font-bold text-(--primary)'>
              ارسال پیامک با درج نام معرف
            </span>
          </label>
        </div>

        {/* ================= CAPTCHA ================= */}
        <div className='rounded-2xl border border-(--border-color) bg-(--surface) p-4  mb-4'>
          <div className='mb-4 flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-(--primary)/10'>
              <ShieldCheck size={17} className='text-(--primary)' />
            </div>

            <div>
              <p className='text-sm font-bold'>تأیید امنیتی</p>

              <p className='mt-0.5 text-xs text-(--text-muted)'>
                کد داخل تصویر را وارد کنید
              </p>
            </div>
          </div>

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
          />
        </div>

        {/* Footer */}
        <div className='flex items-center justify-end border-t border-(--border-color) px-6 pt-4'>
          <Button
            type='submit'
            disabled={!isValid || isLoading || !captchaImage || captchaExpired}
          >
            {isLoading ? (
              <SpinnerDiv />
            ) : (
              <>
                ارسال دعوت نامه
                <ArrowLeft size={18} className='mr-1' />
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CustomerIntroductionForm;