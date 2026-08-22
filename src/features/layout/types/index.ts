export interface IUser {
  id: string;
  phoneNumber: string;
  nationalId: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  gender: string | null;
  email: string | null;
  userType: string;
  isVerified: boolean;
  createdAt: string;
  birthDate: string | null;
  address: string | null;
  customerId: string | null;
  merchantId: string | null;
}