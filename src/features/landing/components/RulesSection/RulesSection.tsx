'use client';

import { useTranslation } from 'react-i18next';
import { Clock, RefreshCw, Users, Wallet } from 'lucide-react';

export function RulesSection() {
  const { t } = useTranslation(['landing', 'home']);

  const rules = [
    {
      icon: Users,
      badge: t('rule_quota_badge'),
      title: t('home:list_capacity'),
      description: t('home:list_capacity_description'),
      tone: 'bg-(--light-primary) text-(--primary)',
    },
    {
      icon: Clock,
      badge: t('rule_deadline_badge'),
      title: t('home:thirty_day_golden_period'),
      description: t('home:thirty_day_golden_period_description'),
      tone: 'bg-amber-50 text-amber-700',
    },
    {
      icon: RefreshCw,
      badge: t('rule_cycle_badge'),
      title: t('home:how_to_refer_more'),
      description: t('home:how_to_refer_more_description'),
      tone: 'bg-(--light-primary) text-(--secondary-green)',
    },
    {
      icon: Wallet,
      badge: t('rule_settlement_badge'),
      title: t('home:income_withdrawal'),
      description: t('home:income_withdrawal_description'),
      tone: 'bg-(--light-primary) text-(--primary)',
    },
  ];

  return (
    <section
      id='rules'
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24'
    >
      <div className='text-center max-w-xl mx-auto mb-12'>
        <span className='text-(--primary) text-xs font-bold uppercase tracking-wider block mb-2'>
          {t('rules_eyebrow')}
        </span>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-(--text-black) mb-3'>
          {t('rules_title')}
        </h2>
        <p className='text-sm text-(--second-text-color)'>
          {t('rules_subtitle')}
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {rules.map((rule) => (
          <div
            key={rule.title}
            className='bg-(--surface) rounded-2xl p-6 border border-(--border-color) shadow-sm flex flex-col text-right'
          >
            <div className='flex items-center justify-between mb-4'>
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${rule.tone}`}
              >
                <rule.icon className='w-5 h-5' />
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${rule.tone}`}
              >
                {rule.badge}
              </span>
            </div>
            <h4 className='text-base font-bold text-(--text-black) mb-2'>
              {rule.title}
            </h4>
            <p className='text-xs sm:text-sm text-(--second-text-color) leading-relaxed'>
              {rule.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
