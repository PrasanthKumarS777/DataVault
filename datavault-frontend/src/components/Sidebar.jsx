import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{
      width: '280px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(100, 116, 139, 0.2)',
      borderLeft: 'none',
      borderTop: 'none',
      borderBottom: 'none',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.5rem'
    }}>
      {/* Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: 'linear-gradient(135deg, #a855f7, #ec4899)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}>
          📊
        </div>
        <div>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0
          }}>
            DATAVAULT
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        flex: 1
      }}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.25rem',
            borderRadius: '12px',
            textDecoration: 'none',
            color: isActive ? '#fff' : '#94a3b8',
            background: isActive ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
            border: isActive ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid transparent',
            fontWeight: isActive ? '600' : '500',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          })}
        >
          <span style={{ fontSize: '1.25rem' }}>🏠</span>
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/analytics"
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.25rem',
            borderRadius: '12px',
            textDecoration: 'none',
            color: isActive ? '#fff' : '#94a3b8',
            background: isActive ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
            border: isActive ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid transparent',
            fontWeight: isActive ? '600' : '500',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          })}
        >
          <span style={{ fontSize: '1.25rem' }}>📊</span>
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/settings"
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.25rem',
            borderRadius: '12px',
            textDecoration: 'none',
            color: isActive ? '#fff' : '#94a3b8',
            background: isActive ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
            border: isActive ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid transparent',
            fontWeight: isActive ? '600' : '500',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          })}
        >
          <span style={{ fontSize: '1.25rem' }}>⚙️</span>
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Footer Info */}
      <div style={{
        marginTop: 'auto',
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'rgba(30, 41, 59, 0.6)',
        border: '1px solid rgba(100, 116, 139, 0.2)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '0.75rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>💡</span>
          <span style={{
            color: '#f1f5f9',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}>
            Pro Tip
          </span>
        </div>
        <p style={{
          color: '#94a3b8',
          fontSize: '0.8rem',
          margin: 0,
          lineHeight: '1.5'
        }}>
          Upload CSV files to analyze and visualize your data instantly!
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
