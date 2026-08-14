import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function Admissions() {
  return (
    <main className="admissions-page">
      <PageHeader title="Admissions Overview" breadcrumb="Admissions" />
      <ComingSoon 
        title="Admissions Information Coming Soon" 
        description="We are currently finalizing the admission guidelines and requirements for the upcoming academic year. Please check back soon for detailed information on how to apply."
      />
    </main>
  );
}

export default Admissions;