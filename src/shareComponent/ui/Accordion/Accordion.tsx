'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { accordionData } from './constants';
import ResponsiveModal from '../ResponsiveModal/Modal';
import { FiPhone } from 'react-icons/fi';

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const { t } = useTranslation();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='space-y-3 px-4 md:px-0'>
      <h3 className='text-center text-[18px] text-(--text-black) font-bold mb-8'>
        {t('faq:doctor_faq_title')}
      </h3>

      {accordionData.map((item, index: number) => (
        <div
          key={index}
          className={`border border-(--border-color) rounded-xl px-5 py-4 cursor-pointer bg-(--surface) transition-all duration-300 ${openIndex === index ? 'shadow-md' : 'hover:shadow-sm'
            }`}
        >
          {/* Header */}
          <div
            className='flex justify-between items-center gap-3'
            onClick={() => toggle(index)}
          >
            <h2 className='font-medium text-[13px] text-(--text-black)'>
              {t(item.title)}
            </h2>
            <ChevronDown
              className={`w-5 h-5 text-(--text-muted) shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
            />
          </div>

          {/* Content */}

          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index
                ? 'max-h-80 mt-3 pt-3 border-t border-(--border-color)'
                : 'max-h-0'
              }`}
          >
            {index == 11 ? (
              <>
                {' '}
                <div>
                  <p className='text-(--text-muted) text-[13px] leading-relaxed max-w-lg mb-4'>
                    تیم‌های پشتیبانی آماده پاسخگویی و راهنمایی شما در تمام مراحل
                    هستند. لطفاً جهت دریافت پاسخ سریع‌تر، با بخش مربوطه تماس
                    بگیرید:
                  </p>

                  <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
                    پشتیبانی دریافت و فعال‌سازی اعتبار (اپلیکیشن باجت):
                  </h2>
                  <p className='text-(--text-muted)  text-[15px] leading-relaxed max-w-lg mb-1'>
                    اگر در مراحل اعتبارسنجی، افتتاح حساب، بارگذاری مدارک یا
                    تخصیص اعتبار در اپلیکیشن باجت با مشکلی مواجه شده‌اید، با
                    پشتیبانی باجت تماس بگیرید:
                  </p>
                  <div className='flex items-center gap-2 my-2'>
                    <FiPhone className='text-(--primary-text) text-[16px]' />
                    <div className='flex gap-2'>
                      <span className='text-(--text-muted) text-[13px]'>
                        تلفن پشتیبانی باجت:
                      </span>
                      <a
                        href='tel:02125961300'
                        className='text-(--primary) font-bold text-[16px] underline direction-ltr cursor-pointer'
                        dir='ltr'
                      >
                        ۰۲۱-۲۵۹۶۱۳۰۰
                      </a>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
                    پشتیبانی خدمات و سامانه دنتالیت:
                  </h2>
                  <p className='text-(--text-muted) font-bold text-[13px] leading-relaxed max-w-lg'>
                    برای سوالات مربوط به کیف پول دنتالیت، انتخاب پزشکان، ثبت
                    تراکنش در مطب و شرایط تسویه حساب با پزشک، در خدمت شما هستیم:
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <FiPhone className='text-(--primary) text-[16px]' />
                  <div className='flex gap-2'>
                    <span className='text-(--text-muted) text-[13px]'>
                      تلفن پشتیبانی دنتالیت:
                    </span>
                    <a
                      href='tel:02179572828'
                      className='text-(--primary) font-bold text-[16px] underline direction-ltr cursor-pointer'
                      dir='ltr'
                    >
                      ۰۲۱-۷۹۵۷۲۸۲۸
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className='text-(--text-muted) text-[13px] font-medium leading-relaxed'>
                {item.hasLink ? (
                  <Trans
                    ns='faq'
                    i18nKey='support_answer'
                    components={{
                      1: (
                        <a
                          href='tel:02179572828'
                          onClick={(e) => e.stopPropagation()}
                          className='text-primary underline font-medium cursor-pointer'
                        />
                      ),
                    }}
                  />
                ) : (
                  t(item.content)
                )}

                {item.list && (
                  <ul className='mt-2 list-disc pr-5 text-[12px] space-y-1'>
                    {item.list.map((li, i) => (
                      <li key={i}>{t(li)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      <ResponsiveModal
        title={t('panel:contact_support')}
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      >
        <div className='md:w-[500px] py-8 px-6'>
          <div>
            <p className='text-(--text-muted) text-[13px] leading-relaxed max-w-lg mb-1'>
              تیم‌های پشتیبانی آماده پاسخگویی و راهنمایی شما در تمام مراحل
              هستند. لطفاً جهت دریافت پاسخ سریع‌تر، با بخش مربوطه تماس بگیرید:
            </p>
            <br />
            <p className='text-(--text-black) font-bold text-[13px] leading-relaxed max-w-lg mb-1'>
              پشتیبانی دریافت و فعال‌سازی اعتبار (اپلیکیشن باجت): اگر در مراحل
              اعتبارسنجی، افتتاح حساب، بارگذاری مدارک یا تخصیص اعتبار در
              اپلیکیشن باجت با مشکلی مواجه شده‌اید، با پشتیبانی باجت تماس
              بگیرید{' '}
            </p>
            <div className='flex items-center gap-2 my-2'>
              <FiPhone className='text-(--primary-text) text-[16px]' />
              <div className='flex gap-2'>
                <span className='text-(--text-muted) text-[13px]'>
                  تلفن پشتیبانی باجت:
                </span>
                <a
                  href='tel:02125961300'
                  className='text-(--primary) font-bold text-[16px] underline direction-ltr cursor-pointer'
                  dir='ltr'
                >
                  ۰۲۱-۲۵۹۶۱۳۰۰
                </a>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
              پشتیبانی خدمات و سامانه دنتالیت:
            </h2>
            <p className='text-(--text-muted) font-bold text-[13px] leading-relaxed max-w-lg'>
              برای سوالات مربوط به کیف پول دنتالیت، انتخاب پزشکان، ثبت تراکنش در
              مطب و شرایط تسویه حساب با پزشک، در خدمت شما هستیم:
            </p>
          </div>

          <div className='flex items-center gap-2'>
            <FiPhone className='text-(--primary) text-[16px]' />
            <div className='flex gap-2'>
              <span className='text-(--text-muted) text-[13px]'>
                تلفن پشتیبانی دنتالیت:
              </span>
              <a
                href='tel:02179572828'
                className='text-(--primary) font-bold text-[16px] underline direction-ltr cursor-pointer'
                dir='ltr'
              >
                ۰۲۱-۷۹۵۷۲۸۲۸
              </a>
            </div>
          </div>
        </div>
      </ResponsiveModal>
    </div>
  );
};
