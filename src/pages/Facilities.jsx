import PageHeader from '../components/ui/PageHeader';
import FacilitiesGrid from '../components/facilities/FacilitiesGrid';
import CampusSafety from '../components/facilities/CampusSafety';
import './Facilities.css';

function Facilities() {
  return (
    <main className="facilities-page">
      <PageHeader title="Campus Facilities" breadcrumb="Facilities" />
      <FacilitiesGrid />
      <CampusSafety />
    </main>
  );
}

export default Facilities;