import React from 'react';
import { InputProps, IProfileFormValues } from './types';
import { FieldValues } from 'react-hook-form';

export function Input<T extends FieldValues>({
  label,
  name,
  register,
  type = 'text',
  full = false,
  errors,
  textError,
  rules,
  defaultValue,
  disabled = false,
}: InputProps<T>) {
  const hasError = !!errors[name];
  const isRequired = rules?.required !== false;
  const maxLengthMap: Partial<Record<keyof IProfileFormValues, number>> = {
    postalCode: 10,
    iban: 24,
    mobile: 11,
    nationalId: 10,
  };

  return (
    <div className={`flex flex-col ${full ? 'col-span-2' : ''}`}>
      <label className='text-sm'>{isRequired ? `${label} *` : label}</label>
      <div className={`${name == 'iban' && 'flex w-73'}`}>
        <input
          {...register(name, {
            ...(isRequired && { required: textError }),
            ...rules,
            onChange: (e) => {
              if (name === 'iban') {
                const cleaned = e.target.value.replace(/\D/g, '');
                e.target.value = cleaned;
              }

              rules?.onChange?.(e);
            },
          })}
          type={type}
          maxLength={maxLengthMap[name]}
          defaultValue={
            name === 'iban' && defaultValue
              ? defaultValue.replace(/\D/g, '')
              : defaultValue
          }
          disabled={disabled}
          // placeholder={isRequired ? `${label} *` : label}
          className={`bg-(--surface) border rounded-lg px-3 py-2 text-right  w-full 
                    focus:outline-none focus:ring-2
                    ${name == 'iban' && 'w-3xs'}
                    ${
                      hasError
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-(--border-color) focus:ring-blue-500'
                    }
                    ${
                      disabled
                        ? `bg-(--surface) cursor-default opacity-70 text-[#9b9b9b]`
                        : ''
                    } 
                    `}
        />
        {name == 'iban' && (
          <div
            className={`flex items-center px-3  border border-r-0   ${
              hasError
                ? 'border-red-500 focus:ring-red-400'
                : 'border-(--border-color) focus:ring-blue-500'
            }  rounded-l-md -mr-7.25 bg-(--surface)`}
          >
            IR
          </div>
        )}
      </div>

      {hasError && (
        <span className='text-red-500 text-sm mt-1'>
          {errors[name]?.message?.toString() || textError}
        </span>
      )}
    </div>
  );
};
