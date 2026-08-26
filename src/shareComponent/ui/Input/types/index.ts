import {
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface ISkill {
  skillId: string;
  description: string;
}

interface IAddress {
  id: string;
  cityId: string;
  cityName: string;
  provinceId: string;
  provinceName: string;
  details: string;
  postalCode: string;
  medicalCertificateNumber: string;
  workPlacePhoneNumber: string;
}

export interface IProfileFormValues {
  id: string;
  phoneNumber: string;
  fullName?: string;
  firstName: string;
  lastName: string;
  mobile: string;
  nationalId: string;
  birthDate: string;
  gender: number | string;
  email?: string;
  iban?: string;
  province: string;
  cityId: string;
  postalCode: string;
  addressDetails: string;
  address?: IAddress;
  merchantId?: string;
  medicalSystemNumber: string;
  educationLevel: string | number;
  contractType: string | number;
  certificateNumber: string;
  workPlacePhoneNumber: string;
  merchantAddress: string;
  professionalTitle: string;
  bio: string;
  merchantBio: string;
  skillIds: string[];
  skills: ISkill[];
  imageFilePath: string;
  medicalCertificateNumber: string;
  provinceId: string;
  canMakeNewPurchaseRequest: boolean;
}

export type InputProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  textError: string;
  rules?: RegisterOptions<T, FieldPath<T>>;
  defaultValue?: string;
  type?: string;
  full?: boolean;
  disabled?: boolean;
};
