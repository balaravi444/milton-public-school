import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function Contact() {
  return (
    <main className="contact-page">
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <ComingSoon 
        title="Contact Form Coming Soon" 
        description="We are setting up our digital inquiry forms. In the meantime, please feel free to use the WhatsApp button or the contact details in the footer to reach us."
      />
    </main>
  );
}

export default Contact;