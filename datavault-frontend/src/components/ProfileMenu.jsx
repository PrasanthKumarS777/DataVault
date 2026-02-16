import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProfileMenu = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully! 👋');
    onClose();
    navigate('/login', { replace: true });
  };

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999
        }}
        onClick={onClose}
      />
      <div style={{
        position: 'fixed',
        top: '80px',
        right: '2rem',
        width: '320px',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(100, 116, 139, 0.3)',
        borderRadius: '16px',
        padding: '1.5rem',
        zIndex: 1000,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #00ffff, #00e6e6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#000'
          }}>
            {user?.avatar}
          </div>
          <div>
            <h3 style={{ color: '#f1f5f9', fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem' }}>
              {user?.name}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{user?.email}</p>
            <span style={{
              display: 'inline-block',
              marginTop: '0.5rem',
              padding: '0.25rem 0.75rem',
              background: 'rgba(0, 255, 200, 0.2)',
              color: '#00ffcc',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              {user?.role}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button onClick={() => { navigate('/dashboard'); onClose(); }} style={{
            background: 'rgba(0, 200, 200, 0.1)',
            border: 'none',
            padding: '0.875rem',
            borderRadius: '10px',
            color: '#f1f5f9',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.95rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            <span>🏠</span> Dashboard
          </button>

          <button onClick={() => { navigate('/analytics'); onClose(); }} style={{
            background: 'rgba(0, 200, 200, 0.1)',
            border: 'none',
            padding: '0.875rem',
            borderRadius: '10px',
            color: '#f1f5f9',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.95rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            <span>📊</span> Analytics
          </button>

          <button onClick={() => { navigate('/settings'); onClose(); }} style={{
            background: 'rgba(0, 200, 200, 0.1)',
            border: 'none',
            padding: '0.875rem',
            borderRadius: '10px',
            color: '#f1f5f9',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.95rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            <span>⚙️</span> Settings
          </button>

          <div style={{ height: '1px', background: 'rgba(100, 116, 139, 0.2)', margin: '0.5rem 0' }}></div>

          <button onClick={handleLogout} style={{
            background: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '0.875rem',
            borderRadius: '10px',
            color: '#ef4444',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.95rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            <span>🚪</span> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
