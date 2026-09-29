import { TFunction } from "i18next";
import { Banknote, Clock, CreditCard, RefreshCw, Smartphone, Users, Wallet, Zap } from "lucide-react";

export const getRules = (t: TFunction) => [
    {
      icon: Users,
      badge: t('rule_quota_badge'),
      title: t('home:list_capacity'),
      description: t('home:list_capacity_description'),
      tone: 'bg-(--light-primary) text-(--primary)',
    },
    {
      icon: Clock,
      badge: t('rule_deadline_badge'),
      title: t('home:thirty_day_golden_period'),
      description: t('home:thirty_day_golden_period_description'),
      tone: 'bg-amber-50 text-amber-700',
    },
    {
      icon: RefreshCw,
      badge: t('rule_cycle_badge'),
      title: t('home:how_to_refer_more'),
      description: t('home:how_to_refer_more_description'),
      tone: 'bg-(--light-primary) text-(--secondary-green)',
    },
    {
      icon: Wallet,
      badge: t('rule_settlement_badge'),
      title: t('home:income_withdrawal'),
      description: t('home:income_withdrawal_description'),
      tone: 'bg-(--light-primary) text-(--primary)',
    },
  ];


   export  const getSteps = (t: TFunction) => [
    {
      number: '۱',
      icon: Smartphone,
      meta: t('landing:step_one_meta'),
      metaIcon: Clock,
      title: t('home:step_one'),
      description: t('home:step_one_description'),
      accent: 'bg-(--primary)',
    },
    {
      number: '۲',
      icon: CreditCard,
      meta: t('landing:step_two_meta'),
      metaIcon: Zap,
      title: t('home:step_two'),
      description: t('home:step_two_description'),
      accent: 'bg-(--primary)',
    },
    {
      number: '۳',
      icon: Wallet,
      meta: t('landing:step_three_meta'),
      metaIcon: Zap,
      title: t('home:step_three'),
      description: t('home:step_three_description'),
      accent: 'bg-(--secondary-green)',
      highlight: true,
    },
  ];

    export const getBullets = (t: TFunction) =>[
    {
      icon: Banknote,
      label: t('landing:bullet_reward_label'),
      value: t('landing:bullet_reward_value'),
      tone: 'text-(--secondary-green) bg-(--light-primary)',
    },
    {
      icon: CreditCard,
      label: t('landing:bullet_credit_label'),
      value: t('landing:bullet_credit_value'),
      tone: 'text-(--primary) bg-(--light-primary)',
    },
    {
      icon: Zap,
      label: t('landing:bullet_settlement_label'),
      value: t('landing:bullet_settlement_value'),
      tone: 'text-amber-600 bg-amber-50',
    },
  ];