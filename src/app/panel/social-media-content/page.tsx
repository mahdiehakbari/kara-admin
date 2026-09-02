
'use client';

import {
  ContentTabs,
  Post,
  TabKey,
  Story,
  GroupMessage,
  Direct,
  Guid,
  FollowUp,
} from '@/features';
import { useState } from 'react';
import { FaBullhorn, FaGift } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SocialMediaContent = () => {
  const { t: i18n } = useTranslation('social_media');

  const [activeTab, setActiveTab] = useState<TabKey>('post');

  return (
    <div className='max-w-7xl min-w-0 my-6 mx-auto px-4 sm:px-6 lg:pb-8 pb-8 md:pb-12'>
      <div className='bg-(--primary) p-6 rounded-2xl shadow-xl mb-20'>
        <div className='flex items-center gap-4 mb-4'>
          <FaBullhorn color='#FFD54F' size={32} />

          <p className='text-white text-[20px] font-bold'>
            {i18n('ready_to_use_messages')}
          </p>
        </div>

        <p className='text-white text-[16px] md:max-w-200'>
          {i18n('ready_to_use_messages_description')}
        </p>

        <div className='flex gap-2 w-fit items-center mt-6  rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-2'>
          <FaGift size={20} className=' mb-2' color='#FFD54F' />

          <p className='text-white text-center text-sm'>
            {i18n('special_reward')}
          </p>
        </div>
      </div>

      <div>
        <ContentTabs active={activeTab} onChange={setActiveTab} />

        {activeTab === 'post' && (
          <div>
            <Post />
          </div>
        )}

        {activeTab === 'story' && (
          <div>
            <Story />
          </div>
        )}

        {activeTab === 'groupMessage' && (
          <div>
            <GroupMessage />
          </div>
        )}

        {activeTab === 'direct' && (
          <div>
            <Direct />
          </div>
        )}

        {activeTab === 'guid' && (
          <div>
            <Guid />
          </div>
        )}

        {activeTab === 'followUp' && (
          <div>
            <FollowUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaContent;