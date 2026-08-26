export interface PaginateProps {
  page: number ;
  currentPage: number;
  totalPages: number;
  handlePageClick: (value: number) => void;
  handlePreviousPage: (value: number) => void;
  handleNextPage: () => void;
}

