
import { FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";

export interface CaptchaProps<T extends FieldValues> {
  captchaImage: string | null;
  captchaExpired: boolean;
  captchaLoading: boolean;
  loadCaptcha: () => void;

  register: UseFormRegister<T>;
  errors: FieldErrors<T>;

  name: Path<T>;

  touchedFields?: Partial<Record<Path<T>, boolean>>;
  isSubmitted?: boolean;
  differentwith?:string
}