'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/Auth/authStore';
import axios from 'axios';
import { API_LOGIN } from '@/config/api_address.config';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { ILoginFormValues } from '../types';
import api from '@/config/utils/axios';
import Cookies from 'js-cookie';

export function useLogin() {
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const { t } = useTranslation();

  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async (data: ILoginFormValues) => {
    setLoadingButton(true);

    try {
      const resp = await api.post(API_LOGIN, {
        phoneNumber: data.phoneNumber,
        password: data.password,
      });

      localStorage.setItem('userInfo', JSON.stringify(resp.data.user));

      setAuth(resp.data.token, resp.data.user, resp.data.expiresAt);

      localStorage.setItem('userType', resp.data.user.userType);
      Cookies.set('userType', resp.data.user.userType);

      router.push('/dashboard');
    } catch (err) {
      toast.error(t('login:invalid_data'));
    } finally {
      setLoadingButton(false);
    }
  };

  return {
    loadingButton,
    showPassword,
    toggleShowPassword,
    onSubmit,
  };
}
