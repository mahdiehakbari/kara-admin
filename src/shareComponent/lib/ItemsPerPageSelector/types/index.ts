export interface ItemsPerPageSelectorProps {
  options?: number[];
  itemsPerPage: number;
  totalCount: number;
  onChange: (count: number) => void;
}