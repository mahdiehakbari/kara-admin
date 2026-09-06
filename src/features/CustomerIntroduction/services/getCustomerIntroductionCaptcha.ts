import { API_CUSTOMER_INTRODUCTION_CAPTCHA } from '@/config/api_address.config';
import axios from 'axios';
export interface CaptchaResponse {
  success: boolean;
  message: string;
  id: string;
  captchaImage: string;
}

export const getCustomerIntroductionCaptcha =
  async (): Promise<CaptchaResponse> => {
    const response = await axios.get<CaptchaResponse>(
      API_CUSTOMER_INTRODUCTION_CAPTCHA,
      {
        params: {
          type: 0,
        },
      },
    );

    return response.data;
  };