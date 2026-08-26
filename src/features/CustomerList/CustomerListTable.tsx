'use client'
import { Trash2 } from "lucide-react";
import { CustomerListTableProps } from "./types";
import { useTranslation } from "react-i18next";
import { getStatusStyle, getThItems } from "./constants";
import { SpinnerDiv, toPersianNumber } from "@/shareComponent";

const CustomerListTable = ({
  data,
  currentPage,
  pageSize,
  onDelete,
  deleteLoading,
  activeTab
}: CustomerListTableProps) => {
  const { t } = useTranslation();

  return (
    <div className='hidden md:block border border-(--border-color) rounded-xl overflow-hidden max-h-145 bg-(--surface)'>
      <div className='overflow-auto max-h-145'>
        <table className='w-full text-right border-collapse'>
          <thead className='top-0 z-10 border-b border-(--border-color)'>
            <tr>
              {getThItems(activeTab).map((item) => (
                <th
                  key={item.id}
                  className='p-4 text-xs font-medium whitespace-nowrap'
                >
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className='divide-y divide-border-color'>
            {data?.map((customer, index) => (
              <tr key={customer.id}>
                <td className='p-4 text-sm'>
                  {toPersianNumber(
                    (
                      index +
                      1 +
                      (currentPage - 1) * pageSize
                    ).toString()
                  )}
                </td>

                <td className='p-4 text-sm'>
                  {customer.firstName || '-'}
                </td>

                <td className='p-4 text-sm'>
                  {customer.lastName || '-'}
                </td>

                <td className='p-4 text-sm'>
                  {customer.phoneNumber
                    ? toPersianNumber
                    (customer.phoneNumber)
                    : '-'}
                </td>

                <td className='p-4 text-sm'>
                  {customer.persianCreatedAt
                    ? toPersianNumber(customer.persianCreatedAt)
                    : '-'}
                </td>

                <td className='p-4 text-sm'>
                  {customer.persianExpiresAt
                    ? toPersianNumber(customer.persianExpiresAt)
                    : '-'}
                </td>
                {activeTab==1&&    
                <td className="p-4 text-sm">
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
              </td>}
          

               
                <td className='p-4 text-sm'>
                  <button
                    type='button'
                    onClick={() => onDelete(customer.id)}
                    title={t('customerList:delete')}
                    className='p-2 rounded-lg transition-colors hover:bg-red-50 text-red-500 hover:text-red-600'
                  >
                    {deleteLoading==true?<SpinnerDiv/>:<Trash2 size={18} />}
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default CustomerListTable;