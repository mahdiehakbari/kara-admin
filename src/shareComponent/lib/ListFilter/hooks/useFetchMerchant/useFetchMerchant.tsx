'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { API_MERCHANT_QUERY_SIMPLE } from '@/config/api_address.config';
import Cookies from 'js-cookie';
import { TMerchant } from './types';
const token = Cookies.get('token');
export const useFetchMerchant = (
  setMerchantData: (data: TMerchant[]) => void,
) => {
  useEffect(() => {
    axios
      .get<TMerchant[]>(API_MERCHANT_QUERY_SIMPLE, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMerchantData(res.data))
      .catch(() => {});
  }, [setMerchantData]);
};
