'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  X,
  Phone,
  UserPlus,
  ShieldCheck,
  House,
  Award,
  ListChecks,
  Calculator,
  Gavel,
  Headphones,
} from 'lucide-react';
import { Button } from '@/shareComponent';
import { ThemeSwitch } from './ThemeSwitch';
import { HeaderLoginModal } from './HeaderLoginModal';
import { useAuthStore } from '@/store/Auth/authStore';

const NAV_ITEMS = [
  { key: 'nav_home', href: '/', icon: House },
  { key: 'nav_about', href: '#about', icon: Award },
  { key: 'nav_steps', href: '#steps', icon: ListChecks },
  { key: 'nav_calculator', href: '#earning-calc', icon: Calculator },
  { key: 'nav_rules', href: '#rules', icon: Gavel },
  { key: 'nav_support', href: '#contact', icon: Headphones },
] as const;

export function PublicHeader() {
  const { t } = useTranslation(['landing', 'home']);
  const { isLoggedIn, user } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginFlowOpen, setIsLoginFlowOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className='sticky top-0 z-50 bg-(--surface) border-b border-(--border-color) shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-20 flex items-center justify-between'>
          {/* Brand */}
          <Link href='/' className='flex items-center gap-3.5 shrink-0'>
            <div className='w-11 h-11 rounded-xl bg-(--light-primary) border border-(--primary-border)/30 flex items-center justify-center p-1.5 shadow-sm'>
              <Image
                src='/assets/icons/logo.png'
                alt={t('brand_name')}
                width={40}
                height={40}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='hidden sm:flex flex-col text-right'>
              <div className='flex items-center gap-2'>
                <span className='text-xl font-black text-(--text-black) leading-tight tracking-tight'>
                  {t('brand_name')}
                </span>
                <span className='px-2 py-0.5 rounded-md text-[11px] bg-(--light-primary) text-(--primary) font-bold'>
                  {t('brand_badge')}
                </span>
              </div>
              <span className='text-xs text-(--text-muted) font-medium mt-0.5'>
                {t('brand_subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-7'>
            {NAV_ITEMS.map((item, index) =>
              index === 0 ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-(--primary) font-bold text-sm flex items-center gap-1.5 transition-colors'
                >
                  <span className='w-1.5 h-1.5 rounded-full bg-(--primary)' />
                  <span>{t(item.key)}</span>
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-(--second-text-color) hover:text-(--primary) font-medium text-sm transition-colors'
                >
                  {t(item.key)}
                </a>
              ),
            )}
          </nav>

          {/* Quick Actions */}
          <div className='flex items-center gap-3'>
            <ThemeSwitch className='hidden sm:inline-flex' />
            <a
              href='tel:02188884321'
              className='hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-(--bg-gray-light) border border-(--border-color) text-(--second-text-color) hover:bg-(--secondary) transition-colors text-xs font-semibold'
            >
              <Headphones className='w-4 h-4 text-(--primary)' />
              <span>{t('support_phone')}</span>
            </a>

            {isLoggedIn ? (
              <Link
                href='/panel'
                aria-label={user?.fullName || t('cta_register_full')}
                className='shrink-0 w-11 h-11 rounded-full overflow-hidden border-2 border-(--primary) shadow-sm hover:opacity-90 transition-opacity'
              >
                <Image
                  src='/assets/icons/guest.jpg'
                  alt={user?.fullName || t('cta_register_full')}
                  width={44}
                  height={44}
                  className='w-full h-full object-cover'
                />
              </Link>
            ) : (
              <Button
                variant='primary'
                onClick={() => setIsLoginFlowOpen(true)}
                className='w-auto h-auto px-5 py-2.5 rounded-xl text-sm shadow-sm hover:shadow-md gap-2'
              >
                <UserPlus className='w-4 h-4' />
                <span className='hidden sm:inline'>
                  {t('cta_register_full')}
                </span>
                <span className='sm:hidden'>{t('cta_register_short')}</span>
              </Button>
            )}

            {/* Mobile Hamburger */}
            <Button
              variant='outline'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={t('open_menu')}
              aria-expanded={isMobileMenuOpen}
              className='lg:hidden w-11 h-11 p-0 rounded-xl border-(--border-color)'
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5 text-(--text-black)' />
              ) : (
                <Menu className='w-5 h-5 text-(--text-black)' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        onClick={closeMobileMenu}
        aria-hidden='true'
        className='fixed inset-0 bg-black/50 z-40 lg:hidden'
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease-in-out',
        }}
      />

      {/* Mobile Menu Panel — slides in from the right, full height */}
      <aside
        className='fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm lg:hidden bg-(--surface) shadow-2xl flex flex-col'
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms ease-in-out',
        }}
      >
        <div className='flex items-center justify-between p-5 border-b border-(--border-color)'>
          <div className='flex items-center gap-2.5'>
            <div className='w-9 h-9 rounded-lg bg-(--light-primary) border border-(--primary-border)/30 flex items-center justify-center p-1'>
              <Image
                src='/assets/icons/logo.png'
                alt={t('brand_name')}
                width={32}
                height={32}
                className='w-full h-full object-contain'
              />
            </div>
            <span className='text-lg font-black text-(--text-black)'>
              {t('brand_name')}
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            aria-label={t('close_menu')}
            className='w-9 h-9 rounded-lg flex items-center justify-center text-(--second-text-color) hover:bg-(--bg-gray-light) transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        <nav className='flex-1 overflow-y-auto p-4 flex flex-col gap-1'>
          {NAV_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isHome = index === 0;
            const linkClassName = `px-4 py-3 rounded-xl text-sm flex items-center gap-3 transition-colors ${
              isHome
                ? 'text-(--primary) font-bold bg-(--light-primary)'
                : 'text-(--second-text-color) font-medium hover:bg-(--bg-gray-light) hover:text-(--primary)'
            }`;

            return isHome ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={linkClassName}
              >
                <Icon className='w-4 h-4' />
                <span>{t(item.key)}</span>
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={linkClassName}
              >
                <Icon className='w-4 h-4' />
                <span>{t(item.key)}</span>
              </a>
            );
          })}
        </nav>

        <div className='p-4 border-t border-(--border-color) flex flex-col gap-3'>
          <div className='px-4 py-3 rounded-xl bg-(--bg-gray-light) flex items-center justify-between'>
            <span className='text-(--second-text-color) font-medium text-sm'>
              {t('nav_theme')}
            </span>
            <ThemeSwitch />
          </div>

          <a
            href='tel:02188884321'
            onClick={closeMobileMenu}
            className='px-4 py-3 rounded-xl bg-(--bg-gray-light) text-(--second-text-color) font-medium text-sm flex items-center gap-3 hover:text-(--primary) transition-colors'
          >
            <Phone className='w-4 h-4' />
            <span>{t('support_phone')}</span>
          </a>

          <div className='flex items-center gap-2 px-1 text-[11px] text-(--text-muted)'>
            <ShieldCheck className='w-3.5 h-3.5 text-(--secondary-green) shrink-0' />
            <span>{t('partnership_badge')}</span>
          </div>
        </div>
      </aside>

      <HeaderLoginModal
        isOpen={isLoginFlowOpen}
        onClose={() => setIsLoginFlowOpen(false)}
      />
    </header>
  );
}
