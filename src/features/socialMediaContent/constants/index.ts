'use client';

import i18n from '@/i18n';

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
  title: string;
  icon: React.ElementType;
}[] = [
  {
    id: 'post',
    title: i18n.t('social_media:social_media_post_reel'),
    icon: FaVideo,
  },
  {
    id: 'story',
    title: i18n.t('social_media:social_media_story'),
    icon: FaInstagram,
  },
  {
    id: 'groupMessage',
    title: i18n.t('social_media:group_messages'),
    icon: FaUsers,
  },
  {
    id: 'direct',
    title: i18n.t('social_media:direct_messages'),
    icon: FaComments,
  },
  {
    id: 'guid',
    title: i18n.t('social_media:guidance_for_questions'),
    icon: FaQuestionCircle,
  },
  {
    id: 'followUp',
    title: i18n.t('social_media:follow_up_messages'),
    icon: FaClipboardCheck,
  },
];