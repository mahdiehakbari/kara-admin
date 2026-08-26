export const validationRules = (t: (key: string) => string) => ({
  phoneNumber: {
    required: t('home:field_required'),

    validate: (value?: string) => {
      if (!value) return true;

      if (!/^\d+$/.test(value)) {
        return t('home:only_numbers_allowed');
      }

      if (value.length !== 11) {
        return t('home:mobile_must_be_11_digits');
      }

      return true;
    },
  },



  firstName: {
    required: t('home:field_required'),

    minLength: {
      value: 2,
      message: 'نام باید حداقل ۲ کاراکتر باشد.',
    },

    validate: (value?: string) => {
      if (!value?.trim()) {
        return t('home:field_required');
      }

      return true;
    },
  },

  lastName: {
    required: t('home:field_required'),

    minLength: {
      value: 2,
      message: 'نام خانوادگی باید حداقل ۲ کاراکتر باشد.',
    },

    validate: (value?: string) => {
      if (!value?.trim()) {
        return t('home:field_required');
      }

      return true;
    },
  },
});