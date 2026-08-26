/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { IFilteredProps, ISelectOption } from './types';
import Select, { components, MultiValue, OptionProps } from 'react-select';
import { Button, NestedMultiSelect } from '@/shareComponent';


const CheckboxOption = (props: OptionProps<ISelectOption, true>) => (
  <components.Option {...props}>
    <input type='checkbox' checked={props.isSelected} readOnly /> {props.label}
  </components.Option>
);

export const ListFilter = ({
  name,
  fromPaymentDate,
  setFromPaymentDate,
  toPaymentDate,
  setToPaymentDate,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  handleFilter,
  handleRemoveFilter,
  acceptorName,
  setAcceptorName,
  acceptorData,
  referenceNumber,
  setReferenceNumber,
  showFromDate,
  showFromPaymentDate,
  merchantName,
  merchantData,
  setMerchantName,
  showMerchant,
  showTracking,
  showCustomer,
  showRemoveButton,
  showTransactionType,
  transactionTypes,
  setTransactionTypes,
  transactionTypeOptions,
  showCreditType,
  setCreditLineTypes,
  creditLineTypes,
  creditLineTypeOptions,
  showPlane,
  planTypeOptions,
  planTypes,
  setPlanTypes,
  showPaymentStatus,
  paymentStatusOptions,
  paymentStatuses,
  setPaymentStatuses,
  showAmountRange,
  minAmount,
  maxAmount,
  setMinAmount,
  setMaxAmount,
  showAccount,
  accountTypes,
  setAccountTypes,
  accountTypeOptions,
}: IFilteredProps) => {
  const { t } = useTranslation();
  //@ts-ignore
  const nestedCreditLineOptions = creditLineTypeOptions?.map((item) => ({
    ...item,
    children: item.value === '0' ? planTypeOptions : [],
  }));
  const uniqueCustomers: ISelectOption[] = (acceptorData ?? []).map((item) => ({
    label: `${item.firstName} ${item.lastName} (${item.phoneNumber})`,
    value: item.id,
  }));

  const uniqueMerchants: ISelectOption[] = (merchantData ?? []).map((item) => ({
    label: `${item.firstName} ${item.lastName} (${item.nationalId})`,
    value: item.id,
  }));

  const persianToEnglish = (str: string) => {
    return str?.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
  };

  const englishToPersian = (str: string) => {
    return str?.replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
  };

  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const renderDatePicker = (
    value: DateObject | null,
    onChange: (date: DateObject | null) => void,
    placeholder: string,
    maxDate?: Date,
  ) => (
    <DatePicker
      value={value}
      onChange={(date) => onChange(date ?? null)}
      calendar={persian}
      locale={persian_fa}
      maxDate={maxDate}
      portal
      containerClassName='list-filter-date-picker'
      className={`w-full bg-(--surface)`}
      inputClass={`w-full px-3 py-2 rounded-md border border-gray-300 outline-none placeholder-gray-400`}
      placeholder={placeholder}
      onOpenPickNewDate={false}
      render={(val, openCalendar) => (
        <div
          className={`border border-gray-300 rounded-md w-full min-w-30 px-3 py-2 flex items-center justify-between cursor-pointer 
            bg-(--surface)`}
          onClick={openCalendar}
        >
          <span className='truncate'>{val || placeholder}</span>

          <div className='flex items-center gap-2'>
            {val && (
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(null);
                }}
                className='text-gray-400 hover:text-red-500 text-lg leading-none'
              >
                ×
              </button>
            )}

            <Image
              src='/assets/icons/calendar.svg'
              alt='calendar'
              width={20}
              height={20}
              className='brightness-0 invert'
            />
          </div>
        </div>
      )}
    />
  );


  return (
    <div className='flex flex-wrap my-2  justify-between  md:full space-y-5'>
      <div
        className={`flex items-center gap-4 mb-3 ${name == 'installment' ? 'max-w-175' : 'max-w-225'} flex-wrap`}
      >
        {showTracking == true && (
          <div className=' w-40 mb-0'>
            <input
              type='text'
              //@ts-ignore
              value={referenceNumber}
              onChange={(e) => {
                const input = e.target.value;
                const englishNumber = input.replace(/[۰-۹]/g, (d) =>
                  //@ts-ignore
                  '۰۱۲۳۴۵۶۷۸۹'.indexOf(d),
                );
                setReferenceNumber?.(englishNumber);
              }}
              placeholder={
                name == 'settlement'
                  ? 'جستجو شماره موبایل'
                  :name == 'customerList' ?'جستجو نام و .... ':t('home:tracking_number') 
              }
              className={`text-(--text-muted) border border-(--border-color) w-full  h-9.5 px-3 rounded-sm outline-0 placeholder:text-right bg-(--surface)`}
              dir='rtl'
              inputMode='numeric'
            />
          </div>
        )}

        {showAmountRange && (
          <>
            <div className='w-40 mb-0'>
              <input
                type='text'
                value={englishToPersian(minAmount ?? '')}
                onChange={(e) => {
                  const val = e.target.value;
                  const english = persianToEnglish(val).replace(/[^0-9]/g, '');
                  setMinAmount?.(english || null);
                }}
                placeholder='از مبلغ تراکنش'
                className={`border border-(--border-color) w-full h-9.5 px-3 rounded-sm outline-0 placeholder:text-right bg-(--surface) text-(--text-muted)`}
                dir='ltr'
                inputMode='numeric'
              />
            </div>

            <div className='w-40 mb-0'>
              <input
                type='text'
                value={englishToPersian(maxAmount ?? '')}
                onChange={(e) => {
                  const val = e.target.value;
                  const english = persianToEnglish(val).replace(/[^0-9]/g, '');
                  setMaxAmount?.(english || null);
                }}
                placeholder='تا مبلغ تراکنش'
                className={`border border-(--border-color) w-full h-9.5 px-3 rounded-sm outline-0 placeholder:text-right text-(--text-muted) bg-(--surface)`}
                dir='ltr'
                inputMode='numeric'
              />
            </div>
          </>
        )}

        <div className='flex gap-4 items-center md:flex-row flex-col'>
          {showCustomer == true && (
            <Select
              options={uniqueCustomers}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option: CheckboxOption,
                ClearIndicator: () => null,
              }}
              isClearable={false}
              onChange={(val: MultiValue<{ label: string; value: string }>) => {
                setAcceptorName!([...val]);
              }}
              value={acceptorName}
              placeholder={t('home:customer_name')}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: 'var(--surface)',
                  color: 'var(--primary)',
                  borderColor: 'var(--border-color)',
                  width: '300px',
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: 'var(--surface)',
                  color: '#2d4878',
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused
                    ? 'var(--background)'
                    : 'var(--surface)',
                  color: 'var(--text-black)',
                }),
                placeholder: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
                input: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
                valueContainer: (base) => ({
                  ...base,
                  display: 'flex',
                  flexWrap: 'nowrap',
                  overflowX: 'auto',
                  maxHeight: '38px',
                  width: '100%',
                  maxWidth: '150px',
                }),
                multiValue: (base) => ({
                  ...base,
                  whiteSpace: 'nowrap',
                  backgroundColor: 'var(--background)',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
              }}
            />
          )}

          {showMerchant == true && (
            <Select
              options={uniqueMerchants}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option: CheckboxOption,
                ClearIndicator: () => null,
              }}
              isClearable={false}
              onChange={(val: MultiValue<{ label: string; value: string }>) =>
                setMerchantName!([...val])
              }
              value={merchantName}
              placeholder={t('home:merchant_name')}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: 'var(--surface)',
                  color: 'var(--primary)',
                  borderColor: 'var(--border-color)',
                  width: '300px',
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: 'var(--surface)',
                  color: '#2d4878',
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused
                    ? 'var(--background)'
                    : 'var(--surface)',
                  color: 'var(--text-black)',
                }),
                placeholder: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
                input: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
                valueContainer: (base) => ({
                  ...base,
                  display: 'flex',
                  flexWrap: 'nowrap',
                  overflowX: 'auto',
                  maxHeight: '38px',
                  width: '100%',
                  maxWidth: '150px',
                }),
                multiValue: (base) => ({
                  ...base,
                  whiteSpace: 'nowrap',
                  backgroundColor: 'var(--background)',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: 'var(--text-black)',
                }),
              }}
            />
          )}
        </div>

        {showTransactionType && (
          <Select
            options={transactionTypeOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckboxOption, ClearIndicator: () => null }}
            isClearable={false}
            onChange={(val) => setTransactionTypes?.(val as ISelectOption[])}
            value={transactionTypes}
            placeholder={t('financial:transaction_type')}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: 'var(--primary)',
                borderColor: 'var(--border-color)',
                width: '300px',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: '#2d4878',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? 'var(--background)'
                  : 'var(--surface)',
                color: 'var(--text-black)',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              input: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              singleValue: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              valueContainer: (base) => ({
                ...base,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                maxHeight: '38px',
                width: '100%',
                maxWidth: '150px',
              }),
              multiValue: (base) => ({
                ...base,
                whiteSpace: 'nowrap',
                backgroundColor: 'var(--background)',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
            }}
          />
        )}

        {showCreditType && name == 'AccountingReport' && (
          <NestedMultiSelect
            options={nestedCreditLineOptions}
            value={creditLineTypes ?? []}
            onChange={(value) => setCreditLineTypes?.(value)}
            childValue={planTypes ?? []}
            onChildChange={(value) => setPlanTypes?.(value)}
            placeholder={
              name === 'AccountingReport' ? 'حسابداری' : 'خط اعتباری'
            }
          />
        )}
        {showCreditType && name !== 'AccountingReport' && (
          <Select
            options={creditLineTypeOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckboxOption, ClearIndicator: () => null }}
            isClearable={false}
            onChange={(val) => setCreditLineTypes?.(val as ISelectOption[])}
            value={creditLineTypes}
            placeholder={'خط اعتباری'}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: 'var(--primary)',
                borderColor: 'var(--border-color)',
                width: '300px',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: '#2d4878',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? 'var(--background)'
                  : 'var(--surface)',
                color: 'var(--text-black)',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              input: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              singleValue: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              valueContainer: (base) => ({
                ...base,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                maxHeight: '38px',
                width: '100%',
                maxWidth: '150px',
              }),
              multiValue: (base) => ({
                ...base,
                whiteSpace: 'nowrap',
                backgroundColor: 'var(--background)',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
            }}
          />
        )}

        {showAccount && (
          <Select
            options={accountTypeOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckboxOption, ClearIndicator: () => null }}
            isClearable={false}
            onChange={(val) => setAccountTypes?.(val as ISelectOption[])}
            value={accountTypes}
            placeholder='حساب '
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: 'var(--primary)',
                borderColor: 'var(--border-color)',
                width: '200px',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: '#2d4878',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? 'var(--background)'
                  : 'var(--surface)',
                color: 'var(--text-black)',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              input: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              singleValue: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              valueContainer: (base) => ({
                ...base,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                maxHeight: '38px',
                width: '100%',
                maxWidth: '150px',
              }),
              multiValue: (base) => ({
                ...base,
                whiteSpace: 'nowrap',
                backgroundColor: 'var(--background)',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
            }}
          />
        )}

        {showPlane && (
          <Select
            options={planTypeOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckboxOption, ClearIndicator: () => null }}
            isClearable={false}
            onChange={(val) => setPlanTypes?.(val as ISelectOption[])}
            value={planTypes}
            placeholder='طرح'
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: 'var(--primary)',
                borderColor: 'var(--border-color)',
                width: '200px',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: '#2d4878',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? 'var(--background)'
                  : 'var(--surface)',
                color: 'var(--text-black)',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              input: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              singleValue: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              valueContainer: (base) => ({
                ...base,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                maxHeight: '38px',
                width: '100%',
                maxWidth: '150px',
              }),
              multiValue: (base) => ({
                ...base,
                whiteSpace: 'nowrap',
                backgroundColor: 'var(--background)',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
            }}
          />
        )}

        {showPaymentStatus && (
          <Select
            options={paymentStatusOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckboxOption, ClearIndicator: () => null }}
            isClearable={false}
            onChange={(val) => setPaymentStatuses?.(val as ISelectOption[])}
            value={paymentStatuses}
            placeholder={t('home:status')}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: 'var(--primary)',
                borderColor: 'var(--border-color)',
                width: '200px',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'var(--surface)',
                color: '#2d4878',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? 'var(--background)'
                  : 'var(--surface)',
                color: 'var(--text-black)',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              input: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              singleValue: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
              valueContainer: (base) => ({
                ...base,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                maxHeight: '38px',
                width: '100%',
                maxWidth: '150px',
              }),
              multiValue: (base) => ({
                ...base,
                whiteSpace: 'nowrap',
                backgroundColor: 'var(--background)',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'var(--text-black)',
              }),
            }}
          />
        )}

        {showFromPaymentDate == true && (
          <div className='flex items-center gap-4 mb-0 '>
            {renderDatePicker(
              fromPaymentDate ?? null,
              setFromPaymentDate!,
              name == 'installment' ? 'از تاریخ باز پرداخت' : 'از تاریخ تسویه',
              name != 'settlement' && name != 'installment' ? today : undefined,
            )}

            {renderDatePicker(
              toPaymentDate ?? null,
              setToPaymentDate!,
              name == 'installment' ? 'تا تاریخ بازپرداخت' : 'تا تاریخ تسویه',
              name != 'settlement' && name != 'installment' ? today : undefined,
            )}
          </div>
        )}

        {showFromDate == true && (
          <div className='flex items-center gap-4 mb-0 '>
            {renderDatePicker(
              fromDate ?? null,
              setFromDate!,
              name == 'AccountingReport' ? 'از تاریخ' : 'از تاریخ تراکنش',
              name != 'settlement' ? today : undefined,
            )}

            {renderDatePicker(
              toDate ?? null,
              setToDate!,
              name == 'AccountingReport' ? 'تا تاریخ' : 'تا تاریخ تراکنش',
              name != 'settlement' ? today : undefined,
            )}
          </div>
        )}
      </div>

      <div className='flex justify-between gap-4 mt-2 md:mt-0'>
        {showRemoveButton == true && (
          <Button
            variant='outline'
            onClick={handleRemoveFilter}
            className='w-30'
          >
            {t('home:remove_filter')}
          </Button>
        )}

        <Button
          onClick={handleFilter}
          className='w-30'
          // disabled={!hasSelectedFilter}
        >
          {t('home:get_report')}
        </Button>
      </div>
    </div>
  );
};
