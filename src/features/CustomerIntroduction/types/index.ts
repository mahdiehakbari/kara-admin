import { FieldValues } from 'react-hook-form';

export interface CustomerIntroductionFormValues extends FieldValues {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  showIntroducerName: boolean;
}

export interface CustomerIntroductionResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}