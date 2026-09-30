'use client'
import { Phone, ShieldCheck, X } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "./constants";
import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { usePathname } from "next/navigation";

export interface ResponsiveHeaderProps{
    closeMobileMenu:()=>void;
    isMobileMenuOpen:boolean
}

const PublicHeaderResponsive = ({closeMobileMenu,isMobileMenuOpen}:ResponsiveHeaderProps) => {
    const { t } = useTranslation(['landing', 'home']);
    const pathname = usePathname();
    return (       
    <>    <div
        onClick={closeMobileMenu}
        aria-hidden='true'
        className='fixed inset-0 bg-black/50 z-40 lg:hidden'
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease-in-out',
        }}
      />
        <aside
        className='fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm lg:hidden bg-(--surface) shadow-2xl flex flex-col'
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms ease-in-out',
        }}
      >
        {/* Mobile Header */}
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

        {/* Mobile Navigation */}
        <nav className='flex-1 overflow-y-auto p-4 flex flex-col gap-1'>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            const label = t(`${item.translationNamespace}:${item.key}`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-xl text-sm flex items-center gap-3 transition-all duration-200 ${
                  isActive && !item.highlighted
                    ? 'text-(--primary) font-bold bg-(--light-primary)'
                    : !item.highlighted
                      ? 'text-(--second-text-color) font-medium hover:bg-(--bg-gray-light) hover:text-(--primary)'
                      : item.highlighted
                        ? 'border'
                        : ''
                }`}
                style={{
                  backgroundColor:
                    item.highlighted && isActive
                      ? 'var(--primary)'
                      : item.highlighted
                        ? undefined
                        : undefined,
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
                  <span className='text-lg animate-pulse'>✨</span>
                ) : (
                  <Icon className='w-4 h-4' strokeWidth={isActive ? 2.5 : 2} />
                )}

                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Footer */}
        <div className='p-4 border-t border-(--border-color) flex flex-col gap-3'>
          <div className='px-4 py-3 rounded-xl bg-(--bg-gray-light) flex items-center justify-between'>
            <span className='text-(--second-text-color) font-medium text-sm'>
              {t('nav_theme')}
            </span>
            <ThemeSwitch />
          </div>

          <a
            href='tel:90000644'
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
      </>
   );
}
 
export default PublicHeaderResponsive;