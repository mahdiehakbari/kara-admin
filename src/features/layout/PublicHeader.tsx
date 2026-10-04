'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, UserPlus, Headphones, LogOut } from 'lucide-react';
import { Button } from '@/shareComponent';
import { ThemeSwitch } from './ThemeSwitch';
import { HeaderLoginModal } from './HeaderLoginModal';
import { useAuthStore } from '@/store/Auth/authStore';
import { getDentistrySideBarItems, NAV_ITEMS } from './constants';
import { usePathname, useRouter } from 'next/navigation';
import PublicHeaderResponsive from './PublicHeaderResponsive';

export function PublicHeader() {
  const { t } = useTranslation(['landing', 'home']);
  const { isLoggedIn, user, logout } = useAuthStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginFlowOpen, setIsLoginFlowOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const profileMenuItems = getDentistrySideBarItems();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogOut = () => {
    setIsProfileMenuOpen(false);
    logout();
    router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='fixed top-0 inset-x-0 z-[100] bg-(--surface) border-b border-(--border-color) shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-20 flex items-center justify-between gap-4'>
          {/* Brand */}
          <Link href='/' className='flex items-center gap-2 shrink-0'>
            <Image
              src='/assets/icons/logo.png'
              alt={t('brand_name')}
              width={50}
              height={50}
              className='w-full h-full object-contain'
            />

            <div className='hidden sm:flex flex-col text-right'>
              <div className='flex items-center'>
                <span className='text-sm w-[120px] font-black text-(--text-black) leading-tight tracking-tight'>
                  باشگاه معرفین دنتالیت
                </span>

                {/* <span className='px-2 py-0.5 rounded-md text-[11px] bg-(--light-primary) text-(--primary) font-bold'>
                  {t('brand_badge')}
                </span> */}
              </div>

              {/* <span className='text-xs text-(--text-muted) font-medium mt-0.5'>
                {t('brand_subtitle')}
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-3'>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              const label = t(`${item.translationNamespace}:${item.key}`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-sm transition-all duration-200 ${
                    isActive && !item.highlighted
                      ? 'text-(--primary) font-bold'
                      : !item.highlighted
                        ? 'text-(--second-text-color) hover:text-(--primary) font-medium'
                        : ''
                  } ${item.highlighted && !isActive ? 'border' : ''}`}
                  style={{
                    backgroundColor:
                      item.highlighted && isActive
                        ? 'var(--primary)'
                        : item.highlighted
                          ? undefined
                          : 'transparent',
                    backgroundImage:
                      item.highlighted && !isActive
                        ? 'linear-gradient(to right, var(--visual-content-bg-from), var(--visual-content-bg-to))'
                        : undefined,
                    borderColor:
                      item.highlighted && !isActive
                        ? 'var(--visual-content-border)'
                        : undefined,
                    color:
                      item.highlighted && !isActive
                        ? 'var(--visual-content-text)'
                        : item.highlighted && isActive
                          ? 'var(--text-white)'
                          : undefined,
                  }}
                >
                  {item.highlighted ? (
                    <span className='text-base animate-pulse'>✨</span>
                  ) : (
                    isActive && (
                      <span className='w-1.5 h-1.5 rounded-full bg-(--primary)' />
                    )
                  )}

                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className='flex items-center gap-3 shrink-0'>
            <ThemeSwitch className='hidden lg:inline-flex' />

            <a
              href='tel:90000644'
              className='hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-(--bg-gray-light) border border-(--border-color) text-(--second-text-color) hover:bg-(--secondary) transition-colors text-xs font-semibold'
            >
              <Headphones className='w-4 h-4 text-(--primary)' />
              <span>۹۰۰۰۰۶۴۴</span>
            </a>

            {isLoggedIn ? (
              <div ref={profileMenuRef} className='relative'>
                <button
                  type='button'
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  aria-label={user?.fullName || t('cta_register_full')}
                  aria-expanded={isProfileMenuOpen}
                  className='flex items-center gap-2 shrink-0 rounded-full focus:outline-none'
                >
                  <span className='w-11 h-11 rounded-full overflow-hidden border-2 border-(--primary) shadow-sm hover:opacity-90 transition-opacity'>
                    <Image
                      src='/assets/icons/guest.jpg'
                      alt={user?.fullName || t('cta_register_full')}
                      width={44}
                      height={44}
                      className='w-full h-full object-cover cursor-pointer'
                    />
                  </span>
                </button>

                {/* Profile Dropdown */}
                <div
                  className={`absolute left-0 top-[calc(100%+12px)] w-64 origin-top-left transition-all duration-200 ${
                    isProfileMenuOpen
                      ? 'visible translate-y-0 scale-100 opacity-100'
                      : 'invisible -translate-y-2 scale-95 opacity-0'
                  }`}
                >
                  <div className='overflow-hidden rounded-2xl border border-(--border-color) bg-(--surface) shadow-xl'>
                    <div className='p-2'>
                      {profileMenuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsProfileMenuOpen(false)}
                            className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-(--light-primary) text-(--primary)'
                                : 'text-(--second-text-color) hover:bg-(--light-primary) hover:text-(--primary)'
                            }`}
                          >
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                isActive
                                  ? 'bg-(--primary)/10'
                                  : 'bg-(--bg-gray-light)'
                              }`}
                            >
                              <Icon className='h-4 w-4' />
                            </span>

                            <span>{item.label}</span>
                          </Link>
                        );
                      })}

                      <button
                        type='button'
                        onClick={handleLogOut}
                        className='flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50'
                      >
                        <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-red-50'>
                          <LogOut className='h-4 w-4' />
                        </span>

                        <span>خروج</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Button
                variant='primary'
                onClick={() => setIsLoginFlowOpen(true)}
                className='w-auto h-auto px-5 py-2.5 rounded-xl text-sm shadow-sm hover:shadow-md gap-2'
              >
                <UserPlus className='w-4 h-4' />
                <span>{t('cta_register_full')}</span>
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

      <PublicHeaderResponsive
        closeMobileMenu={closeMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <HeaderLoginModal
        name='auth'
        isOpen={isLoginFlowOpen}
        onClose={() => setIsLoginFlowOpen(false)}
      />
    </header>
  );
}