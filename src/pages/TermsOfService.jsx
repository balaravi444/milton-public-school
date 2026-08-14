import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function TermsOfService() {
  return (
    <main className="terms-page">
      <PageHeader title="Terms of Service" breadcrumb="Terms" />
      <ComingSoon 
        title="Terms of Service" 
        description="We are currently updating our terms of service and website usage guidelines. Please check back later."
      />
    </main>
  );
}

export default TermsOfService;
