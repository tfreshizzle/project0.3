import React, { useState } from 'react';
import TherapistCard from './TherapistCard.jsx';
import Map from './Map.jsx';
import TherapistForm from './TherapistForm.jsx';
import LandingPage from './LandingPage.jsx';
import './index.css';

function App() {
  const [markers, setMarkers] = useState([]);
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'map', 'form'

  const therapists = [
    { id: 1, name: "רונן", location: "ירושלים", phone: "123-456-7890", about: "נטורופתיה" },
    { id: 2, name: "אליס", location: "תל אביב", phone: "234-567-8901", about: "NLP" },
    { id: 3, name: "בוב", location: "רמת גן", phone: "345-678-9012", about: "פסיכולוגיה" },
    { id: 4, name: "צ'רלי", location: "באר שבע", phone: "456-789-0123", about: "פסיכותרפיה" },
    { id: 5, name: "דוד", location: "ירושלים", phone: "567-890-1234", about: "ייעוץ זוגי" },
    { id: 6, name: "אוה", location: "תל אביב", phone: "678-901-2345", about: "תרפיה באומנות" },
    { id: 7, name: "פרנק", location: "רמת גן", phone: "789-012-3456", about: "טיפול התנהגותי" },
    { id: 8, name: "חנה", location: "באר שבע", phone: "890-123-4567", about: "טיפול משפחתי" },
    { id: 9, name: "איוואן", location: "ירושלים", phone: "901-234-5678", about: "פסיכואנליזה" },
    { id: 10, name: "יוליה", location: "תל אביב", phone: "012-345-6789", about: "פסיכודרמה" },
    { id: 11, name: "קווין", location: "רמת גן", phone: "123-456-7891", about: "תרפיה בתנועה" },
    { id: 12, name: "לילי", location: "באר שבע", phone: "234-567-8910", about: "טיפול קוגניטיבי" },
    { id: 13, name: "מייק", location: "ירושלים", phone: "345-678-9012", about: "הדרכת הורים" },
    { id: 14, name: "ניקול", location: "תל אביב", phone: "456-789-0123", about: "תרפיה במוזיקה" }
  ];

  const handleCardClick = (location) => {
    setMarkers((prevMarkers) =>
      prevMarkers.includes(location)
        ? prevMarkers.filter((marker) => marker !== location)
        : [...prevMarkers, location]
    );
  };

  const handleFormSubmit = () => {
    setCurrentPage('map'); // Redirect to map page after form submission
  };

  return (
    <div className="container">
      <div className="header">
        <button className="form-toggle-button" onClick={() => setCurrentPage('landing')}>
          בית
        </button>
        <button className="form-toggle-button" onClick={() => setCurrentPage('map')}>
          הצג מפה
        </button>
        <button className="form-toggle-button" onClick={() => setCurrentPage('form')}>
          הוסף מטפל חדש
        </button>
      </div>
      {currentPage === 'landing' && <LandingPage navigateToMap={() => setCurrentPage('map')} />}
      {currentPage === 'map' && (
        <div className="main-content">
          <div className="list-section">
            {therapists.map((therapist) => (
              <div onClick={() => handleCardClick(therapist.location)} key={therapist.id}>
                <TherapistCard therapist={therapist} />
              </div>
            ))}
          </div>
          <div className="map-section">
            <Map markers={markers} />
          </div>
        </div>
      )}
      {currentPage === 'form' && <TherapistForm onFormSubmit={handleFormSubmit} />}
    </div>
  );
}
export default App;
