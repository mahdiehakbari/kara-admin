export const localesNS = [
  'login',
  'sidebar',
  'home',
  'customerList',
  'dental_plane',
  'faq',
  'social_media',
] as const;
export type LocaleNS = (typeof localesNS)[number];

export const languages = ['en', 'fa'] as const;
export type Language = (typeof languages)[number];
