import axios from 'axios';
import {
  CustomerIntroductionFormValues,
  CustomerIntroductionResponse,
} from '../types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { API_ADD_CUSTOMER_INTRODUCTION } from '@/config/api_address.config';

export const customerIntroductionApi = async (
  payload: CustomerIntroductionFormValues
): Promise<CustomerIntroductionResponse> => {
  const token = Cookies.get('token');
  try {
    const response = await axios.post<CustomerIntroductionResponse>(
      `${API_ADD_CUSTOMER_INTRODUCTION}`,
      payload,
      {
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
        'خطایی در ثبت اطلاعات مشتری رخ داده است.';

      toast.error(message);
    } else {
      toast.error('خطایی در ثبت اطلاعات مشتری رخ داده است.');
    }

    throw error;
  }
};