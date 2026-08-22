import { LoginForm } from '@/features';

export default function Home() {
  return (
    <div className='h-[95vh] flex items-center justify-center p-4  transition-colors'>
      <div className='w-full max-w-md p-8 mx-auto rounded-2xl'>
        <LoginForm />
      </div>
    </div>
  );
}
