import { API_CUSTOMER_INTRODUCER_REMOVE } from '@/config/api_address.config';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


interface RemoveCustomerIntroducerPayload {
  id: string;
}

export const customerIntroducerRemoveApi = async (
  payload: RemoveCustomerIntroducerPayload,
): Promise<void> => {
  const token = Cookies.get('token');

  try {
    await axios.delete(API_CUSTOMER_INTRODUCER_REMOVE, {
      data: payload,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    toast.success('مشتری با موفقیت حذف شد');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        'خطایی در حذف مشتری رخ داده است.';

      toast.error(message);
    } else {
      toast.error('خطایی در حذف مشتری رخ داده است.');
    }

    throw error;
  }
};