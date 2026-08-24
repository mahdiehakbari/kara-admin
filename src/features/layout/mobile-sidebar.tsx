"use client";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
  LayoutDashboard,
  CreditCard,
  Wallet,
  BarChart3,
  Sun,
  Moon,
  LogOut,
  X,
  ChevronDownIcon,
} from 'lucide-react';
import { Button } from '@/shareComponent';
import Cookies from 'js-cookie';
import {
  getDentistrySideBar,
  getDentistrySideBarItems,
  getFinancialSideBarItems,
  getSideBarItems,
} from './constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IUser } from './types';
import { useTheme } from '@/providers/ThemeProvider';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(true);
  const [openMenuDentist, setOpenMenuDentist] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/');
  };

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };
  if (!isOpen) return null;

  const userType = localStorage.getItem('userType');

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black/50 z-40 lg:hidden'
        onClick={onClose}
      />
      <aside className='fixed right-0 top-0 w-72 h-full z-50 lg:hidden bg-(--surface) shadow-sm'>
        <div className='p-6 flex flex-col gap-6 h-full'>
          {/* Header */}
          <div className='flex items-center justify-between mb-2'>
            <h2 className='text-xl font-bold text-(--text-black)'>
              {userType == 'Financial'
                ? t('dashboard:financialAdminPanel')
                : userType == 'DentistryAdmin'
                  ? t('sidebar:customer_referral_panel')
                  : 'پنل ادمین دنتالیت'}
            </h2>
            <button
              onClick={onClose}
              className='text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            >
              <X size={24} />
            </button>
          </div>

          {/* Profile Section */}
          {/* <div className='flex items-center gap-4'>
            <div className='relative'>
              <div
                className='bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border-2 border-primary'
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWPi9ITt7FbMg74Ldr2M1oe-Vk0zSr7acE_xreOfSbu-yA_f4JvTA6zJCPRacezpV9zvBhVsIc_e7gOc0knyWkc-H0qE4VmYM_hpSxBilqt9VZP36diGqP6cWJPVbpUKJAw5OLsx4hfvJg7s7ERlH4KxEmJknb7vYY22vu2qNChRVQXB3aW7UZVvb_RiCLeAU-jsGgmAD_O6lk2VevBwWArcPKqnMTKAAj0QaHb_i0eQsQQEoR9M_7GTC9s-cqDTK1_ycVoLbxZSWN")',
                }}
              />
              <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#111722]' />
            </div>
            <div className='flex flex-col'>
              <h1
                className='text-base font-bold leading-tight transition-colors'
                style={{ color: 'var(--profile-name-color)' }}
              >
                {t('dashboard:profileName')}
              </h1>
              <p
                className='text-xs font-normal transition-colors'
                style={{ color: 'var(--profile-role-color)' }}
              >
                {t('dashboard:profileRole')}
              </p>
            </div>
          </div> */}

          {(userType == 'Financial' || userType == 'Admin') && (
            <>
              <div className='flex items-center gap-4 px-2'>
                <div className='relative'>
                  <img
                    src='/assets/icons/guest.jpg'
                    className='bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border-2 border-primary'
                  />
                  <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#111722]' />
                </div>
                <div className='flex flex-col'>
                  <h1
                    className='text-base font-bold leading-tight transition-colors'
                    style={{ color: 'var(--profile-name-color)' }}
                  >
                    {user?.fullName}
                  </h1>
                  <p
                    className='text-xs font-normal transition-colors'
                    style={{ color: 'var(--profile-role-color)' }}
                  >
                    {user?.userType === 'Admin' ? 'ادمین' : ''}
                  </p>
                </div>
              </div>
            </>
          )}

          {userType == 'Admin' && (
            <>
              <Link href='panel/customerManagement'>
                <div
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer
                    ${
                      isActive('panel/customerManagement')
                        ? 'bg-(--second-light-primary) text-primary font-normal text-[16px] mt-2'
                        : `hover:bg-(--dark-bg)  font-normal text-[16px] mt-2`
                    }
                  `}
                >
                  <Image
                    src='/assets/icons/people.svg'
                    alt='people'
                    width={20}
                    height={20}
                  />
                  <p className=' font-normal text-[16px]'>
                    {t('dashboard:customer_management')}
                  </p>
                </div>
              </Link>
              <div>
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className='w-full flex justify-between items-center bg-(--primary) text-white rounded-xl px-4 py-2 text-sm font-medium hover:bg-(--primary)/90'
                >
                  <div className='flex gap-1 items-center'>
                    <Image
                      src='/assets/icons/coin.svg'
                      alt='logo'
                      width={20}
                      height={20}
                    />
                    مدیریت مالی
                  </div>
                  <ChevronDownIcon
                    className={`h-5 w-5 transform transition-all ${
                      openMenu ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMenu ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
                >
                  <ul className='rounded-xl  p-2'>
                    {getDentistrySideBar().map((item) => {
                      const Icon = item.icon;
                      const isIconPath = typeof Icon === 'string';
                      return (
                        <li
                          key={item.href}
                          onClick={() => router.push(item.href)}
                          className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer
                              ${
                                isActive(item.href)
                                  ? 'bg-(--second-light-primary) text-primary font-normal text-[16px]'
                                  : 'hover:bg-(--dark-bg) font-normal text-[16px]'
                              }
                            `}
                        >
                          {isIconPath ? (
                            <img
                              src={Icon}
                              alt=''
                              className='w-5 h-5'
                              aria-hidden='true'
                            />
                          ) : (
                            <Icon className='w-5 h-5' strokeWidth={2} />
                          )}
                          <span>{item.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setOpenMenuDentist(!openMenuDentist)}
                  className='w-full flex justify-between items-center bg-(--primary) text-white rounded-xl px-4 py-2 text-sm font-medium hover:bg-(--primary)/90'
                >
                  <div className='flex gap-1 items-center'>
                    <Image
                      src='/assets/icons/coin.svg'
                      alt='logo'
                      width={20}
                      height={20}
                    />
                    مدیریت پذیرندگان
                  </div>
                  <ChevronDownIcon
                    className={`h-5 w-5 transform transition-all ${
                      openMenuDentist ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMenuDentist ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
                >
                  <ul className='rounded-xl  p-2'>
                    {getDentistrySideBar().map((item) => {
                      const Icon = item.icon;
                      const isIconPath = typeof Icon === 'string';
                      return (
                        <li
                          key={item.href}
                          onClick={() => router.push(item.href)}
                          className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer
                              ${
                                isActive(item.href)
                                  ? 'bg-(--second-light-primary) text-primary font-normal text-[16px]'
                                  : 'hover:bg-(--dark-bg) font-normal text-[16px]'
                              }
                            `}
                        >
                          {isIconPath ? (
                            <img
                              src={Icon}
                              alt=''
                              className='w-5 h-5'
                              aria-hidden='true'
                            />
                          ) : (
                            <Icon className='w-5 h-5' strokeWidth={2} />
                          )}
                          <span>{item.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <nav className='flex flex-col gap-2 flex-1 overflow-y-auto'>
            {(userType === 'Financial'
              ? getFinancialSideBarItems()
              : userType === 'CustomerIntroducer'
                ? getDentistrySideBarItems()
                : []
            ).map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200`}
                  style={{
                    backgroundColor: isActive
                      ? 'var(--primary)'
                      : 'var(--sidebar-bg)',
                    color: isActive ? 'var(--text-white)' : 'var(--text-black)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = 'var(--sidebar-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = 'var(--sidebar-bg)';
                    }
                  }}
                >
                  <Icon className='w-5 h-5' strokeWidth={isActive ? 2.5 : 2} />
                  <span className='text-sm font-medium'>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className='flex flex-col gap-3'>
            <Button
              variant='outline'
              onClick={toggleTheme}
              className='group flex items-center justify-between px-4 py-3 rounded-xl
           
            transition-all duration-200 w-full'
            >
              <div className='flex items-center gap-3'>
                {isDark ? (
                  <span className='text-sm font-medium text-primary '>
                    {t('home:lightTheme')}
                  </span>
                ) : (
                  <span className='text-sm font-medium '>
                    {t('home:darkTheme')}
                  </span>
                )}
              </div>
              {isDark ? <Moon /> : <Sun />}
            </Button>

            <Button
              variant='outline'
              onClick={handleLogout}
              className='flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl
            border-2 border-red-200 dark:border-red-900/30
            text-red-600 dark:text-red-400
            hover:bg-red-50 dark:hover:bg-red-900/10
            hover:border-red-300 dark:hover:border-red-800
            transition-all duration-200'
            >
              <LogOut className='w-5 h-5' />
              <span className='text-sm font-bold'>{t('home:log_out')}</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
