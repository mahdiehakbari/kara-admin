import i18n from '@/i18n';
import {
  BarChart3,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Stethoscope,
  Users,
  Wallet,
  ReceiptText,
  BadgeDollarSign,
  Handshake,
  BookOpenText,
  ArrowLeftRight,
  UserPlus,
  UsersRound,
  Workflow,
  Share2,
  House,
  Award,
  ListChecks,
  Calculator,
  Gavel,
  Headphones,
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
];

export const NAV_ITEMS = [
  {
    key: 'nav_home',
    href: '/',
    icon: House,
    highlighted: false,
    translationNamespace: 'landing',
  },

  {
    key: 'process_receiving',
    href: '/how-to-get-credit',
    icon: Workflow,
    highlighted: false,
    translationNamespace: 'sidebar',
  },
  {
    key: 'social_media',
    href: '/social-media-content',
    icon: Share2,
    highlighted: true,
    translationNamespace: 'sidebar',
  },
  // {
  //   key: 'nav_rules',
  //   href: '/rules',
  //   icon: Gavel,
  //   highlighted: false,
  //   translationNamespace: 'landing',
  // },
  {
    key: 'nav_contact',
    href: '/contact-us',
    icon: Headphones,
    highlighted: false,
    translationNamespace: 'landing',
  },
] as const;