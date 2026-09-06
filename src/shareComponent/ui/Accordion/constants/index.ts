import { TAccordionItemType } from '../types';

export const accordionData: TAccordionItemType[] = [
  // {
  //   title: 'dental_plane:bnpl',
  //   content: 'dental_plane:bnpl_desc',
  // },
  {
    title: 'dental_plane:register_credit',
    content: 'dental_plane:register_credit_des',
    hasLink: true,
  },
  {
    title: 'dental_plane:obtaining_credit',
    content: 'dental_plane:obtaining_credit_desc',
  },
  {
    title: 'dental_plane:credit_repayment',
    content: 'dental_plane:credit_repayment_desc',
    list: [
      'dental_plane:option_one',
      'dental_plane:option_two',
      'dental_plane:option_three',
    ],
  },
  {
    title: 'dental_plane:requirements_receiving_credit',
    content: 'dental_plane:requirements_receiving_credit_desc',
  },
  {
    title: 'dental_plane:repayment',
    content: 'dental_plane:repayment_desc',
  },
  {
    title: 'dental_plane:covered_service',
    content: 'dental_plane:covered_service_desc',
  },
  {
    title: 'dental_plane:service_through_tejarat',
    content: 'dental_plane:service_through_tejarat_desc',
  },
  {
    title: 'dental_plane:increase_extend_credit',
    content: 'dental_plane:increase_extend_credit_desc',
  },
  {
    title: 'dental_plane:wallet',
    content: 'dental_plane:wallet_desc',
  },
  {
    title: 'dental_plane:wallet_balance',
    content: 'dental_plane:wallet_balance_desc',
  },
  {
    title: 'dental_plane:installment_payments',
    content: 'dental_plane:budget_application',
  },
  {
    title: 'dental_plane:cards_used',
    content: 'dental_plane:payment_possible',
  },
  {
    title: 'dental_plane:several_overdue',
    content: 'dental_plane:multiple_overdue',
  },
  {
    title: 'dental_plane:possible_settle',
    content: 'dental_plane:possible_pay',
  },
  {
    title: 'dental_plane:dental_fees',
    content: 'dental_plane:dentalit_involvement',
  },
  {
    title: 'dental_plane:receive_documents',
    content: 'dental_plane:no_documents',
  },
];
