import { customerIntroductionApi } from '@/features';
import { CustomerIntroductionFormValues } from '@/features/CustomerIntroduction/types';
import { create } from 'zustand';


interface CustomerIntroductionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;

  submitCustomerIntroduction: (
    payload: CustomerIntroductionFormValues
  ) => Promise<boolean>;

  reset: () => void;
}

export const useCustomerIntroductionStore =
  create<CustomerIntroductionState>((set) => ({
    isLoading: false,
    isSuccess: false,
    error: null,

    submitCustomerIntroduction: async (payload) => {
      try {
        set({
          isLoading: true,
          isSuccess: false,
          error: null,
        });

        await customerIntroductionApi(payload);

        set({
          isLoading: false,
          isSuccess: true,
          error: null,
        });

        return true;
      } catch (error) {
        let message = 'خطا در ثبت اطلاعات مشتری';

        if (error instanceof Error) {
          message = error.message;
        }

        set({
          isLoading: false,
          isSuccess: false,
          error: message,
        });

        return false;
      }
    },

    reset: () => {
      set({
        isLoading: false,
        isSuccess: false,
        error: null,
      });
    },
  }));