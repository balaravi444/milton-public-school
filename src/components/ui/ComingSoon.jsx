import { Clock, Wrench } from 'lucide-react';
import './ComingSoon.css';

function ComingSoon({ title, description }) {
  return (
    <div className="coming-soon-container section-padding">
      <div className="container">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
            <Wrench size={48} />
          </div>
          <h2>{title || 'Section Update in Progress'}</h2>
          <p>
            {description || 'We are currently organizing the content and media for this section. Please check back soon for the latest updates from Milton Public School!'}
          </p>
          <div className="coming-soon-status">
            <Clock size={16} />
            <span>Content coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
