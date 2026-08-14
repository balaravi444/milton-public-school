import PageHeader from '../components/ui/PageHeader';
import AcademicsOverview from '../components/academics/AcademicsOverview';
import AcademicStages from '../components/academics/AcademicStages';
import SchoolSchedule from '../components/academics/SchoolSchedule';
import './Academics.css';

function Academics() {
  return (
    <main className="academics-page">
      <PageHeader title="Academics at Milton" breadcrumb="Academics" />
      <AcademicsOverview />
      <AcademicStages />
      <SchoolSchedule />
    </main>
  );
}

export default Academics;