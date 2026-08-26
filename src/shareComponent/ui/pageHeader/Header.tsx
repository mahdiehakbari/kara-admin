'use client'
import { Button } from "@/shareComponent";
import {  Download } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { HeaderProps } from "./types";


const Header = ({ name, title, subTitle, onExport }: HeaderProps) => {
  const { t } = useTranslation();
  return (
    <header
      className={`w-full  py-4 mt-12 md:mt-0 sticky top-0 z-10 transition-colors px-0 md:px-6 shadow-sm bg-(--surface)`}
    >
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 md:px-0'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-3xl font-black tracking-tight text-primary pb-1'>
            {title}
          </h1>

          <p className='text-sm text-muted'>{subTitle}</p>
        </div>
        <div className='flex items-center gap-3 flex-wrap'>
          <Button
              onClick={onExport}
              className='w-fit flex items-center justify-center gap-2 h-10 px-4  text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all'
            >
              <Download className='w-5 h-5' />
              <span className='hidden sm:inline'>
                {t('customerList:exportExcelPdf')}
              </span>
            </Button>
        </div>
      </div>
    </header>
  );
};
 
export default Header;