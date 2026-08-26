import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import { API_CUSTOMER_INTRODUCER_QUERY } from '@/config/api_address.config';

import {
  CustomerIntroducerQueryParams,
  CustomerIntroducerQueryResponse,
} from '../types';

export const customerIntroducerQueryApi = async (
  params: CustomerIntroducerQueryParams = {}
): Promise<CustomerIntroducerQueryResponse> => {
  const token = Cookies.get('token');

  try {
    const response = await axios.get<CustomerIntroducerQueryResponse>(
      API_CUSTOMER_INTRODUCER_QUERY,
      {
        params: {
          pageNumber: params.pageNumber ?? 1,
          pageSize: params.pageSize ?? 10,
          statuses: params.statuses,
        },
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        'خطایی در دریافت لیست مشتریان رخ داده است.';

      toast.error(message);
    } else {
      toast.error('خطایی در دریافت لیست مشتریان رخ داده است.');
    }

    throw error;
  }
};