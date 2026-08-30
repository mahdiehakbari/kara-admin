'use client';

import {
  FaVideo,
  FaInstagram,
  FaComments,
  FaUsers,
  FaQuestionCircle,
  FaClipboardCheck,
} from 'react-icons/fa';

import { TabKey } from '../types';

export const tabs: {
  id: TabKey;
  translationKey: string;
  icon: React.ElementType;
}[] = [
  {
    id: 'post',
    translationKey: 'social_media_post_reel',
    icon: FaVideo,
  },
  {
    id: 'story',
    translationKey: 'social_media_story',
    icon: FaInstagram,
  },
  {
    id: 'groupMessage',
    translationKey: 'group_messages',
    icon: FaUsers,
  },
  {
    id: 'direct',
    translationKey: 'direct_messages',
    icon: FaComments,
  },
  {
    id: 'guid',
    translationKey: 'guidance_for_questions',
    icon: FaQuestionCircle,
  },
  {
    id: 'followUp',
    translationKey: 'follow_up_messages',
    icon: FaClipboardCheck,
  },
];

export const toneOptions = [
  {
    value: 0,
    label: 'دوستانه',
  },
  {
    value: 1,
    label: 'رسمی',
  },
  {
    value: 2,
    label: 'هیجانی',
  },
];

export const focusOptions = [
  {
    value: 0,
    label: 'عمومی',
  },
  {
    value: 1,
    label: 'ایمپلنت',
  },
  {
    value: 2,
    label: 'کامپوزیت و زیبایی',
  },
  {
    value: 3,
    label: 'لمینت',
  },
  {
    value: 4,
    label: 'ارتودنسی',
  },
  {
    value: 5,
    label: 'عصب‌کشی (اندو)',
  },
  {
    value: 6,
    label: 'اطفال',
  },
  {
    value: 7,
    label: 'جراحی لثه',
  },
  {
    value: 8,
    label: 'بلیچینگ',
  },
];