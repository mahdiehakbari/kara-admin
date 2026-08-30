import { IconType } from 'react-icons';

export type TabKey =
  | 'post'
  | 'story'
  | 'groupMessage'
  | 'direct'
  | 'guid'
  | 'followUp';

export interface Props {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

export interface PostProps {
  video: string;
  username: string;
  avatar?: string;
  caption: string;
  likes: number;
}
