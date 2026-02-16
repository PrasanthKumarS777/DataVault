import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import NotificationPanel from '../components/NotificationPanel';
import CalendarModal from '../components/CalendarModal';
import ProfileMenu from '../components/ProfileMenu';
import { uploadCSV, fetchData, searchData } from '../utils/api';
import { exportToCSV } from '../utils/exportCSV';
import { useTheme } from '../context/ThemeContext';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  
  const [stats, setStats] = useState({
    totalRecords: 0,
    totalSize: '0 KB',
    lastBackup: 'Never'
  });
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    loadData();
    
    if (autoRefresh) {
      const interval = setInterval(() => {
        loadData(true);
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const loadData = async (silent = false) => {
    try {
      setLoading(true);
      const result = await fetchData();
      setData(result);
      setFilteredData(result);
      setStats({
        totalRecords: result.length,
        totalSize: `${(result.length * 0.5).toFixed(2)} KB`,
        lastBackup: new Date().toLocaleString()
      });
      setLastRefresh(new Date());
      
      if (silent && result.length > 0) {
        toast.success('Data refreshed!', { duration: 2000 });
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      const loadingToast = toast.loading('Uploading file...');
      await uploadCSV(file);
      toast.dismiss(loadingToast);
      toast.success('✓ Upload successful!');
      await loadData();
    } catch (error) {
      toast.error('✗ Upload failed. Check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setFilteredData(data);
      return;
    }

    try {
      setLoading(true);
      const result = await searchData(searchQuery);
      setFilteredData(result);
      toast.success(`Found ${result.length} results`);
    } catch (error) {
      console.error('Error searching:', error);
      toast.error('Search failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (index) => {
    const newData = filteredData.filter((_, i) => i !== index);
    setFilteredData(newData);
    setData(newData);
    setStats({
      ...stats,
      totalRecords: newData.length
    });
    toast.success('Record deleted');
  };

  const handleBulkDelete = () => {
    if (selectedRows.length === 0) {
      toast.error('No rows selected');
      return;
    }
    
    const newData = filteredData.filter((_, i) => !selectedRows.includes(i));
    setFilteredData(newData);
    setData(newData);
    setSelectedRows([]);
    setStats({
      ...stats,
      totalRecords: newData.length
    });
    toast.success(`Deleted ${selectedRows.length} records`);
  };

  const handleExport = () => {
    const dataToExport = selectedRows.length > 0 
      ? filteredData.filter((_, i) => selectedRows.includes(i))
      : filteredData;
    
    if (dataToExport.length === 0) {
      toast.error('No data to export');
      return;
    }
    
    exportToCSV(dataToExport, 'datavault_export');
    toast.success('Data exported successfully!');
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    const sorted = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    
    setFilteredData(sorted);
    setSortConfig({ key, direction });
  };

  const toggleRowSelection = (index) => {
    setSelectedRows(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const selectAllRows = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map((_, i) => i));
    }
  };

  return (
    <div className="dashboard">
      {/* Top Header */}
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Welcome Back! 🔥</h2>
          <p className="dashboard-subtitle">Here's what's happening with your data today</p>
        </div>
        <div className="header-actions">
          <button 
            onClick={toggleTheme}
            className="icon-button"
            title="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button 
            onClick={() => setAutoRefresh(!autoRefresh)}
            className="icon-button"
            title={autoRefresh ? 'Disable Auto-refresh' : 'Enable Auto-refresh'}
            style={{
              background: autoRefresh ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
              borderColor: autoRefresh ? '#10b981' : '#ef4444'
            }}
          >
            {autoRefresh ? '🔄' : '⏸️'}
          </button>
          <button 
            onClick={() => setShowCalendar(!showCalendar)}
            className="icon-button"
          >
            📅
          </button>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="icon-button notification-btn"
          >
            🔔
            <span className="notification-badge">3</span>
          </button>
          <div 
            onClick={() => setShowProfile(!showProfile)}
            className="user-avatar"
            style={{ cursor: 'pointer' }}
          >
            PK
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Total Records</span>
            <div className="stat-icon">💾</div>
          </div>
          <div className="stat-value">{stats.totalRecords.toLocaleString()}</div>
          <div className="stat-footer">
            <span className="stat-change positive">↗ Active</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Data Size</span>
            <div className="stat-icon">📦</div>
          </div>
          <div className="stat-value">{stats.totalSize}</div>
          <div className="stat-footer">
            <span className="stat-change">Storage used</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Last Updated</span>
            <div className="stat-icon">⏰</div>
          </div>
          <div className="stat-value-small">{stats.lastBackup}</div>
          <div className="stat-footer">
            <span className="stat-change positive">↗ Synced</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">API Status</span>
            <div className="stat-icon">🔌</div>
          </div>
          <div className="stat-value-small">Connected</div>
          <div className="stat-footer">
            <span className="stat-change positive">↗ Healthy</span>
          </div>
        </div>
      </div>

      {/* Auto-refresh Status Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(20px)',
        borderRadius: '12px',
        marginBottom: '2rem',
        border: '1px solid rgba(100, 116, 139, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.25rem' }}>{autoRefresh ? '🟢' : '🔴'}</span>
          <span style={{ color: '#f1f5f9', fontWeight: 600 }}>
            {autoRefresh ? 'Auto-refresh enabled (every 30s)' : 'Auto-refresh disabled'}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            Last updated: {lastRefresh.toLocaleTimeString()}
          </span>
          <button 
            onClick={() => loadData()}
            className="search-button"
            style={{ padding: '0.5rem 1.25rem' }}
          >
            🔄 Refresh Now
          </button>
        </div>
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        <h3 className="section-title">Upload CSV Data</h3>
        <div className="upload-dropzone">
          <div className="upload-icon">📁</div>
          <p className="upload-text">Drag and drop your CSV file here</p>
          <p className="upload-subtext">or click to browse</p>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="file-input"
            id="file-upload"
            disabled={loading}
          />
          <label htmlFor="file-upload">
            <span className="upload-button">
              {loading ? 'Uploading...' : 'Choose File'}
            </span>
          </label>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="search-section">
        <h3 className="section-title">Search & Filter Data</h3>
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="🔍 Search data..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
          <button onClick={() => { setSearchQuery(''); loadData(); }} className="reset-button">
            Reset
          </button>
          <button 
            onClick={handleExport} 
            className="search-button"
            disabled={filteredData.length === 0}
            style={{ 
              background: filteredData.length === 0 ? '#475569' : '#10b981',
              cursor: filteredData.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            📥 Export {selectedRows.length > 0 ? `(${selectedRows.length})` : ''}
          </button>
          {selectedRows.length > 0 && (
            <button 
              onClick={handleBulkDelete}
              className="search-button"
              style={{ background: '#ef4444' }}
            >
              🗑️ Delete ({selectedRows.length})
            </button>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="table-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 className="section-title" style={{ marginBottom: 0 }}>Data Records</h3>
          {filteredData.length > 0 && (
            <button 
              onClick={selectAllRows}
              className="reset-button"
              style={{ padding: '0.5rem 1rem' }}
            >
              {selectedRows.length === filteredData.length ? '☐ Deselect All' : '☑ Select All'}
            </button>
          )}
        </div>
        {loading ? (
          <div className="loading-text">Loading...</div>
        ) : (
          <DataTable 
            data={filteredData} 
            onDelete={handleDelete}
            selectedRows={selectedRows}
            onRowSelect={toggleRowSelection}
            onSort={handleSort}
            sortConfig={sortConfig}
          />
        )}
      </div>

      {/* Modals */}
      <NotificationPanel 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
      <CalendarModal 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)} 
      />
      <ProfileMenu 
        isOpen={showProfile} 
        onClose={() => setShowProfile(false)} 
      />
    </div>
  );
};

export default Dashboard;
