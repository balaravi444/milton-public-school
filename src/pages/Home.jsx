import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Statistics from '../components/home/Statistics';
import AcademicsPreview from '../components/home/Academics/AcademicsPreview';
  
function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <AcademicsPreview />
      <Statistics />
    </main>
  );
}

export default Home;