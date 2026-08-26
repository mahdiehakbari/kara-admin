'use client';

import { useTranslation } from 'react-i18next';
import { Trash2 } from 'lucide-react';
import { ResponsiveCustomerListTableProps } from './types';
import { SpinnerDiv, toPersianNumber } from '@/shareComponent';
import { getStatusStyle } from './constants';

const ResponsiveCustomerListTable = ({
  data,
  currentPage,
  pageSize,
  onDelete,
  deleteLoading,
  activeTab,
}: ResponsiveCustomerListTableProps) => {
  const { t } = useTranslation();

  return (
    <div className='md:hidden flex-1 overflow-y-auto'>
      <div className='space-y-4'>
        {data?.map((customer, index) => (
          <div
            key={customer.id}
            className='rounded-xl border border-(--border-color) shadow-sm p-4 bg-(--surface)'
          >
          
            <div className='flex items-center justify-between mb-3'>
              <div className='flex items-center gap-3'>
                <div className='text-xs '>
                  {t('customerList:row')}
                </div>

                <div className='text-sm font-medium'>
                  {toPersianNumber(
                    (
                      index +
                      1 +
                      (currentPage - 1) * pageSize
                    ).toString(),
                  )}
                </div>
              </div>

             
              <button
                type='button'
                onClick={() => onDelete(customer.id)}
                title={t('customerList:delete')}
                className='p-2 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors'
              >
              {deleteLoading==true?<SpinnerDiv/>:<Trash2 size={18} />}
              </button>
            </div>

            <div className='space-y-3 border-t border-(--border-color) pt-3'>
             
              <div className='flex justify-between items-center gap-4'>
                <span className='text-xs'>
                  {t('customerList:first_name')}
                </span>

                <span className='text-sm'>
                  {customer.firstName || '-'}
                </span>
              </div>

              
              <div className='flex justify-between items-center gap-4'>
                <span className='text-xs'>
                  {t('customerList:last_name')}
                </span>

                <span className='text-sm'>
                  {customer.lastName || '-'}
                </span>
              </div>

              
              <div className='flex justify-between items-center gap-4'>
                <span className='text-xs'>
                  {t('customerList:mobile')}
                </span>

                <span className='text-sm'>
                  {customer.phoneNumber
                    ? toPersianNumber(customer.phoneNumber)
                    : '-'}
                </span>
              </div>

              
              <div className='flex justify-between items-center gap-4'>
                <span className='text-xs'>
                  {t('customerList:introduction_date')}
                </span>

                <span className='text-sm'>
                  {customer.persianCreatedAt
                    ? toPersianNumber(customer.persianCreatedAt)
                    : '-'}
                </span>
              </div>

              
              <div className='flex justify-between items-center gap-4'>
                <span className='text-xs'>
                  {t('customerList:expiration_date')}
                </span>

                <span className='text-sm'>
                  {customer.persianExpiresAt
                    ? toPersianNumber(customer.persianExpiresAt)
                    : '-'}
                </span>
              </div>

         
           <div className="flex items-center justify-between gap-4">
                <span className="text-xs">
                  {t('customerList:status')}
                </span>

                {(() => {
                  const status = getStatusStyle(customer.status);

                  return (
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                    >
                      {status.label}
                    </span>
                  );
                })()}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCustomerListTable;