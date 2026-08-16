import { useState, useEffect } from 'react';
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
];

function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryCategory = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(queryCategory || 'all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    if (queryCategory && queryCategory !== activeCategory) {
      setActiveCategory(queryCategory);
    }
  }, [queryCategory]);

  const handleFilterClick = (categoryId) => {
    setActiveCategory(categoryId);
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
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, y: 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.1 }}
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