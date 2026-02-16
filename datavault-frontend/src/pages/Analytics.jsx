import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchData } from '../utils/api';

const Analytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const monthlyData = [
    { month: 'Jan', uploads: 12, records: 450 },
    { month: 'Feb', uploads: 19, records: 680 },
    { month: 'Mar', uploads: 15, records: 520 },
    { month: 'Apr', uploads: 25, records: 890 },
    { month: 'May', uploads: 22, records: 750 },
    { month: 'Jun', uploads: 30, records: 1020 },
  ];

  const dataTypeDistribution = [
    { name: 'CSV Files', value: 45, color: '#3b82f6' },
    { name: 'JSON Files', value: 25, color: '#10b981' },
    { name: 'Excel Files', value: 20, color: '#f59e0b' },
    { name: 'Other', value: 10, color: '#ef4444' },
  ];

  const storageData = [
    { category: 'Documents', size: 340 },
    { category: 'Data Files', size: 580 },
    { category: 'Backups', size: 220 },
    { category: 'Archives', size: 160 },
  ];

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading-text">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Analytics Dashboard</h2>
          <p className="dashboard-subtitle">Deep insights into your data trends</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Upload Trend</span>
            <div className="stat-icon">📈</div>
          </div>
          <div className="stat-value">+24%</div>
          <div className="stat-footer">
            <span className="stat-change positive">↗ Last 30 days</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Data Quality</span>
            <div className="stat-icon">✓</div>
          </div>
          <div className="stat-value">98.5%</div>
          <div className="stat-footer">
            <span className="stat-change positive">↗ Excellent</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Active Users</span>
            <div className="stat-icon">👥</div>
          </div>
          <div className="stat-value">142</div>
          <div className="stat-footer">
            <span className="stat-change positive">↗ +12 this week</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Total Records</span>
            <div className="stat-icon">💾</div>
          </div>
          <div className="stat-value">{data.length}</div>
          <div className="stat-footer">
            <span className="stat-change">In database</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        <div className="upload-section">
          <h3 className="section-title">Upload Trends (6 Months)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(30, 41, 59, 0.95)', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="uploads" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="records" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="upload-section">
          <h3 className="section-title">Data Type Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataTypeDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {dataTypeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(30, 41, 59, 0.95)', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="upload-section">
          <h3 className="section-title">Storage Usage by Category (MB)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={storageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="category" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(30, 41, 59, 0.95)', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
              <Bar dataKey="size" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="upload-section">
          <h3 className="section-title">Recent Activity Timeline</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(59, 130, 246, 0.2)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem'
              }}>📤</div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Data uploaded: sales_2024.csv
                </p>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>2 hours ago • 1,245 records</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(16, 185, 129, 0.2)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem'
              }}>🔍</div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Search performed: customer records
                </p>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>5 hours ago • 847 results</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(245, 158, 11, 0.2)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem'
              }}>📥</div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Export completed: quarterly_report.csv
                </p>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>1 day ago • 3,421 records</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(139, 92, 246, 0.2)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem'
              }}>💾</div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Backup created: all_data.zip
                </p>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>2 days ago • 12.4 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
