import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { Home } from 'lucide-react';

function NotFound() {
  return (
    <main className="not-found-page">
      <PageHeader title="404 - Page Not Found" breadcrumb="404 Error" />
      
      <section className="section-padding text-center" style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--primary-blue)', marginBottom: '1rem', lineHeight: '1' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Oops! Page Not Found</h2>
        <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: '#607984', lineHeight: '1.6' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Home size={18} />
          Back to Homepage
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
