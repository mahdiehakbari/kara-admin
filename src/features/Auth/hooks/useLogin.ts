'use client';

import { useState } from 'react';
import { SEND_OTP } from '@/config/api_address.config';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { ILoginFormValues } from '../types';
import api from '@/config/utils/axios';
import { AxiosError } from 'axios';

export function useLogin() {
  const { t } = useTranslation();

  const [loadingButton, setLoadingButton] = useState(false);
  const [isOpenOtpModal, setIsOpenOtpModal] = useState(false);

  const sendOtp = async (phoneNumber: number) => {
    try {
      const resp = await api.post(SEND_OTP, {
        phoneNumber,
        otpMode: 0,
      });

      return resp;
    } catch (err) {
      const error = err as AxiosError<{
        message?: string;
      }>;

      toast.error(error.response?.data?.message || t('login:invalid_data'));

      throw err;
    }
  };

  const onSubmit = async (data: ILoginFormValues) => {
    setLoadingButton(true);

    try {
      await sendOtp(data.phoneNumber);

      setIsOpenOtpModal(true);
    } finally {
      setLoadingButton(false);
    }
  };

  return {
    loadingButton,
    onSubmit,
    isOpenOtpModal,
    setIsOpenOtpModal,
    sendOtp,
  };
}
