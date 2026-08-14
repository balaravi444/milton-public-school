import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function NewsEvents() {
  return (
    <main className="news-events-page">
      <PageHeader title="News & Events" breadcrumb="News" />
      <ComingSoon 
        title="News & Events Coming Soon" 
        description="Stay tuned for the latest updates, circulars, and event announcements from Milton Public School."
      />
    </main>
  );
}

export default NewsEvents;