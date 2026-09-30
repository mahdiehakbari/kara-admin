'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calculator, ShieldCheck, Wallet } from 'lucide-react';
import { Button } from '@/shareComponent';
import { getBullets } from '../constants';
import { useAuthStore } from '@/store/Auth/authStore';
import { useRouter } from 'next/navigation';
import { HeaderLoginModal } from '@/features';
import { useState } from 'react';

export function Hero() {
  const { t } = useTranslation(['landing', 'home']);
  const [isLoginFlowOpen, setIsLoginFlowOpen] = useState(false);
  const bullets = getBullets(t);

  const { isLoggedIn } = useAuthStore();

  const router = useRouter();

  const handleStart = () => {
    if (isLoggedIn) {
      router.push('panel/customer-introduction');
      return;
    }
    setIsLoginFlowOpen(true);
  };



  return (
    <>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-32 lg:pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
          {/* Copy & CTAs */}
          <div className='lg:col-span-7 flex flex-col text-right'>
            <div className='flex flex-wrap items-center gap-3 mb-6'>
              <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--light-primary) border border-(--primary-border)/40 text-(--primary) text-xs font-bold'>
                <span className='w-2 h-2 rounded-full bg-(--secondary-green) animate-pulse' />
                <ShieldCheck className='w-3.5 h-3.5' />
                <span>{t('landing:partnership_badge')}</span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-(--light-primary) border border-(--primary-border)/30 text-(--primary) text-xs font-semibold'>
                <span className='w-2 h-2 rounded-full bg-(--secondary-green) animate-pulse' />
                <ShieldCheck className='w-3.5 h-3.5' />
                <span>{t('landing:hero_no_guarantor_badge')}</span>
              </div>
            </div>

            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-(--text-black) tracking-tight leading-[1.35] mb-5'>
              {t('landing:hero_title_start')}{' '}
              <span className='text-(--primary) relative inline-block'>
                {t('landing:hero_title_highlight')}
              </span>
            </h1>

            <p className='text-base sm:text-lg text-(--second-text-color) leading-relaxed max-w-2xl mb-8'>
              {t('home:welcome_dentalit_referral_club')}
            </p>

            <div className='flex flex-wrap items-center gap-4 mb-8'>
              <Button
                onClick={handleStart}
                className='w-fit h-13.5 px-8 py-3.5 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-white font-bold text-base shadow-md shadow-(--primary)/20 hover:shadow-lg transition-all flex items-center gap-2 group'
              >
                <span>{t('landing:hero_start_cta')}</span>
                <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              </Button>
              <a
                href='#earning-calc'
                className='px-6 py-3.5 rounded-xl bg-(--surface) hover:bg-(--bg-gray-light) text-(--second-text-color) border border-(--border-color) font-bold text-base transition-colors flex items-center gap-2'
              >
                <Calculator className='w-5 h-5 text-(--primary)' />
                <span>{t('landing:hero_calc_cta')}</span>
              </a>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-(--border-color)'>
              {bullets.map((bullet) => (
                <div key={bullet.label} className='flex items-center gap-2.5'>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${bullet.tone}`}
                  >
                    <bullet.icon className='w-4 h-4' />
                  </div>
                  <div className='text-right'>
                    <span className='text-xs text-(--text-muted) block'>
                      {bullet.label}
                    </span>
                    <span className='text-sm font-bold text-(--text-black)'>
                      {bullet.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className='lg:col-span-5 relative flex justify-center'>
            <div className='w-full max-w-md bg-(--surface) p-3 rounded-2xl border border-(--border-color) shadow-md'>
              <div className='relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-(--light-primary) flex items-center justify-center'>
                <Image
                  src='/assets/icons/screen.png'
                  alt={t('landing:brand_name')}
                  fill
                  className=' object-cover'
                />

                <div className='absolute top-4 right-4 bg-(--surface)/95 text-(--text-black) px-3.5 py-1.5 rounded-lg shadow-sm border border-(--border-color) flex items-center gap-2 text-xs font-bold'>
                  <span className='w-2 h-2 rounded-full bg-(--secondary-green)' />
                  <span>{t('landing:hero_card_badge')}</span>
                </div>

                <div className='absolute bottom-4 left-4 right-4 space-y-2'>
                  <div className='bg-(--surface)/95 rounded-xl p-3 border border-(--border-color) shadow-md flex items-center justify-between text-right'>
                    <div className='flex items-center gap-2.5'>
                      <div className='w-9 h-9 rounded-lg bg-(--light-primary) text-(--primary) flex items-center justify-center'>
                        <Wallet className='w-4 h-4' />
                      </div>
                      <div>
                        <span className='text-xs text-(--text-muted) block font-medium'>
                          {t('landing:hero_card_credit_cap_label')}
                        </span>
                        <span className='text-sm font-black text-(--text-black)'>
                          {t('landing:hero_card_credit_cap_value')}
                        </span>
                      </div>
                    </div>
                    <span className='px-2.5 py-1 rounded bg-(--light-primary) text-(--primary) text-xs font-bold whitespace-nowrap'>
                      {t('landing:hero_card_no_guarantor')}
                    </span>
                  </div>
                  <div className='bg-amber-500 text-slate-950 rounded-xl p-2.5 shadow-md flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <ShieldCheck className='w-4 h-4' />
                      <span className='text-xs font-black'>
                        {t('landing:hero_card_reward_badge')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeaderLoginModal
        name='hero'
        isOpen={isLoginFlowOpen}
        onClose={() => setIsLoginFlowOpen(false)}
      />
    </>
  );
}
