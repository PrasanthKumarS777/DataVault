import React from 'react';

const DataTable = ({ data, onDelete, selectedRows = [], onRowSelect, onSort, sortConfig }) => {
  if (!data || data.length === 0) {
    return <div className="empty-text">No data available. Upload a CSV file to get started.</div>;
  }

  const headers = Object.keys(data[0]);

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return '⇅';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: '50px' }}>
              <input 
                type="checkbox" 
                checked={selectedRows.length === data.length && data.length > 0}
                onChange={() => {}}
                style={{ cursor: 'pointer', width: '18px', height: '18px' }}
              />
            </th>
            {headers.map((header) => (
              <th 
                key={header}
                onClick={() => onSort && onSort(header)}
                style={{ cursor: onSort ? 'pointer' : 'default', userSelect: 'none' }}
              >
                {header} {onSort && <span style={{ marginLeft: '0.5rem' }}>{getSortIndicator(header)}</span>}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selectedRows.includes(index)}
                  onChange={() => onRowSelect(index)}
                  style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                />
              </td>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
              <td>
                <button 
                  onClick={() => onDelete(index)} 
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
