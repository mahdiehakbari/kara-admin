import * as XLSX from 'xlsx-js-style';
import { toast } from 'react-toastify';
import { IExportExcelProps } from './types';

export const useExportExcel = () => {
  const exportExcel = <T>({
    data,
    mapper,
    fileName,
    sheetName = 'Sheet1',
  }: IExportExcelProps<T>) => {
    try {
      if (!data?.length) {
        toast.info('داده‌ای برای خروجی وجود ندارد');
        return false;
      }

      const rows = data.map(mapper);

      const worksheet = XLSX.utils.json_to_sheet(rows);

      const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');

      const headerColor = '1F4E78';
      const evenRowColor = 'E2F0D9';
      const oddRowColor = 'FFFCE6';
      const borderColor = '000000';

      const headerStyle = {
        fill: {
          patternType: 'solid',
          fgColor: {
            rgb: headerColor,
          },
        },
        font: {
          bold: true,
          color: {
            rgb: 'FFFFFF',
          },
          sz: 11,
        },
        alignment: {
          horizontal: 'center',
          vertical: 'center',
          wrapText: true,
          readingOrder: 2,
        },
        border: {
          top: {
            style: 'thin',
            color: { rgb: borderColor },
          },
          bottom: {
            style: 'thin',
            color: { rgb: borderColor },
          },
          left: {
            style: 'thin',
            color: { rgb: borderColor },
          },
          right: {
            style: 'thin',
            color: { rgb: borderColor },
          },
        },
      };

      const getRowStyle = (rowIndex: number) => ({
        fill: {
          patternType: 'solid',
          fgColor: {
            rgb: rowIndex % 2 === 0 ? evenRowColor : oddRowColor,
          },
        },

        font: {
          name: 'Calibri',
          sz: 11,
          color: {
            rgb: '000000',
          },
        },

        alignment: {
          horizontal: 'center',
          vertical: 'center',
          wrapText: true,
          readingOrder: 2,
        },

        border: {
          top: {
            style: 'thin',
            color: { rgb: borderColor },
          },
          bottom: {
            style: 'thin',
            color: { rgb: borderColor },
          },
          left: {
            style: 'thin',
            color: { rgb: borderColor },
          },
          right: {
            style: 'thin',
            color: { rgb: borderColor },
          },
        },
      });

      for (let row = range.s.r; row <= range.e.r; row++) {
        for (let col = range.s.c; col <= range.e.c; col++) {
          const cellAddress = XLSX.utils.encode_cell({
            r: row,
            c: col,
          });

          const cell = worksheet[cellAddress];

          if (!cell) continue;

          // Header
          if (row === 0) {
            cell.s = headerStyle;
          } else {
            // ردیف‌های دیتا
            cell.s = getRowStyle(row - 1);
          }
        }
      }

      worksheet['!cols'] = [
        { wch: 8 },
        { wch: 25 },
        { wch: 20 },
        { wch: 25 },
        { wch: 20 },
        { wch: 18 },
        { wch: 18 },
        { wch: 20 },
      ];

      worksheet['!rows'] = [
        {
          hpt: 28,
        },
      ];

      const workbook = XLSX.utils.book_new();

      workbook.Workbook = workbook.Workbook || {};
      workbook.Workbook.Views = [
        {
          RTL: true,
        },
      ];

      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

      XLSX.writeFile(workbook, `${fileName}.xlsx`);

      return true;
    } catch (err) {
      console.error(err);
      toast.error('خطا در ایجاد فایل اکسل');
      return false;
    }
  };

  return { exportExcel };
};
