import { FieldValues } from 'react-hook-form';

export interface CustomerIntroductionFormValues extends FieldValues {
  phoneNumber: string;
  nationalId: string;
  firstName: string;
  lastName: string;
}

export interface CustomerIntroductionResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}