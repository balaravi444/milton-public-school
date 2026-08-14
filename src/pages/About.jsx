import PageHeader from '../components/ui/PageHeader';
import AboutJourney from '../components/about/AboutJourney';
import AboutMission from '../components/about/AboutMission';
import AboutLeadership from '../components/about/AboutLeadership';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <PageHeader title="About Milton Public School" breadcrumb="About Us" />
      <AboutJourney />
      <AboutMission />
      <AboutLeadership />
    </main>
  );
}

export default About;