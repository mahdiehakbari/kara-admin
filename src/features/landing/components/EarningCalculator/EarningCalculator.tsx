'use client';

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calculator, PiggyBank } from 'lucide-react';

const REWARD_RATE = 0.01;
const MILLION = 1_000_000;

export function EarningCalculator() {
  const { t } = useTranslation('landing');
  const [patientCount, setPatientCount] = useState(8);
  const [avgCostMillion, setAvgCostMillion] = useState(60);

  const totalVolume = useMemo(
    () => patientCount * avgCostMillion * MILLION,
    [patientCount, avgCostMillion],
  );

  const finalReward = useMemo(
    () => Math.round(totalVolume * REWARD_RATE),
    [totalVolume],
  );

  return (
    <section
      id='earning-calc'
      className='w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-(--bg-gray-light) scroll-mt-24'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center'>
        {/* Controls */}
        <div className='lg:col-span-6 flex flex-col items-start text-right'>
          <span className='text-xs font-bold text-(--primary)'>
            {t('calc_eyebrow')}
          </span>
          <h2 className='text-2xl sm:text-3xl font-extrabold text-(--text-black) mt-1 mb-4'>
            {t('calc_title')}
          </h2>
          <p className='text-sm text-(--second-text-color) leading-relaxed text-justify mb-6'>
            {t('calc_subtitle')}
          </p>

          <div className='w-full space-y-6'>
            {/* Slider 1: patient count */}
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='text-sm font-bold text-(--text-black)'>
                  {t('calc_slider_label')}
                </span>
                <span className='text-lg font-black text-(--primary)'>
                  {patientCount.toLocaleString('fa-IR')}{' '}
                  {t('calc_person_suffix')}
                </span>
              </div>
              <input
                type='range'
                min={1}
                max={40}
                value={patientCount}
                onChange={(event) =>
                  setPatientCount(Number(event.target.value))
                }
                className='w-full h-3 rounded-full appearance-none cursor-pointer accent-(--primary) bg-(--border-color)'
              />
            </div>

            {/* Slider 2: average treatment cost */}
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='text-sm font-bold text-(--text-black)'>
                  {t('calc_cost_slider_label')}
                </span>
                <span className='text-lg font-black text-(--secondary-green)'>
                  {avgCostMillion.toLocaleString('fa-IR')}{' '}
                  {t('calc_million_toman_suffix')}
                </span>
              </div>
              <input
                type='range'
                min={10}
                max={150}
                step={5}
                value={avgCostMillion}
                onChange={(event) =>
                  setAvgCostMillion(Number(event.target.value))
                }
                className='w-full h-3 rounded-full appearance-none cursor-pointer accent-(--secondary-green) bg-(--border-color)'
              />
            </div>
          </div>

          <div className='mt-8 flex items-center gap-3 text-xs text-(--text-muted)'>
            <Calculator className='w-4 h-4 text-(--secondary-green) shrink-0' />
            <span>{t('calc_footnote')}</span>
          </div>
        </div>

        {/* Result card */}
        <div className='lg:col-span-6 flex justify-center'>
          <div className='w-full max-w-md p-8 rounded-3xl bg-(--surface) text-right shadow-[0_24px_45px_-8px_rgba(17,74,159,0.18)]'>
            <div className='flex items-center justify-between pb-4 mb-6'>
              <div className='flex flex-col'>
                <span className='text-xs text-(--text-muted)'>
                  {t('calc_rank_label')}
                </span>
                <span className='text-sm font-bold text-(--primary)'>
                  {t('calc_rank_value')}
                </span>
              </div>
              <div className='w-12 h-12 rounded-full bg-(--light-primary) flex items-center justify-center text-(--primary) shrink-0'>
                <PiggyBank className='w-6 h-6' />
              </div>
            </div>

            <div className='space-y-3'>
              <div className='p-4 rounded-2xl bg-(--bg-gray-light) flex justify-between items-center gap-3'>
                <span className='text-xs text-(--text-muted)'>
                  {t('calc_total_volume_label')}
                </span>
                <span className='text-sm font-bold text-(--text-black) whitespace-nowrap'>
                  {totalVolume.toLocaleString('fa-IR')} تومان
                </span>
              </div>
              <div className='p-4 rounded-2xl bg-(--bg-gray-light) flex justify-between items-center'>
                <span className='text-xs text-(--text-muted)'>
                  {t('calc_rate_label')}
                </span>
                <span className='text-sm font-bold text-(--secondary-green)'>
                  {t('calc_rate_value')}
                </span>
              </div>
            </div>

            <div className='mt-6 p-6 rounded-2xl bg-gradient-to-br from-(--primary) to-(--primary-hover) text-white text-center'>
              <span className='text-xs text-white/80 block'>
                {t('calc_final_label')}
              </span>
              <div className='text-3xl sm:text-4xl font-black my-1 tracking-tight'>
                {finalReward.toLocaleString('fa-IR')} {t('calc_final_unit')}
              </div>
              <span className='text-xs text-white/90'>
                {t('calc_final_note')}
              </span>
            </div>

            <a
              href='#quick-invite'
              className='w-full mt-6 py-3.5 rounded-full bg-(--secondary-green) text-white text-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 transition-all'
            >
              <span>{t('calc_cta')}</span>
              <ArrowLeft className='w-4 h-4' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
