import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import AcademicsPreview from '../components/home/Academics/AcademicsPreview';
import LifeAtMilton from '../components/home/LifeAtMilton/LifeAtMilton';
import AdmissionsPreview from '../components/home/AdmissionsPreview';
import Statistics from '../components/home/Statistics';

function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <AcademicsPreview />
      <LifeAtMilton />
      <AdmissionsPreview />
      <Statistics />
    </main>
  );
}

export default Home;