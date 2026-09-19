import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import qs from 'qs';
import { API_CUSTOMER_INTRODUCER_QUERY } from '@/config/api_address.config';

import {
  CustomerIntroducerQueryParams,
  CustomerIntroducerQueryResponse,
} from '../types';

export const customerIntroducerQueryApi = async (
  params: CustomerIntroducerQueryParams = {},
): Promise<CustomerIntroducerQueryResponse> => {
  const token = Cookies.get('token');

  try {
    const response = await axios.get<CustomerIntroducerQueryResponse>(
      API_CUSTOMER_INTRODUCER_QUERY,
      {
        params: {
          pageNumber: params.pageNumber ?? 1,
          pageSize: params.pageSize ?? 10,

          ...(params.searchTerm && {
            searchTerm: params.searchTerm,
          }),

          ...(params.fromDate && {
            fromDate: params.fromDate,
          }),

          ...(params.toDate && {
            toDate: params.toDate,
          }),

          ...(params.statuses?.length && {
            statuses: params.statuses,
          }),
        },

        paramsSerializer: (params) =>
          qs.stringify(params, {
            arrayFormat: 'repeat',
          }),

        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        'خطای ناشناخته در دریافت اطلاعات رخ داده است.';

      toast.error(message);
    } else {
      toast.error('خطای ناشناخته در دریافت اطلاعات رخ داده است.');
    }

    throw error;
  }
};