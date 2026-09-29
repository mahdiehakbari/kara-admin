'use client';

import { useTranslation } from 'react-i18next';
import { Headphones, MessageCircle, PhoneCall } from 'lucide-react';

export function SupportBar() {
  const { t } = useTranslation('landing');

  return (
    <section
      id='contact'
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24'
    >
      <div className='bg-(--surface) rounded-2xl p-6 sm:p-8 border border-(--border-color) flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm'>
        <div className='flex items-center gap-4 text-right'>
          <div className='w-14 h-14 rounded-2xl bg-(--light-primary) text-(--primary) flex items-center justify-center border border-(--primary-border)/30 shrink-0'>
            <Headphones className='w-7 h-7' />
          </div>
          <div>
            <h3 className='text-lg font-bold text-(--text-black)'>
              {t('support_title')}
            </h3>
            <p className='text-xs sm:text-sm text-(--second-text-color) mt-0.5'>
              {t('support_subtitle')}
            </p>
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-3'>
          <a
            href='tel:02188884321'
            className='px-5 py-2.5 rounded-xl bg-(--bg-gray-light) hover:bg-(--secondary) text-(--second-text-color) border border-(--border-color) text-xs sm:text-sm font-bold transition-colors flex items-center gap-2'
          >
            <PhoneCall className='w-4 h-4 text-(--primary)' />
            <span>{t('support_call_cta')}</span>
          </a>
          <a
            href='#'
            className='px-5 py-2.5 rounded-xl bg-(--light-primary) hover:bg-(--light-primary)/70 text-(--primary) border border-(--primary-border)/30 text-xs sm:text-sm font-bold transition-colors flex items-center gap-2'
          >
            <MessageCircle className='w-4 h-4' />
            <span>{t('support_chat_cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
