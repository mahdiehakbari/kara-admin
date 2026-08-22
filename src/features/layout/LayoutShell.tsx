
'use client';

import { usePathname } from 'next/navigation';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/shareComponent';
import { AppSidebar } from './app-sidebar';
import { MobileSidebar } from './mobile-sidebar';

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isDashboard = pathname.startsWith('/panel');

  return (
    <div className='min-h-screen flex flex-row-reverse'>
      <div className='flex-1 flex flex-col'>
        <main className='flex-1'>{children}</main>
      </div>

      {isDashboard && (
        <>
          <AppSidebar />
          <MobileSidebar
            isOpen={isMobileSidebarOpen}
            onClose={() => setIsMobileSidebarOpen(false)}
          />

          <Button
            onClick={() => setIsMobileSidebarOpen(true)}
            className='w-8 h-8 lg:hidden fixed top-4 right-4 z-30 p-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-slate-700 shadow-lg'
          >
            <Menu size={24} strokeWidth={2} />
          </Button>
        </>
      )}
    </div>
  );
}
