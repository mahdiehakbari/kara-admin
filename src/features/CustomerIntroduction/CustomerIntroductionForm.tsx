'use client';

import { useForm } from 'react-hook-form';
import { ArrowLeft, MessageSquareText } from 'lucide-react';
import { useCustomerIntroductionStore } from '@/store/customerIntroduction/customerIntroduction.store';
import { CustomerIntroductionFormValues } from './types';
import { CUSTOMER_INTRODUCTION_DEFAULT_VALUES } from './constants';
import { Button, Input, SpinnerDiv } from '@/shareComponent';
import { useTranslation } from 'react-i18next';
import { validationRules } from './validationRules';
import { CustomerIntroductionHeader } from './CustomerIntroductionHeader';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IUser } from '../layout/types';

export const CustomerIntroductionForm = ({ name }: { name?: string }) => {
  const { t } = useTranslation();
  const rules = validationRules(t);
  const { isLoading, submitCustomerIntroduction } =
    useCustomerIntroductionStore();
  const [user, setUser] = useState<IUser | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<CustomerIntroductionFormValues>({
    defaultValues: CUSTOMER_INTRODUCTION_DEFAULT_VALUES,
    mode: 'onChange',
  });

  const showIntroducerName = watch('showIntroducerName');
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Invalid user JSON:', e);
      }
    }
  }, []);
  const fullName = `${user?.fullName}` || '[نام معرف]';

  const onSubmit = async (values: CustomerIntroductionFormValues) => {
    // خروجی شامل phoneNumber, firstName, lastName و showIntroducerName خواهد بود
    const success = await submitCustomerIntroduction(values);

    if (success) {
      reset(CUSTOMER_INTRODUCTION_DEFAULT_VALUES);
      toast.success('اطلاعات مشتری با موفقیت ثبت شد.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-3xl w-full'
      dir='rtl'
    >
      <div
        className={`overflow-hidden rounded-2xl ${
          name !== 'addCustomer' ? 'border border-(--border-color) ' : ''
        } bg-(--surface) shadow-sm p-6`}
      >
        <CustomerIntroductionHeader />

        <div className='p-6 space-y-6'>
          {/* ورودی‌ها */}
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

          <div className='mt-6 space-y-3 rounded-xl border border-(--border-color) bg-(--surface) p-4'>
            <label className='flex items-center gap-3 cursor-pointer select-none'>
              <input
                type='checkbox'
                {...register('showIntroducerName')}
                className='h-4 w-4 rounded border-slate-300 text-(--primary)  transition-all cursor-pointer'
              />
              <span className='font-bold text-(--primary) '>
                ارسال پیامک با درج نام معرف
              </span>
            </label>

            <div className='rounded-lg   p-3.5 shadow-xs '>
              <div className='mb-2 flex items-center gap-1.5 text-xs font-semibold text-(--text-muted)'>
                <MessageSquareText size={15} />
                <span className='mr-2'>پیش‌نمایش متن پیامک ارسالی:</span>
              </div>
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

        {/* Footer */}
        <div className='flex items-center justify-end border-t border-(--border-color) px-6 pt-4'>
          <Button type='submit' disabled={!isValid || isLoading}>
            {isLoading ? (
              <SpinnerDiv />
            ) : (
              <>
                ثبت مشتری
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