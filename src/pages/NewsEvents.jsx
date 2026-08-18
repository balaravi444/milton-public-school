import { useState, useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { newsData } from '../data/newsData';
import { calendarData } from '../data/calendarData';
import './NewsEvents.css';

function NewsEvents() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('news');

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <main className="news-events-page">
      <PageHeader title="News & Events" breadcrumb="News" />
      
      <div className="news-container">
        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            News & Media
          </button>
          <button 
            className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            Academic Calendar 2026-27
          </button>
        </div>

        {activeTab === 'news' && (
          <div className="news-grid animate-fade-in">
            {newsData.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-image-container">
                  <div className="news-badge">News</div>
                  <img loading="lazy" src={item.image} alt={item.englishTranslation} className="news-image" />
                </div>
                
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-newspaper">{item.newspaper}</span>
                  </div>
                  
                  <h3 className="news-title-kannada">{item.kannadaTitle}</h3>
                  <h4 className="news-title-english">{item.englishTranslation}</h4>
                  
                  <p className="news-description">{item.description}</p>
                  
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    View Clipping
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="calendar-section animate-fade-in">
            <div className="calendar-intro">
              <h2>Event & Holiday Calendar 2026–2027</h2>
              <p>Stay updated with our comprehensive list of academic events, national holidays, and state festivals for the current academic year.</p>
            </div>

            {calendarData.map((term, index) => (
              <div key={index} className="term-block">
                <h3 className="term-title">{term.term}</h3>
                <div className="timeline">
                  {term.events.map((event, eventIdx) => (
                    <div key={eventIdx} className={`timeline-item ${event.type}`}>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-date">
                          <strong>{event.date}</strong> 
                          <span className="timeline-day">({event.day})</span>
                        </div>
                        <div className="timeline-details">
                          <h4>{event.title}</h4>
                          <p>{event.description}</p>
                        </div>
                        <div className={`event-badge ${event.type}`}>
                          {event.type === 'holiday' ? 'Holiday' : event.type === 'vacation' ? 'Vacation' : 'School Event'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <img loading="lazy" src={selectedImage} alt="Full newspaper clipping" className="modal-image" />
          </div>
        </div>
      )}
    </main>
  );
}

export default NewsEvents;