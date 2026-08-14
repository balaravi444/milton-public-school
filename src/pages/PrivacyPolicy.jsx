import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <PageHeader title="Privacy Policy" breadcrumb="Privacy" />
      <ComingSoon 
        title="Privacy Policy" 
        description="We are currently updating our official privacy policy. Please contact the administrative office for details regarding how we handle your data."
      />
    </main>
  );
}

export default PrivacyPolicy;
