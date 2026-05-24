import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FinalCTA from '../components/FinalCTA';

interface Props {
  onStart: () => void;
}

export default function LandingPage({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onStart={onStart} />
      <Hero onStart={onStart} />
      <HowItWorks />
      <FinalCTA onStart={onStart} />
    </div>
  );
}
