'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Select, { components, MultiValue, OptionProps } from 'react-select';
import { FaAlignLeft, FaLightbulb, FaRegCopy, FaMagic } from 'react-icons/fa';
import { ISelectOption } from '@/shareComponent/lib/ListFilter/types';
import { Button, SpinnerDiv } from '@/shareComponent';
import { focusOptions, toneOptions } from '../constants';
import { API_AI_REWRITE } from '@/config/api_address.config';


interface Props {
  caption: string;
  setCaption: (value: string) => void;
}

const CheckboxOption = (props: OptionProps<ISelectOption, true>) => (
  <components.Option {...props}>
    <input type='checkbox' checked={props.isSelected} readOnly /> {props.label}
  </components.Option>
);

const PostInfo = ({ caption, setCaption }: Props) => {
  const token = Cookies.get('token');

  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const [tone, setTone] = useState(toneOptions[0]);

  const [focus, setFocus] = useState([focusOptions[0]]);

  const getCaption = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        API_AI_REWRITE,
        {
          rewriteToneType: Number(tone.value),
          specialtyTypes: focus.map((item) => Number(item.value)),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
      );

      setCaption(data.rewrittenBio);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCaption();
  }, []);

  const copyCaption = async () => {
    await navigator.clipboard.writeText(caption);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='rounded-3xl border border-(--border-color) bg-(--surface) shadow-sm'>
      {/* Header */}

      <div className='flex items-center justify-between border-b border-(--border-color) bg-(--bg-gray-light) px-6 py-4 rounded-t-3xl'>
        <div className='flex items-center gap-2'>
          <FaAlignLeft className='text-(--primary)' />

          <h2 className='font-bold'>متن کپشن (آماده‌ی کپی)</h2>
        </div>

        <Button size='sm' onClick={copyCaption}>
          <FaRegCopy />

          {copied ? 'کپی شد' : 'کپی متن'}
        </Button>
      </div>

      {/* AI Toolbar */}

      <div className='bg-[#f7efff] border-b border-(--border-color) px-3 py-4'>
        <div className='flex items-center gap-2 text-(--primary)  text-sm font-semibold'>
          <FaMagic />
          بازنویسی با هوش مصنوعی
        </div>

        <div className='flex justify-between items-center gap-3'>
          <div className='flex flex-wrap items-center gap-3 mt-3'>
            <div className='w-50'>
              <Select
                options={toneOptions}
                value={tone}
                onChange={(val) => setTone(val!)}
                className='text-xs'
                isSearchable={false}
              />
            </div>

            <div className='w-50'>
              <Select
                options={focusOptions}
                value={focus}
                isMulti
                closeMenuOnSelect={false}
                onChange={(val) => setFocus([...val])}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-black)',
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border-color)',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused
                      ? 'var(--block-color)'
                      : 'var(--surface)',
                    color: 'var(--text-black)',
                    cursor: 'pointer',
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: 'var(--secondary)',
                    whiteSpace: 'nowrap',
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: 'var(--text-black)',
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: 'var(--text-muted)',
                    ':hover': {
                      backgroundColor: 'var(--border-color)',
                      color: 'var(--text-black)',
                    },
                  }),
                  input: (base) => ({
                    ...base,
                    color: 'var(--text-black)',
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: 'var(--text-muted)',
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
                  }),
                  indicatorSeparator: (base) => ({
                    ...base,
                    backgroundColor: 'var(--border-color)',
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: 'var(--text-muted)',
                  }),
                }}
              />
            </div>
          </div>

          <Button
            onClick={getCaption}
            disabled={loading}
            className=' w-fit px-2 text-sm '
          >
            {loading ? 'در حال تولید...' : 'تولید مجدد'}
          </Button>
        </div>
      </div>

      {/* Caption */}

      <div className='m-6 rounded-2xl bg-(--bg-gray-light) p-6 max-h-105 overflow-auto'>
        {loading ? (
          <div className='flex justify-center py-12'>
            <SpinnerDiv />
          </div>
        ) : (
          <p className='whitespace-pre-wrap leading-8 text-sm'>{caption}</p>
        )}
      </div>

      {/* Hint */}

      <div className='m-6 mt-0 flex gap-3 rounded-2xl  bg-amber-50 border border-amber-200/80 p-4'>
        <FaLightbulb
          className='mt-1 shrink-0 text-amber-500'
          size={18}
        />

        <p className='text-[13px] leading-6 text-amber-700'>
          نکته: لینک صفحه اختصاصی خود در دنتالیت را در بخش Bio اینستاگرام مطب
          قرار دهید تا بیماران مستقیماً به پروفایل شما هدایت شوند.
        </p>
      </div>
    </div>
  );
};

export default PostInfo;
