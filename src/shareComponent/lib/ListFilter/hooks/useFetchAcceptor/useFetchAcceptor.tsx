'use client'
import { useEffect } from 'react';
import axios from 'axios';
import { API_CUSTOMER_QUERY_SIMPLE } from '@/config/api_address.config';
import Cookies from 'js-cookie';
import { TAcceptor } from './types';
const token = Cookies.get('token');

export const useFetchAcceptor = (
  setAcceptorData: (data: TAcceptor[]) => void,
) => {
  useEffect(() => {
    axios
      .get<TAcceptor[]>(API_CUSTOMER_QUERY_SIMPLE, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAcceptorData(res.data))
      .catch(() => {});
  }, [setAcceptorData]);
};
