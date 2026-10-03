'use client';

import { useTranslation } from 'react-i18next';
import {
  Landmark,
  Mail,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Headphones,
} from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  const { t } = useTranslation('landing');

  return (
    <footer className='bg-(--surface) border-t border-(--border-color)'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='flex flex-col text-right'>
            <div className='flex items-center gap-2.5 mb-3'>
              <span className='text-lg font-black text-(--text-black)'>
                {t('brand_name')}
              </span>
              <span className='px-2 py-0.5 rounded text-[11px] bg-(--light-primary) text-(--primary) font-bold'>
                {t('brand_badge')}
              </span>
            </div>
            <p className='text-xs text-(--text-muted) leading-relaxed mb-4'>
              {t('footer_description')}
            </p>
            <p className='text-xs text-(--text-muted) leading-relaxed mb-4'>
              زیرساخت پرداخت و تسهیلات سلامت‌محور ایران.
            </p>
          </div>

          {/* Quick links */}
          <div className='flex flex-col text-right'>
            <span className='text-sm font-bold text-(--text-black) mb-3'>
              {t('footer_quick_links')}
            </span>
            <div className='flex flex-col space-y-2 text-xs text-(--text-muted)'>
              <Link
                href='https://dentalit.ir/'
                className='hover:text-(--primary) transition-colors'
              >
                وب سایت دنتالیت
              </Link>
              <Link
                href='https://dentist.dentalit.ir/'
                className='hover:text-(--primary) transition-colors'
              >
                پنل پزشکان دنتالیت
              </Link>
              <Link
                href='/#about'
                className='hover:text-(--primary) transition-colors'
              >
                {t('footer_link_about')}
              </Link>
              <Link
                href='/#earning-calc'
                className='hover:text-(--primary) transition-colors'
              >
                {t('footer_link_calculator')}
              </Link>
              {/* <Link
                href='/#rules'
                className='hover:text-(--primary) transition-colors'
              >
                {t('footer_link_rules')}
              </Link> */}
            </div>
          </div>

          {/* Contact */}
          <div className='flex flex-col text-right'>
            <span className='text-sm font-bold text-(--text-black) mb-3'>
              {t('footer_contact_title')}
            </span>
            <div className='flex flex-col space-y-2.5 text-xs text-(--text-muted)'>
              <div className='flex items-center gap-2'>
                <Headphones className='w-3.5 h-3.5 text-(--primary)' />
                <span> تلفن پشتیبانی باجت: </span> <a
                  href='tel:02125961300'
                  className='flex items-center gap-2 hover:text-(--primary)'>
                  ۰۲۱-۲۵۹۶۱۳۰۰
                </a>
              </div>

              <div className='flex items-center gap-2'>
                <Headphones className='w-3.5 h-3.5 text-(--primary)' />
                <span> تلفن پشتیبانی دنتالیت: </span> <a
                  href='tel:90000644'
                  className='flex items-center gap-2 hover:text-(--primary)'>
                  <span>{t('support_phone')}</span>
                </a>
              </div>

              <div className='flex items-center gap-2'>
                <Mail className='w-3.5 h-3.5 text-(--primary)' />
                <a
                  href='mailto:info@dentalit.ir'
                  className='flex items-center gap-2 hover:text-(--primary)'>
                  <span>{t('footer_contact_email')}</span>
                </a>
              </div>
              {/* <div className='flex items-center gap-2'>
                <MapPin className='w-8 h-5 text-(--primary)' />
                <span>{t('footer_contact_address')}</span>
              </div> */}
            </div>
          </div>

          {/* Badges */}
          <div className='flex flex-col text-right'>
            <span className='text-sm font-bold text-(--text-black) mb-3'>
              {t('footer_badges_title')}
            </span>
            <div className='flex flex-wrap gap-2'>
              <div className='px-3 py-2 rounded-xl bg-(--bg-gray-light) border border-(--border-color) text-(--second-text-color) text-xs font-medium flex items-center gap-1.5'>
                <Landmark className='w-4 h-4 text-(--primary)' />
                <span>{t('footer_badge_bank')}</span>
              </div>
              <div className='px-3 py-2 rounded-xl bg-(--bg-gray-light) border border-(--border-color) text-(--second-text-color) text-xs font-medium flex items-center gap-1.5'>
                <Stethoscope className='w-4 h-4 text-(--primary)' />
                <span>{t('footer_badge_society')}</span>
              </div>
              <div className='px-3 py-2 rounded-xl bg-(--bg-gray-light) border border-(--border-color) text-(--second-text-color) text-xs font-medium flex items-center gap-1.5'>
                <ShieldCheck className='w-4 h-4 text-(--secondary-green)' />
                <span>{t('footer_badge_trust')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 pt-6 border-t border-(--border-color) flex flex-col sm:flex-row items-center justify-between text-xs text-(--text-muted) gap-3'>
          <p>{t('footer_copyright')}</p>
          <p className='font-medium'>{t('footer_infra')}</p>
        </div>
      </div>
    </footer>
  );
}
