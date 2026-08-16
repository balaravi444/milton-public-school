import PageHeader from '../components/ui/PageHeader';
import AdmissionsProcess from '../components/admissions/AdmissionsProcess';
import AdmissionsRules from '../components/admissions/AdmissionsRules';

function Admissions() {
  return (
    <main className="admissions-page">
      <PageHeader title="Admissions" breadcrumb="Admissions" />
      <AdmissionsProcess />
      <AdmissionsRules />
    </main>
  );
}

export default Admissions;