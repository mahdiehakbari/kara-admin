import { SpinnerDiv } from '@/shareComponent';
import { IContentStateWrapperProps } from './types';

export const ContentStateWrapper = ({
  loading,
  loadingText,
  children,
}: IContentStateWrapperProps) => {
  return (
    <div className='relative'>
      {loading && (
        <div
          className={`absolute inset-0 z-50 flex justify-center items-center h-screen md:min-h-full bg-(--surface)`}
        >
          <SpinnerDiv size='lg' />
          <p className='px-2'>{loadingText}</p>
        </div>
      )}
      {children}
    </div>
  );
};
