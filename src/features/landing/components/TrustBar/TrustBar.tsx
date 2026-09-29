'use client';

import { useTranslation } from 'react-i18next';
import { Landmark, Network, ShieldCheck, Stethoscope } from 'lucide-react';

export function TrustBar() {
  const { t } = useTranslation('landing');

  const partners = [
    {
      icon: Landmark,
      name: t('trust_bank_name'),
      desc: t('trust_bank_desc'),
    },
    {
      icon: Stethoscope,
      name: t('trust_society_name'),
      desc: t('trust_society_desc'),
    },
    {
      icon: Network,
      name: t('trust_network_name'),
      desc: t('trust_network_desc'),
    },
  ];

  return (
    <section className='w-full bg-(--surface) border-y border-(--border-color) py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-3 text-right'>
            <div className='w-10 h-10 rounded-xl bg-(--light-primary) text-(--primary) flex items-center justify-center border border-(--primary-border)/30 shrink-0'>
              <ShieldCheck className='w-5 h-5' />
            </div>
            <div>
              <span className='text-sm font-bold text-(--text-black) block'>
                {t('trust_title')}
              </span>
              <span className='text-xs text-(--text-muted) font-medium'>
                {t('trust_subtitle')}
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto'>
            {partners.map((partner) => (
              <div
                key={partner.name}
                className='flex items-center gap-3 px-4 py-2.5 rounded-xl bg-(--bg-gray-light) border border-(--border-color)'
              >
                <partner.icon className='w-5 h-5 text-(--primary)' />
                <div className='flex flex-col text-right'>
                  <span className='text-xs font-bold text-(--text-black)'>
                    {partner.name}
                  </span>
                  <span className='text-[11px] text-(--text-muted)'>
                    {partner.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
