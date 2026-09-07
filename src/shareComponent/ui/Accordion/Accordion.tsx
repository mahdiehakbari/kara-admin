'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import Link from 'next/link';
import { accordionData } from './constants';

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='relative overflow-hidden rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 md:px-10 shadow-[0_18px_40px_rgba(15,23,42,0.05)]'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-(--primary) via-transparent to-(--primary) opacity-80' />

      <div className='mb-8 text-center'>
        <p className='inline-flex items-center rounded-full bg-(--light-primary) px-3 py-1 text-[12px] font-semibold text-(--primary) mb-3 border border-(--primary-border)'>
          راهنمای سریع
        </p>
        <h3 className='text-[18px] md:text-[22px] text-(--text-black) font-bold'>
          {t('dental_plane:faq')}
        </h3>
      </div>

      <div className='space-y-3'>
        {accordionData.map((item, index: number) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border bg-(--surface) transition-all duration-300 ${
              openIndex === index
                ? 'border-(--primary-border) shadow-[0_14px_30px_rgba(43,105,255,0.08)]'
                : 'border-(--border-color) hover:border-(--primary-border)'
            }`}
          >
            <button
              type='button'
              className='flex w-full items-center justify-between gap-4 px-5 py-4 text-right'
              onClick={() => toggle(index)}
            >
              <h2 className='text-[13px] md:text-[14px] font-semibold leading-7 text-(--text-black)'>
                {t(item.title)}
              </h2>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transform transition-transform duration-300 text-(--second-primary) ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                openIndex === index
                  ? 'max-h-[900px] opacity-100'
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className='min-h-0 px-5 pb-5 pt-2'>
                <div className='border-t border-dashed border-(--border-color) pt-4 text-second-text-color text-[13px] md:text-[14px] leading-8'>
                  {item.hasLink ? (
                    <Trans
                      i18nKey={item.content}
                      components={[
                        <></>,
                        <Link
                          key='terms-link'
                          href='/services/dentalPlan'
                          className='inline text-primary underline underline-offset-4 decoration-2 font-semibold'
                        />,
                      ]}
                    />
                  ) : (
                    t(item.content)
                  )}
                  {item.list && (
                    <ul className='mt-3 list-disc pr-5 space-y-1 text-[12px] md:text-[13px]'>
                      {item.list.map((li, i) => (
                        <li key={i}>{t(li)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
