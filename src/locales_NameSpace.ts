export const localesNS = [
  'login',
  'sidebar',
  'home',
  'customerList',
  'dental_plane',
  'faq',
] as const;
export type LocaleNS = (typeof localesNS)[number];

export const languages = ['en', 'fa'] as const;
export type Language = (typeof languages)[number];
