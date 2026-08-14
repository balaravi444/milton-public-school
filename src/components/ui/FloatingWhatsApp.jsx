import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

function FloatingWhatsApp() {
  const phoneNumber = '918088291165'; // Added country code for India (+91)
  const message = 'Hello! I would like to know more about Milton Public School.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} color="#ffffff" />
      <span className="tooltip">Chat with us!</span>
    </a>
  );
}

export default FloatingWhatsApp;
