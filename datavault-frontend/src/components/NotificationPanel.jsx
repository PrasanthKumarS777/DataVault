import React from 'react';

const NotificationPanel = ({ isOpen, onClose }) => {
  const notifications = [
    { id: 1, type: 'success', message: 'Data uploaded successfully', time: '2 min ago' },
    { id: 2, type: 'info', message: 'Backup completed', time: '1 hour ago' },
    { id: 3, type: 'warning', message: 'Storage 80% full', time: '3 hours ago' },
  ];

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
        top: '80px',
        right: '20px',
        width: '380px',
        maxHeight: '500px',
        background: 'rgba(30, 41, 59, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #334155',
        borderRadius: '12px',
        padding: '1.5rem',
        zIndex: 1000,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#f1f5f9', fontSize: '1.25rem', fontWeight: 600 }}>Notifications</h3>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {notifications.map(notif => (
            <div 
              key={notif.id}
              style={{
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.8)',
                borderRadius: '8px',
                borderLeft: `3px solid ${
                  notif.type === 'success' ? '#10b981' : 
                  notif.type === 'warning' ? '#f59e0b' : '#3b82f6'
                }`
              }}
            >
              <p style={{ color: '#f1f5f9', fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                {notif.message}
              </p>
              <p style={{ color: '#64748b', fontSize: '0.8125rem' }}>{notif.time}</p>
            </div>
          ))}
        </div>

        <button 
          style={{
            width: '100%',
            marginTop: '1rem',
            padding: '0.75rem',
            background: '#334155',
            color: '#f1f5f9',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Mark all as read
        </button>
      </div>
    </>
  );
};

export default NotificationPanel;
