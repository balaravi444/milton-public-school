import PageHeader from '../components/ui/PageHeader';
import ComingSoon from '../components/ui/ComingSoon';

function Gallery() {
  return (
    <main className="gallery-page">
      <PageHeader title="School Gallery" breadcrumb="Gallery" />
      <ComingSoon 
        title="Gallery Coming Soon" 
        description="We are currently curating the best moments from our school events, educational trips, and daily campus life. The photo gallery will be available shortly."
      />
    </main>
  );
}

export default Gallery;