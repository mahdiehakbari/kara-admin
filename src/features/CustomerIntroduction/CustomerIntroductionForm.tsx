'use client';

import { useForm } from 'react-hook-form';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useCustomerIntroductionStore } from '@/store/customerIntroduction/customerIntroduction.store';
import { CustomerIntroductionFormValues } from './types';
import { CUSTOMER_INTRODUCTION_DEFAULT_VALUES } from './constants';
import { Button, Input, SpinnerDiv } from '@/shareComponent';
import { useTranslation } from 'react-i18next';
import { validationRules } from './validationRules';
import { CustomerIntroductionHeader } from './CustomerIntroductionHeader';
import { toast } from 'react-toastify';


const CustomerIntroductionForm = () => {
    const { t } = useTranslation();
    const rules = validationRules(t);
  const {
    isLoading,
    submitCustomerIntroduction,
  } = useCustomerIntroductionStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CustomerIntroductionFormValues>({
    defaultValues: CUSTOMER_INTRODUCTION_DEFAULT_VALUES,
    mode: 'onChange',
  });

  const onSubmit = async (
    values: CustomerIntroductionFormValues
  ) => {
    const success = await submitCustomerIntroduction(values);

    if (success) {
      reset(CUSTOMER_INTRODUCTION_DEFAULT_VALUES);
      toast.success('اطلاعات مشتری با موفقیت ثبت شد.')
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl w-full"
      dir="rtl"
    >
      <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--surface) shadow-sm  p-6">
        <CustomerIntroductionHeader />

        {/* Form Fields */}
        <div className="p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                 <Input
            label="نام"
            name="firstName"
            register={register}
            errors={errors}
            textError={rules.firstName.required}
            type="text"
            rules={rules.firstName}
            />

            <Input
            label="نام خانوادگی"
            name="lastName"
            register={register}
            errors={errors}
            textError={rules.lastName.required}
            type="text"
            rules={rules.lastName}
            />
            <Input
            label="شماره موبایل"
            name="phoneNumber"
            register={register}
            errors={errors}
            textError={rules.phoneNumber.required}
            type="tel"
            rules={rules.phoneNumber}
            />

            <Input
            label="کد ملی"
            name="nationalId"
            register={register}
            errors={errors}
            textError={rules.nationalId.required}
            type="text"
            rules={rules.nationalId}
            />

       
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-(--border-color) px-6 pt-4">
          <Button
            type="submit"
            disabled={!isValid || isLoading}
          >
            {isLoading ? (
             <SpinnerDiv/>
            ) : (
              <>
                ثبت مشتری
                <ArrowLeft size={18} className='pr-1' />
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CustomerIntroductionForm;