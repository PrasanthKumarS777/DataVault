import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuroraBackground from '../components/AuroraBackground';
import RollingCube from '../components/RollingCube';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        toast.success('Welcome to DataVault! 🚀');
        navigate('/dashboard');
      } else {
        toast.error('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setEmail('pankaj@datavault.com');
    setPassword('demo123');
    setTimeout(() => {
      login('pankaj@datavault.com', 'demo123');
      toast.success('Welcome to DataVault! 🚀');
      navigate('/dashboard');
    }, 500);
  };

  return (
    <>
      <AuroraBackground />
      <RollingCube />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <div className="logo-icon">📊</div>
              <h1>DATAVAULT</h1>
            </div>
            <p className="login-subtitle">Next-Gen Data Management Platform</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="login-input"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="login-input"
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? '🔄 Signing in...' : '🚀 Sign In'}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" onClick={handleDemoLogin} className="demo-button">
              ⚡ Quick Demo Login
            </button>
          </form>

          <div className="login-footer">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>

        <div className="login-features">
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Secure</h3>
            <p>Enterprise-grade security</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Fast</h3>
            <p>Lightning-fast data processing</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Analytics</h3>
            <p>Powerful insights</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
