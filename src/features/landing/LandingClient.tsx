import { Hero } from './components/Hero/Hero';
import { TrustBar } from './components/TrustBar/TrustBar';
import { BenefitPillars } from './components/BenefitPillars/BenefitPillars';
import { StepsProcess } from './components/StepsProcess/StepsProcess';
import { EarningCalculator } from './components/EarningCalculator/EarningCalculator';
import { RulesSection } from './components/RulesSection/RulesSection';
import { QuickInvite } from './components/QuickInvite/QuickInvite';
import { SupportBar } from './components/SupportBar/SupportBar';
import { SiteFooter } from './components/SiteFooter/SiteFooter';

export function LandingClient() {
  return (
    <>
      <main className='w-full'>
        <Hero />
        <TrustBar />
        <BenefitPillars />
        <StepsProcess />
        <EarningCalculator />
        <RulesSection />
        <QuickInvite />
        <SupportBar />
      </main>
      <SiteFooter />
    </>
  );
}
