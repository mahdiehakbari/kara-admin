
import api from '@/config/utils/axios';
import { CUSTOMER_INTRODUCER_PROFILE } from '@/config/api_address.config';

export interface ICustomerIntroducerProfile {
  nationalId: string;
  cardNumber: string;
}

export const updateCustomerIntroducerProfile = (
  data: ICustomerIntroducerProfile,
) => {
  return api.put(CUSTOMER_INTRODUCER_PROFILE, data);
};
