'use client';

import { useTranslation } from 'react-i18next';
import { CreditCard, Layers, Sparkles, Zap } from 'lucide-react';

export function BenefitPillars() {
  const { t } = useTranslation(['landing', 'home']);

  return (
    <section
      id='about'
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24'
    >
      <div className='text-center max-w-2xl mx-auto mb-12'>
        <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-(--light-primary) border border-(--primary-border)/30 text-(--primary) text-xs font-bold mb-3'>
          <Sparkles className='w-3.5 h-3.5' />
          <span>{t('landing:pillars_eyebrow')}</span>
        </div>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-(--text-black) mb-3'>
          {t('landing:pillars_title')}
        </h2>
        <p className='text-sm sm:text-base text-(--second-text-color) leading-relaxed'>
          {t('landing:pillars_subtitle')}
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Credit pillar */}
        <div className='bg-(--surface) rounded-2xl p-6 border border-(--border-color) shadow-sm hover:shadow-md transition-shadow flex flex-col text-right'>
          <div className='w-12 h-12 rounded-xl bg-(--light-primary) text-(--primary) border border-(--primary-border)/30 flex items-center justify-center mb-5'>
            <CreditCard className='w-6 h-6' />
          </div>
          <h3 className='text-lg font-bold text-(--text-black) mb-2'>
            {t('landing:pillar_credit_title')}
          </h3>
          <p className='text-sm text-(--second-text-color) leading-relaxed mb-6 flex-grow'>
            {t('home:dentalit_description')}
          </p>
          <div className='pt-4 border-t border-(--border-color) flex items-center gap-2 text-(--primary) text-xs font-bold'>
            <Zap className='w-4 h-4' />
            <span>{t('landing:pillar_credit_footnote')}</span>
          </div>
        </div>

        {/* Reward pillar — highlighted */}
        <div className='bg-(--surface) rounded-2xl p-6 border-2 border-amber-400 shadow-sm hover:shadow-md transition-shadow flex flex-col text-right relative'>
          <div className='flex items-center justify-between mb-5'>
            <div className='w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center'>
              <Sparkles className='w-6 h-6' />
            </div>
            <span className='px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold'>
              {t('landing:pillar_reward_badge')}
            </span>
          </div>
          <h3 className='text-lg font-bold text-(--text-black) mb-2'>
            {t('landing:pillar_reward_title')}
          </h3>
          <p className='text-sm text-(--second-text-color) leading-relaxed mb-6 flex-grow'>
            {t('home:reward_description')} {t('home:amazing_example_description')}
          </p>
          <div className='pt-4 border-t border-amber-100 flex items-center gap-2 text-amber-700 text-xs font-bold'>
            <Zap className='w-4 h-4' />
            <span>{t('landing:pillar_reward_footnote')}</span>
          </div>
        </div>

        {/* Merge credit pillar */}
        <div className='bg-(--surface) rounded-2xl p-6 border border-(--border-color) shadow-sm hover:shadow-md transition-shadow flex flex-col text-right'>
          <div className='w-12 h-12 rounded-xl bg-(--light-primary) text-(--primary) border border-(--primary-border)/30 flex items-center justify-center mb-5'>
            <Layers className='w-6 h-6' />
          </div>
          <h3 className='text-lg font-bold text-(--text-black) mb-2'>
            {t('landing:pillar_merge_title')}
          </h3>
          <p className='text-sm text-(--second-text-color) leading-relaxed mb-6 flex-grow'>
            {t('home:exciting_news_description')}
          </p>
          <div className='pt-4 border-t border-(--border-color) flex items-center gap-2 text-(--primary) text-xs font-bold'>
            <Zap className='w-4 h-4' />
            <span>{t('landing:pillar_merge_footnote')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
