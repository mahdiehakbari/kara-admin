'use client';

import { useTranslation } from 'react-i18next';
import { Headphones, MessageCircle, PhoneCall } from 'lucide-react';
import { FiPhone } from 'react-icons/fi';

export function SupportBar() {
  
  const { t } = useTranslation('landing');

  return (
    <section
      id='contact'
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24'
    >
      <div className=' w-full bg-(--surface) border border-(--border-color) rounded-2xl p-6 transition-colors mb-6'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
              پشتیبانی دریافت و فعال‌سازی اعتبار (اپلیکیشن باجت):
            </h2>
            <p className='text-(--text-muted)  text-[15px] leading-relaxed  mb-1'>
              اگر در مراحل اعتبارسنجی، افتتاح حساب، بارگذاری مدارک یا تخصیص
              اعتبار در اپلیکیشن باجت با مشکلی مواجه شده‌اید، با پشتیبانی باجت
              تماس بگیرید:
            </p>
          </div>
          <div className='flex items-center gap-2 mb-2'>
            <div className='flex flex-col'>
              <span className='text-(--text-muted) text-[13px]'>
                تلفن پشتیبانی باجت:
              </span>
              <div className='flex items-center gap-2'>
                <FiPhone className='text-(--primary-text) text-[14px]' />
                <a
                  href='tel:02125961300'
                  className='text-(--primary-text) font-bold text-[16px]  direction-ltr cursor-pointer'
                  dir='ltr'
                >
                  ۰۲۱-۲۵۹۶۱۳۰۰
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className='flex justify-between'>
          <div>
            {' '}
            <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
              {' '}
              پشتیبانی خدمات و سامانه دنتالیت:
            </h2>
            <p className='text-(--text-muted) font-bold text-[13px] leading-relaxed'>
              {' '}
              برای سوالات مربوط به کیف پول دنتالیت، انتخاب پزشکان، ثبت تراکنش در
              مطب و شرایط تسویه حساب با پزشکان و کلینیک ها، در خدمت شما هستیم.
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-(--text-muted) text-[13px]'>
              تلفن پشتیبانی دنتالیت:
            </span>
            <div className='flex items-center gap-2'>
              <FiPhone className='text-(--primary-text) text-[16px]' />
              <a
                href='tel:90000644'
                className='text-(--text-black) font-bold text-[16px] direction-ltr cursor-pointer w-full text-right'
                dir='ltr'
              >
                ۹۰۰۰۰۶۴۴
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <FiPhone className='text-(--primary-text) text-[16px]' />
              <a
                href='tel:02179572828'
                className='text-(--primary-text) font-bold text-[16px]  direction-ltr cursor-pointer'
                dir='ltr'
              >
                ۰۲۱-۷۹۵۷۲۸۲۸
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-(--surface) rounded-2xl p-6 sm:p-8 border border-(--border-color) flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm'>
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
            href='tel:90000644'
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
      </div > */
}
    </section >
  );
}
