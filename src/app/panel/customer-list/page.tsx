'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateObject } from 'react-multi-date-picker';

import {
  Button,
  ContentStateWrapper,
  Header,
  ListFilter,
  Paginate,
  ResponsiveModal,
} from '@/shareComponent';

import {
  customerIntroducerQueryApi,
  customerIntroducerRemoveApi,
  CustomerIntroductionForm,
  CustomerListTable,
  ResponsiveCustomerListTable,
} from '@/features';
import { CustomerIntroducerQueryResponse } from '@/features/CustomerList/types';
import { ISelectOption } from '@/shareComponent/lib/ListFilter/types';

const MAX_CUSTOMER_INTRODUCTIONS = 20;
const PAGE_SIZE_OPTIONS = [10, 20, 30, 50];

const CustomerList = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<CustomerIntroducerQueryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [addCustomerModal, setAddCustomerModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState(0);
  const [remainingCapacity, setRemainingCapacity] = useState(MAX_CUSTOMER_INTRODUCTIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState<DateObject | null>(null);
  const [toDate, setToDate] = useState<DateObject | null>(null);
  const [statuses, setStatuses] = useState<ISelectOption[]>([]);
    const [showRemoveButton, setShowRemoveButton] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: '',
    fromDate: '',
    toDate: '',
    statuses: [] as number[],
  });

  const formatDateForApi = (date: DateObject | null) => {
    if (!date) return '';
    return date.toDate().toISOString().split('T')[0];
  };

  const hasSelectedFilter =
    searchTerm.trim() !== '' ||
    fromDate !== null ||
    toDate !== null ||
    (activeTab === 1 && statuses.length > 0);

  const getCustomers = useCallback(async () => {
    try {
      const response = await customerIntroducerQueryApi({
        pageNumber: currentPage,
        pageSize: itemsPerPage,
        ...(appliedFilters.searchTerm && {
          searchTerm: appliedFilters.searchTerm,
        }),
        ...(appliedFilters.fromDate && {
          fromDate: appliedFilters.fromDate,
        }),
        ...(appliedFilters.toDate && {
          toDate: appliedFilters.toDate,
        }),
        ...(activeTab === 1 && appliedFilters.statuses.length > 0 && {
          statuses: appliedFilters.statuses,
        }),
      });
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, itemsPerPage, activeTab, appliedFilters]);

  const getRemainingCapacity = useCallback(async () => {
    try {
      const response = await customerIntroducerQueryApi({
        pageNumber: 1,
        pageSize: 1,
        statuses: [0],
      });
      const usedCapacity = response.totalCount;
      setRemainingCapacity(Math.max(MAX_CUSTOMER_INTRODUCTIONS - usedCapacity, 0));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        await Promise.all([
          getCustomers(),
          getRemainingCapacity(),
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [getCustomers, getRemainingCapacity]);

  const handleFilter = () => {
    setShowRemoveButton(true);
    setCurrentPage(1);
    setAppliedFilters({
      searchTerm: searchTerm.trim(),
      fromDate: formatDateForApi(fromDate),
      toDate: formatDateForApi(toDate),
      statuses: activeTab === 1 ? statuses.map((item) => Number(item.value)) : [],
    });
  };

  const handleRemoveFilter = () => {
    setSearchTerm('');
    setFromDate(null);
    setToDate(null);
    setStatuses([]);
    setCurrentPage(1);
    setAppliedFilters({
      searchTerm: '',
      fromDate: '',
      toDate: '',
      statuses: [],
    });
    setShowRemoveButton(false);
  };

  const handleTabChange = (tab: number) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setCurrentPage(1);
    setData(null);
    setSearchTerm('');
    setFromDate(null);
    setToDate(null);
    setStatuses([]);
    setAppliedFilters({
      searchTerm: '',
      fromDate: '',
      toDate: '',
      statuses: [],
    });
  };

  const handlePreviousPage = () => {
    if (data?.hasPreviousPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (data?.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (count: number) => {
    if (count === itemsPerPage) return;
    setItemsPerPage(count);
    setCurrentPage(1);
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleteLoading(true);
      await customerIntroducerRemoveApi({ id });
      await Promise.all([getCustomers(), getRemainingCapacity()]);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleOpenAddCustomerModal = () => {
    setAddCustomerModal(true);
  };

  const handleExportExcel = () => {};

  const totalPages = data?.totalPages ?? 1;
  const hasData = Boolean(data?.items?.length);

  const paymentStatusOptions: ISelectOption[] = [
    { label: 'فعال', value: '0' },
    { label: 'تکمیل شده', value: '1' },
    { label: 'رد شده', value: '2' },
  ];

  return (
    <ContentStateWrapper loading={loading} loadingText={t('home:page_loading')}>
      <Header
        name='customerlist'
        title={t('customerList:customer_list')}
        subTitle=''
        onExport={handleExportExcel}
      />

      <div className='p-4 md:p-6'>
        <div className='mb-6 border-b border-(--border-color)'>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={() => handleTabChange(0)}
              className={`rounded-t-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeTab === 0 ? 'bg-(--primary) text-white shadow-sm' : ''
              }`}
            >
              {t('customerList:introduced_customers')}
            </button>

            <button
              type='button'
              onClick={() => handleTabChange(1)}
              className={`rounded-t-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeTab === 1 ? 'bg-(--primary) text-white shadow-sm' : ''
              }`}
            >
              {t('customerList:customer_status')}
            </button>
          </div>
        </div>

        {activeTab === 0 && (
          <div className='mb-5 flex flex-col items-center justify-between rounded-xl border border-(--border-color) bg-(--surface) px-4 py-3 md:flex-row'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='text-sm'>
                  {t('customerList:remaining_introduction_capacity')}
                </span>
                <span
                  className={`text-base font-bold ${
                    remainingCapacity === 0 ? 'text-red-500' : 'text-(--primary)'
                  }`}
                >
                  {remainingCapacity}
                </span>
                <span className='text-sm'>نفر</span>
              </div>
              <span className='pr-2 text-xs'>از {MAX_CUSTOMER_INTRODUCTIONS} نفر</span>
            </div>

            <Button
              onClick={handleOpenAddCustomerModal}
              disabled={remainingCapacity === 0}
              className='mt-2 md:mt-0'
            >
              {t('customerList:new_customer_introduction')}
            </Button>
          </div>
        )}

        <div className='mb-5 rounded-xl border border-(--border-color) bg-(--surface) p-4'>
          <ListFilter
            name='customerList'
            referenceNumber={searchTerm}
            setReferenceNumber={(value) => setSearchTerm(value ?? '')}
            showTracking={true}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            showFromDate={true}
            showPaymentStatus={activeTab === 1}
            paymentStatuses={statuses}
            setPaymentStatuses={setStatuses}
            paymentStatusOptions={paymentStatusOptions}
            showCustomer={false}
            showMerchant={false}
            showTransactionType={false}
            showCreditType={false}
            showPlane={false}
            showAmountRange={false}
            showAccount={false}
            handleFilter={handleFilter}
            handleRemoveFilter={handleRemoveFilter}
            showFromPaymentDate={false}
            hasSelectedFilter={hasSelectedFilter}
            showRemoveButton={showRemoveButton}
          />
        </div>

        {!hasData ? (
          <div className='mt-10 text-center'>{t('home:empty')}</div>
        ) : (
          <>
            <CustomerListTable
              data={data!.items}
              currentPage={currentPage}
              pageSize={itemsPerPage}
              onDelete={handleDelete}
              deleteLoading={deleteLoading}
              activeTab={activeTab}
            />

            <ResponsiveCustomerListTable
              data={data!.items}
              currentPage={currentPage}
              pageSize={itemsPerPage}
              onDelete={handleDelete}
              deleteLoading={deleteLoading}
              activeTab={activeTab}
            />

            <div className='relative my-5 flex flex-col items-center gap-4 md:flex-row'>
              <div className='ml-auto flex items-center gap-2'>
                <span className='text-sm text-gray-500'>نمایش:</span>
                {PAGE_SIZE_OPTIONS.map((count) => {
                  const isDisabled = (data?.totalCount ?? 0) < count;
                  const isActive = itemsPerPage === count;

                  return (
                    <button
                      key={count}
                      type='button'
                      disabled={isDisabled}
                      onClick={() => handlePageSizeChange(count)}
                      className={`rounded-md px-2.5 py-1.5 text-sm transition-all duration-200 ${
                        isActive
                          ? 'bg-(--primary) font-bold text-white'
                          : isDisabled
                            ? 'cursor-not-allowed text-gray-300'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-(--primary)'
                      }`}
                    >
                      {count}
                    </button>
                  );
                })}
              </div>

              <div className='relative left-1/2 w-full -translate-x-1/2 md:absolute md:w-auto'>
                <Paginate
                  page={data!.pageNumber}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePreviousPage={handlePreviousPage}
                  handleNextPage={handleNextPage}
                  handlePageClick={handlePageClick}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <ResponsiveModal
        isOpen={addCustomerModal}
        title={t('customerList:new_customer_introduction')}
        onClose={() => setAddCustomerModal(false)}
      >
        <CustomerIntroductionForm name='addCustomer' />
      </ResponsiveModal>
    </ContentStateWrapper>
  );
};

export default CustomerList;