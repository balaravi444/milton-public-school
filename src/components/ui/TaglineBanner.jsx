import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './TaglineBanner.css';

function TaglineBanner() {
  return (
    <section className="tagline-banner">
      <div className="container">
        <motion.div 
          className="tagline-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="tagline-quote-icon" size={64} />
          <h2 className="tagline-text">
            Education is most powerful weapon which you can use to change the world
          </h2>
          <div className="tagline-divider"></div>
          <p className="tagline-author">Milton Public School, Manvi</p>
        </motion.div>
      </div>
    </section>
  );
}

export default TaglineBanner;
