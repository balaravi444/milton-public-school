import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function Downloads() {
  return (
    <main className="downloads-page">
      <PageHeader title="Downloads" breadcrumb="Downloads" />
      <ComingSoon 
        title="Resources Coming Soon" 
        description="We are preparing downloadable resources, forms, and syllabus copies for your convenience."
      />
    </main>
  );
}

export default Downloads;