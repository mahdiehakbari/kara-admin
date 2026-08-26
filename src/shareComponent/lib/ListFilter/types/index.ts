import { DateObject } from 'react-multi-date-picker';
import { TAcceptor } from '../hooks/useFetchAcceptor/types';
import { TMerchant } from '../hooks/useFetchMerchant/types';

export interface ISelectOption {
  label: string;
  value: string;
}

export interface IAcceptorData {
  firstName: string;
  id: string;
  lastName: string;
  nationalId: string;
  phoneNumber: string;
}

export interface IMerchantData {
  phoneNumber: any;
  businessName: string;
  firstName: string;
  id: string;
  lastName: string;
  nationalId: string;
}

export interface IFilteredProps {
  name: string;
  fromDate?: DateObject | null;
  fromPaymentDate?: DateObject | null;
  setFromDate?: (value: DateObject | null) => void;
  setFromPaymentDate?: (value: DateObject | null) => void;
  toPaymentDate?: DateObject | null;
  toDate?: DateObject | null;
  setToDate?: (value: DateObject | null) => void;
  setToPaymentDate?: (value: DateObject | null) => void;
  handleFilter?: () => void;
  placeholderText?: string;
  handleRemoveFilter?: () => void;
  setReferenceNumber?: (value: string | null) => void;
  referenceNumber?: string | null;
  acceptorName?: ISelectOption[];
  setAcceptorName?: (value: ISelectOption[]) => void;
  acceptorData?: IAcceptorData[];
  showFromDate: boolean;
  showFromPaymentDate: boolean;
  merchantName?: ISelectOption[];
  setMerchantName?: (val: ISelectOption[]) => void;
  merchantData?: IMerchantData[];
  showMerchant?: boolean;
  showTracking?: boolean;
  showCustomer?: boolean;
  showRemoveButton: boolean;
  showTransactionType: boolean;
  transactionTypes?: ISelectOption[];
  setTransactionTypes?: (value: ISelectOption[]) => void;
  transactionTypeOptions?: ISelectOption[];
  showCreditType: boolean;
  creditLineTypes?: ISelectOption[];
  setCreditLineTypes?: (value: ISelectOption[]) => void;
  creditLineTypeOptions?: any;
  showPlane?: boolean;
  planTypeOptions?: ISelectOption[];
  planTypes?: ISelectOption[];
  showAccount?: boolean;
  accountTypes?: ISelectOption[];
  setAccountTypes?: (value: ISelectOption[]) => void;
  accountTypeOptions?: ISelectOption[];
  setPlanTypes?: (value: ISelectOption[]) => void;
  showPaymentStatus?: boolean;
  paymentStatusOptions?: ISelectOption[];
  paymentStatuses?: ISelectOption[];
  setPaymentStatuses?: (value: ISelectOption[]) => void;
  showAmountRange?: boolean;
  minAmount?: string;
  maxAmount?: string;
  setMinAmount?: (value: string | null) => void;
  setMaxAmount?: (value: string | null) => void;
}
