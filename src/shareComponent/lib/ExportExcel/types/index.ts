export interface IExportExcelProps<T> {
  data: T[];
  mapper: (item: T, index: number) => Record<string, unknown>;
  fileName: string;
  sheetName?: string;
}