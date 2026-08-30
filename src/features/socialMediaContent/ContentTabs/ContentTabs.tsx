'use client';

import { useTranslation } from 'react-i18next';
import { tabs } from '../constants';
import { Props } from '../types';
import { Button } from '@/shareComponent';

export default function ContentTabs({ active, onChange }: Props) {
  const { t } = useTranslation('social_media');

  return (
    <div className='w-full max-w-full overflow-hidden mb-5'>
      <div
        className='
          w-full
          max-w-full
          overflow-x-auto
          overflow-y-hidden
          pb-2
        '
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
        }}
      >
        <div
          className='
            flex
            gap-3
            w-max
            min-w-max
            px-1
          '
        >
          {tabs.map(({ id, translationKey, icon: Icon }) => {
            const isActive = active === id;

            return (
              <Button
                key={id}
                type='button'
                variant='outline'
                size='md'
                onClick={() => onChange(id)}
                className={`
                  !w-auto
                  !h-auto
                  !shrink-0
                  gap-2
                  whitespace-nowrap
                  rounded-xl
                  px-4
                  py-3

                  ${
                    isActive
                      ? '!bg-(--primary) !border-(--primary) !text-white'
                      : '!bg-white !border-gray-200 !text-gray-700'
                  }
                `}
              >
                <Icon className='shrink-0 text-lg' />

                <span className='whitespace-nowrap text-sm font-medium'>
                  {t(translationKey)}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
