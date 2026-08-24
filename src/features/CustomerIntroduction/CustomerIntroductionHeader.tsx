import { UserRound } from 'lucide-react';

export const CustomerIntroductionHeader = () => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className="
          flex items-center justify-center
          w-12 h-12
          rounded-2xl
          bg-blue-50
          text-blue-600
        "
      >
        <UserRound size={24} />
      </div>

      <div>
        <h1 className="text-xl font-semibold text-(--text-black)">
          معرفی مشتری
        </h1>

        <p className="mt-1 text-sm text-(--text-gray)">
          اطلاعات مشتری را برای ثبت در سامانه وارد کنید.
        </p>
      </div>
    </div>
  );
};