'use client';

import { useTranslation } from 'react-i18next';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';
import LoginForm from '@/features/Auth/LoginForm';
import CustomerIntroductionForm from '@/features/CustomerIntroduction/CustomerIntroductionForm';

export function QuickInvite() {
  const { t } = useTranslation(['landing', 'home']);

  return (
    <section
      id='quick-invite'
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24'
    >
      <div className='bg-(--surface) rounded-3xl border-2 border-(--primary) shadow-lg p-8 sm:p-12 text-right relative overflow-hidden'>
        <div className='max-w-3xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--light-primary) text-(--primary) text-xs font-bold mb-4'>
            <Rocket className='w-3.5 h-3.5' />
            <span>{t('invite_eyebrow')}</span>
          </div>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-black text-(--text-black) mb-4'>
            {t('invite_title')}
          </h2>
          <p className='text-sm sm:text-base text-(--second-text-color) mb-8 max-w-xl mx-auto leading-relaxed'>
            {t('home:footer_cta')} {t('home:footer_cta_end')}
          </p>

         <CustomerIntroductionForm/>

          <div className='flex flex-wrap items-center justify-center gap-6 text-xs text-(--text-muted) mt-8 pt-4 border-t border-(--border-color)'>
            <div className='flex items-center gap-1.5'>
              <ShieldCheck className='w-4 h-4 text-(--secondary-green)' />
              <span>{t('invite_trust_security')}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Zap className='w-4 h-4 text-(--primary)' />
              <span>{t('invite_trust_fee')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
