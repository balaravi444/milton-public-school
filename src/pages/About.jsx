import PageHeader from '../components/ui/PageHeader';
import AboutJourney from '../components/about/AboutJourney';
import TaglineBanner from '../components/ui/TaglineBanner';
import AboutMission from '../components/about/AboutMission';
import AboutLeadership from '../components/about/AboutLeadership';
import AboutManagement from '../components/about/AboutManagement';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <PageHeader title="About Milton Public School" breadcrumb="About Us" />
      <AboutJourney />
      <TaglineBanner />
      <AboutMission />
      <AboutManagement />
      <AboutLeadership />
    </main>
  );
}

export default About;