import { LandingClient, PublicHeader } from '@/features';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col transition-colors'>
      <PublicHeader />
      <LandingClient />
    </div>
  );
}
