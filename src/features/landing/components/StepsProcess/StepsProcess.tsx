'use client';

import { useTranslation } from 'react-i18next';
import { Clock, CreditCard, Smartphone, Wallet, Zap } from 'lucide-react';

export function StepsProcess() {
  const { t } = useTranslation(['landing', 'home']);

  const steps = [
    {
      number: '۱',
      icon: Smartphone,
      meta: t('landing:step_one_meta'),
      metaIcon: Clock,
      title: t('home:step_one'),
      description: t('home:step_one_description'),
      accent: 'bg-(--primary)',
    },
    {
      number: '۲',
      icon: CreditCard,
      meta: t('landing:step_two_meta'),
      metaIcon: Zap,
      title: t('home:step_two'),
      description: t('home:step_two_description'),
      accent: 'bg-(--primary)',
    },
    {
      number: '۳',
      icon: Wallet,
      meta: t('landing:step_three_meta'),
      metaIcon: Zap,
      title: t('home:step_three'),
      description: t('home:step_three_description'),
      accent: 'bg-(--secondary-green)',
      highlight: true,
    },
  ];

  return (
    <section
      id='steps'
      className='w-full bg-(--bg-gray-light) border-y border-(--border-color) py-16 lg:py-20 scroll-mt-24'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-14'>
          <span className='text-(--primary) text-xs font-bold uppercase tracking-wider block mb-2'>
            {t('landing:steps_eyebrow')}
          </span>
          <h2 className='text-2xl sm:text-3xl font-extrabold text-(--text-black) mb-3'>
            {t('landing:steps_title')}
          </h2>
          <p className='text-sm sm:text-base text-(--second-text-color)'>
            {t('landing:steps_subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {steps.map((step) => (
            <div
              key={step.number}
              className={`bg-(--surface) rounded-2xl p-7 shadow-sm flex flex-col text-right relative ${
                step.highlight
                  ? 'border-2 border-(--secondary-green)'
                  : 'border border-(--border-color)'
              }`}
            >
              <div className='flex items-center justify-between mb-5'>
                <span
                  className={`w-10 h-10 rounded-xl text-white font-black text-lg flex items-center justify-center ${step.accent}`}
                >
                  {step.number}
                </span>
                <div className='w-10 h-10 rounded-xl bg-(--bg-gray-light) text-(--second-text-color) flex items-center justify-center border border-(--border-color)'>
                  <step.icon className='w-5 h-5' />
                </div>
              </div>
              <div
                className={`inline-flex items-center gap-1 text-xs font-semibold mb-2 ${
                  step.highlight
                    ? 'text-(--secondary-green)'
                    : 'text-(--text-muted)'
                }`}
              >
                <step.metaIcon className='w-3.5 h-3.5' />
                <span>{step.meta}</span>
              </div>
              <h3 className='text-lg font-bold text-(--text-black) mb-2'>
                {step.title}
              </h3>
              <p className='text-sm text-(--second-text-color) leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
