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
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CustomerIntroducerQueryParams {
  pageNumber?: number;
  pageSize?: number;
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