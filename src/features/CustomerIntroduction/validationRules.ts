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

  nationalId: {
    required: t('home:field_required'),

    pattern: {
      value: /^[0-9]{10}$/,
      message: t('home:national_code_invalid'),
    },

    validate: (value?: string) => {
      if (!value) return true;

      if (!/^\d{10}$/.test(value)) {
        return t('home:national_code_invalid');
      }

      if (/^(\d)\1{9}$/.test(value)) {
        return t('home:national_code_invalid');
      }

      const check = Number(value[9]);

      const sum =
        value
          .split('')
          .slice(0, 9)
          .reduce(
            (acc, num, index) =>
              acc + Number(num) * (10 - index),
            0
          ) % 11;

      return (
        (sum < 2 && check === sum) ||
        (sum >= 2 && check === 11 - sum) ||
        t('home:national_code_invalid')
      );
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