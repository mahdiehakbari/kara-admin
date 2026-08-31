'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { API_AUTHENTICATE } from '@/config/api_address.config';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/Auth/authStore';

export const useOtp = (
  phone: number,
  setIsOpenOtpModal: (value: boolean) => void,
) => {
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { user, setAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    const expiresAt = Cookies.get('expiresAt');
    const userData = localStorage.getItem('user');

    if (token && userData && expiresAt) {
      try {
        const parsedUser = JSON.parse(userData);
        setAuth(token, parsedUser, expiresAt);
      } catch (err) {
        console.error('Failed to parse user from localStorage', err);
      }
    }
  }, [setAuth]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError('');

      const response = await axios.post(API_AUTHENTICATE, {
        phoneNumber: phone,
        otp,
      });


      if (response?.data) {
        const { token, user, expiresAt } = response.data;

        setAuth(token, user, expiresAt);

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setIsOpenOtpModal(false);

        if (user.isCompleteProfile === false) {
          Cookies.set('isLoggedIn', 'false');
          router.push('/profile');
        } else {
          Cookies.set('isLoggedIn', 'true');
          router.push('/panel');
        }
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || 'خطایی رخ داده است.'
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('خطای ناشناخته رخ داده است.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    phone,
    otp,
    setOtp,
    isSubmitting,
    error,
    handleSubmit,
    user,
  };
};