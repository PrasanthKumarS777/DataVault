import React, { useState } from 'react';

const CalendarModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(selectedDate);
  const days = [];
  
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const changeMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }}
      />
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        background: 'rgba(30, 41, 59, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #334155',
        borderRadius: '12px',
        padding: '1.5rem',
        zIndex: 1000,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#f1f5f9', fontSize: '1.25rem', fontWeight: 600 }}>
            {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
          </h3>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: 0,
              width: '30px',
              height: '30px'
            }}
          >×</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <button 
            onClick={() => changeMonth(-1)}
            style={{
              background: '#334155',
              border: '1px solid #475569',
              color: '#f1f5f9',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >← Prev</button>
          <button 
            onClick={() => changeMonth(1)}
            style={{
              background: '#334155',
              border: '1px solid #475569',
              color: '#f1f5f9',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >Next →</button>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.5rem'
            }}>
              {day}
            </div>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '0.5rem'
        }}>
          {days.map((day, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '0.75rem',
                borderRadius: '8px',
                background: day ? (day === new Date().getDate() && 
                  selectedDate.getMonth() === new Date().getMonth() && 
                  selectedDate.getFullYear() === new Date().getFullYear() 
                  ? '#3b82f6' 
                  : 'rgba(15, 23, 42, 0.8)') : 'transparent',
                color: day ? '#f1f5f9' : 'transparent',
                cursor: day ? 'pointer' : 'default',
                fontWeight: day === new Date().getDate() ? 600 : 400,
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (day) {
                  e.target.style.background = '#475569';
                }
              }}
              onMouseLeave={(e) => {
                if (day && !(day === new Date().getDate() && 
                  selectedDate.getMonth() === new Date().getMonth() && 
                  selectedDate.getFullYear() === new Date().getFullYear())) {
                  e.target.style.background = 'rgba(15, 23, 42, 0.8)';
                }
              }}
            >
              {day}
            </div>
          ))}
        </div>

        <button 
          onClick={() => setSelectedDate(new Date())}
          style={{
            width: '100%',
            marginTop: '1rem',
            padding: '0.75rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Today
        </button>
      </div>
    </>
  );
};

export default CalendarModal;
