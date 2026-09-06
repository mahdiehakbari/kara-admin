import { FieldValues } from 'react-hook-form';

export interface CustomerIntroductionFormValues extends FieldValues {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  showIntroducerName: boolean;
  captchaId: string;
  captchaCode: string;
}

export interface CustomerIntroductionResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}

export type TCustomerIntroductionFormProps = {
  name?: string;
  onSuccess?: () => void;
};
