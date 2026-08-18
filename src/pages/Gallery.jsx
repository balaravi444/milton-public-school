import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import PageHeader from '../components/ui/PageHeader';
import { galleryData } from '../data/galleryData';
import './Gallery.css';

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'classroom', label: 'Classroom' },
  { id: 'sports', label: 'Sports' },
  { id: 'karate', label: 'Karate' },
  { id: 'ncc', label: 'NCC' },
  { id: 'cultural', label: 'Events & Cultural' },
  { id: 'school-trips', label: 'School Trips' },
  { id: 'student-life', label: 'Student Life' },
  { id: 'independence-day', label: 'Independence Day' },
  { id: 'other', label: 'Others' },
];

function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryCategory = searchParams.get('category');
  
  const activeCategory = queryCategory || 'all';
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const handleFilterClick = (categoryId) => {
    setSearchParams({ category: categoryId });
  };

  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <main className="gallery-page">
      <PageHeader title="School Gallery" breadcrumb="Gallery" />
      
      <section className="section gallery-section">
        <div className="container">
          
          {/* Filters */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleFilterClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Uniform Grid */}
          <motion.div layout className="gallery-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="gallery-image-wrapper">
                    <img 
                      loading="lazy" 
                      src={image.src} 
                      alt={image.alt} 
                      style={image.objectPosition ? { objectPosition: image.objectPosition } : {}}
                    />
                  </div>
                  <div className="gallery-caption">
                    {categories.find(c => c.id === image.category)?.label || 'Gallery Image'}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="gallery-empty">
              <p>No photos found for this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={filteredImages.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </main>
  );
}

export default Gallery;