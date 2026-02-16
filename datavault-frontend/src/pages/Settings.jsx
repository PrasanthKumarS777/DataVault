import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    autoBackup: false,
    darkMode: true,
    dataRetention: '30'
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Settings</h2>
          <p className="dashboard-subtitle">Manage your preferences</p>
        </div>
      </div>

      <div className="upload-section">
        <h3 className="section-title">General Settings</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '8px' }}>
            <div>
              <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>Notifications</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Receive email notifications</p>
            </div>
            <button 
              onClick={() => handleToggle('notifications')}
              style={{
                width: '50px',
                height: '28px',
                borderRadius: '14px',
                background: settings.notifications ? '#3b82f6' : '#475569',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s'
              }}
            >
              <span style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'white',
                top: '4px',
                left: settings.notifications ? '26px' : '4px',
                transition: 'all 0.2s'
              }}></span>
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '8px' }}>
            <div>
              <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>Auto Backup</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Automatically backup data daily</p>
            </div>
            <button 
              onClick={() => handleToggle('autoBackup')}
              style={{
                width: '50px',
                height: '28px',
                borderRadius: '14px',
                background: settings.autoBackup ? '#3b82f6' : '#475569',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s'
              }}
            >
              <span style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'white',
                top: '4px',
                left: settings.autoBackup ? '26px' : '4px',
                transition: 'all 0.2s'
              }}></span>
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '8px' }}>
            <div>
              <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>Data Retention</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>How long to keep data</p>
            </div>
            <select 
              value={settings.dataRetention}
              onChange={(e) => setSettings({ ...settings, dataRetention: e.target.value })}
              style={{
                background: '#334155',
                color: '#f1f5f9',
                border: '1px solid #475569',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <option value="7">7 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="365">1 year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="upload-section">
        <h3 className="section-title">Account</h3>
        <button className="upload-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
