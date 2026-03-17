import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import PrizeTiers from '@/components/PrizeTiers';
import WhyNW from '@/components/WhyNW';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import FollowUp from '@/components/FollowUp';
import Locations from '@/components/Locations';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-950 overflow-x-hidden">
      <Header />
      <Hero />
      <Trust />
      <PrizeTiers />
      <WhyNW />
      <Services />
      <HowItWorks />
      <FollowUp />
      <Locations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
