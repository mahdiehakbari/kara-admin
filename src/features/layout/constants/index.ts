import i18n from '@/i18n';
import {
  BarChart3,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Stethoscope,
  Users,
  Wallet,
  ClipboardPlus,
  ReceiptText,
  BadgeDollarSign,
  Handshake,
  BookOpenText,
  ArrowLeftRight,
  UserPlus,
  UsersRound,
  GitPullRequestArrow,
  Workflow,
  Share2,
} from 'lucide-react';

export const getDentistrySideBar = () => [
  {
    label: i18n.t('sidebar:create_merchant'),
    href: 'panel/dentistDefinition',
    icon: Stethoscope,
  },
  {
    label: i18n.t('dental-society:request_list'),
    href: 'panel/requestLists',
    icon: ClipboardList,
  },
  {
    label: i18n.t('dental-society:list_requests_contract'),
    href: 'panel/contractChangeRequests',
    icon: ClipboardList,
  },
  {
    label: i18n.t('sidebar:merchant_list'),
    href: 'panel/listOfDentists',
    icon: Users,
  },
];
export const getDentistrySideBarItems = () => [
  {
    label: i18n.t('sidebar:customer_definition'),
    href: '/panel/customer-introduction',
    icon: UserPlus,
  },
  {
    label: i18n.t('sidebar:customer_status_list'),
    href: '/panel/customer-list',
    icon: UsersRound,
  },
  {
    label: i18n.t('sidebar:process_receiving'),
    href: '/panel/how-to-get-credit',
    icon: Workflow,
  },
  {
    label: i18n.t('sidebar:social_media'),
    href: '/panel/social-media-content',
    icon: Share2,
  },
];

export const getFinancialSideBarItems = () => [
  {
    href: 'panel/',
    icon: LayoutDashboard,
    label: i18n.t('dashboard:dashboard'),
  },
  {
    href: 'panel/borrowersInstallmentsFinancial',
    icon: CreditCard,
    label: i18n.t('dashboard:loanInstallmentManagement'),
  },
  {
    href: 'panel/financialSettlement',
    icon: Wallet,
    label: i18n.t('dashboard:merchantSettlementManagement'),
  },
  {
    href: 'panel/financialTransactionList',
    icon: BarChart3,
    label: i18n.t('dashboard:financialTransactionsReport'),
  },
  {
    href: 'panel/AccountingReport',
    icon: ReceiptText,
    label: i18n.t('sidebar:accounting_reports'),
  },
];

export const getSideBarItems = () => [
  {
    label: i18n.t('dashboard:borrower_installments'),
    path: 'panel/reports/installment',
    icon: BadgeDollarSign,
  },
  {
    label: i18n.t('dashboard:merchantSettlementManagement'),
    path: 'panel/financialSettlement',
    icon: Handshake,
  },
  {
    label: i18n.t('dashboard:financialTransactionsReport'),
    path: 'panel/financialTransactionList',
    icon: ArrowLeftRight,
  },
  {
    label: i18n.t('sidebar:accounting_reports'),
    path: 'panel/AccountingReport',
    icon: BookOpenText,
  },
  // {
  //   label: i18n.t('dashboard:customer_management'),
  //   path: 'panel/customerManagement',
  //   icon: '/assets/icons/people.svg',
  // },
];

