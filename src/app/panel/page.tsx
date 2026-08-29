'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Panel = () => {
  const { t: i18n } = useTranslation('home');

  return (
    <div className='min-h-screen bg-(--background) p-4 md:p-8' dir='rtl'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <div className='flex justify-center'>
          <img
            src='/assets/icons/panel-banner.jpeg'
            alt='panel-banner.jpeg'
            className='h-auto max-w-full rounded-2xl'
          />
        </div>

        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-l from-blue-700 via-indigo-700 to-sky-600 p-8 md:p-10 text-white shadow-lg shadow-blue-500/10'>
          <div className='relative z-10 space-y-4'>
            <span className='inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md border border-white/20'>
              {i18n('national_dentalit_plan')}
            </span>

            <h1 className='text-2xl md:text-3xl font-extrabold leading-snug'>
              {i18n('golden_opportunity_income')}
            </h1>

            <p className='text-blue-100 text-sm md:text-base leading-relaxed max-w-3xl'>
              {i18n('welcome_dentalit_referral_club')}
            </p>
          </div>

          <div className='absolute -left-10 -bottom-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none' />
        </div>

        {/* What is Dentalit */}
        <div className='bg-(--surface) rounded-2xl p-6 md:p-8 border border-(--border-color) shadow-sm space-y-3'>
          <h2 className='text-lg font-bold flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-(--primary) inline-block'></span>
            {i18n('what_is_dentalit')}
          </h2>

          <p className='text-(--text-muted) text-sm md:text-base leading-relaxed text-justify'>
            {i18n('dentalit_description')}{' '}
            <Link
              href='/panel/how-to-get-credit'
              className='text-(--primary) underline px-1'
            >
              {i18n('credit_guide')}
            </Link>{' '}
            {i18n('credit_guide_suffix')}
          </p>
        </div>

        {/* Exciting News */}
        <div className='bg-sky-50/80 border border-sky-100 rounded-2xl p-6 space-y-2'>
          <h3 className='text-base font-bold text-sky-950 flex items-center gap-2'>
            {i18n('exciting_news')}
          </h3>

          <p className='text-sky-900/80 text-sm md:text-base leading-relaxed text-justify'>
            {i18n('exciting_news_description')}
          </p>
        </div>

        {/* Financial Benefits & Steps */}
        <div className='bg-(--surface) rounded-2xl p-6 md:p-8 border border-(--border-color) shadow-sm space-y-5'>
          <div className='space-y-2'>
            <h2 className='text-lg font-bold'>{i18n('financial_benefits')}</h2>

            <p className='text-(--text-muted) text-sm md:text-base leading-relaxed'>
              {i18n('financial_benefits_description')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-2'>
              <span className='text-xs font-bold text-(--primary) bg-blue-50 px-2 py-0.5 rounded'>
                {i18n('step_one')}
              </span>

              <p className='text-(--text-muted) text-sm leading-relaxed mt-2'>
                {i18n('step_one_description')}
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-2'>
              <span className='text-xs font-bold text-(--primary) bg-blue-50 px-2 py-0.5 rounded'>
                {i18n('step_two')}
              </span>

              <p className='text-(--text-muted) text-sm leading-relaxed mt-2'>
                {i18n('step_two_description')}
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-2'>
              <span className='text-xs font-bold text-(--primary) bg-blue-50 px-2 py-0.5 rounded'>
                {i18n('step_three')}
              </span>

              <p className='text-(--text-muted) text-sm leading-relaxed mt-2'>
                {i18n('step_three_description')}
              </p>
            </div>
          </div>
        </div>

        {/* 1% Reward Highlight Box */}
        <div className='bg-amber-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 space-y-4'>
          <div className='space-y-1'>
            <h2 className='text-lg font-black text-amber-950'>
              {i18n('exceptional_opportunity')}
            </h2>

            <p className='text-amber-900/90 text-sm md:text-base leading-relaxed'>
              {i18n('reward_description')}
            </p>
          </div>

          <div className='p-4 rounded-xl bg-white/70 border border-amber-200/50 space-y-1.5'>
            <strong className='text-amber-950 font-bold text-sm block'>
              {i18n('amazing_example')}
            </strong>

            <p className='text-amber-900/80 text-sm leading-relaxed'>
              {i18n('amazing_example_description')}
            </p>
          </div>

          <div className='p-4 rounded-xl bg-white/70 border border-amber-200/50 space-y-1.5'>
            <strong className='text-amber-950 font-bold text-sm block'>
              {i18n('important_note')}
            </strong>

            <p className='text-amber-900/80 text-sm leading-relaxed'>
              {i18n('important_note_description')}
            </p>
          </div>
        </div>

        {/* Rules Section */}
        <div className='bg-(--surface) rounded-2xl p-6 md:p-8 border border-(--border-color) shadow-sm space-y-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-bold'>{i18n('income_rules')}</h2>

            <p className='text-slate-500 text-sm'>
              {i18n('income_rules_description')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold text-sm'>{i18n('list_capacity')}</h4>

              <p className='text-(--text-muted) text-sm leading-relaxed'>
                {i18n('list_capacity_description')}
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold text-sm'>
                {i18n('thirty_day_golden_period')}
              </h4>

              <p className='text-(--text-muted) text-sm leading-relaxed'>
                {i18n('thirty_day_golden_period_description')}
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold text-sm'>{i18n('how_to_refer_more')}</h4>

              <p className='text-(--text-muted) text-sm leading-relaxed'>
                {i18n('how_to_refer_more_description')}
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold text-sm'>{i18n('income_withdrawal')}</h4>

              <p className='text-(--text-muted) text-sm leading-relaxed'>
                {i18n('income_withdrawal_description')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Call-to-Action Text */}
        <div className='text-center py-4 bg-(--surface) rounded-2xl border border-(--border-color) p-6'>
          <p className='text-(--text-primary) font-semibold text-sm md:text-base leading-relaxed'>
            {i18n('footer_cta')}{' '}
            <Link
              href='/panel/customer-introduction'
              className='text-(--primary) underline'
            >
              {i18n('register')}
            </Link>{' '}
            {i18n('footer_cta_end')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
