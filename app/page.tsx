import NavbarHero from './components/Hero'
import ProgramsSection from './components/ProgramsSection';
// import StudyDestinationsSection from './components/StudyDestinations';
import DestinationsSection from './components/DestinationsSection';
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <NavbarHero />
      <ProgramsSection/>
      <DestinationsSection/>
      {/* <StudyDestinationsSection/> */}
      <Footer/>
    </>
  );
}
