export interface CustomerIntroducer {
  id: string;
  phoneNumber: string;
  nationalId: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  persianCreatedAt: string;
  expiresAt: string;
  persianExpiresAt: string;
  status: number;
  statusTitle: string;
  isDelete: boolean;
}

export interface CustomerIntroducerQueryResponse {
  items: CustomerIntroducer[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface CustomerIntroducerQueryParams {
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string;
  fromDate?: string;
  toDate?: string;
  statuses?: number[];
}

export interface CustomerListTableProps {
  data: CustomerIntroducer[];
  currentPage: number;
  pageSize: number;
  onDelete: (id: string) => void;
  deleteLoading: boolean;
  activeTab:number;
}


export interface ResponsiveCustomerListTableProps {
  data: CustomerIntroducer[];
  currentPage: number;
  pageSize: number;
  onDelete: (id: string) => void;
   deleteLoading: boolean;
   activeTab:number;
}