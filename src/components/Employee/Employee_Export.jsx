import React, { useState } from 'react';
import { RiUploadCloudFill } from "react-icons/ri";
import { FaFileExport, FaChevronRight } from 'react-icons/fa';

const EmployeeExport = ({ show, onClose }) => {
  const [exportFormat, setExportFormat] = useState('xlsx');

  if (!show) return null;

  const handleClose = () => {
    if (typeof onClose === 'function') onClose();
  };

  const handleExport = async () => {
    try {
      // TODO: Replace with your actual export endpoint
      // const response = await axios.get(`/api/export-employees?format=${exportFormat}`);
      // const blob = new Blob([response.data]);
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = `employees.${exportFormat}`;
      // a.click();
      
      handleClose();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <div className="employee-modal-backdrop">
      <div className="employee-modal employee-export-modal">
        <div className="employee-modal-header">
          <h4>Export Employees</h4>
          <button className="back-btn" type="button" onClick={handleClose}>
            Return <FaChevronRight />
          </button>
        </div>

        <div className="employee-modal-content">
          <div className="export-header">
            <RiUploadCloudFill size={64} className="export-icon" />
            <h5 className="export-title">Export Employee Data</h5>
            <p className="export-subtitle">Choose your preferred format</p>
          </div>

          <div className="export-options">
            <div className="export-format-group">
              <label className="export-format-label">
                <input
                  type="radio"
                  name="exportFormat"
                  value="xlsx"
                  checked={exportFormat === 'xlsx'}
                  onChange={(e) => setExportFormat(e.target.value)}
                />
                <span className="export-format-text">
                  <FaFileExport className="format-icon" />
                  Excel (.xlsx)
                </span>
              </label>

              <label className="export-format-label">
                <input
                  type="radio"
                  name="exportFormat"
                  value="csv"
                  checked={exportFormat === 'csv'}
                  onChange={(e) => setExportFormat(e.target.value)}
                />
                <span className="export-format-text">
                  <FaFileExport className="format-icon" />
                  CSV (.csv)
                </span>
              </label>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="export-file-btn" onClick={handleExport} >
              Export
            </button>
            <button type="button" className="close-employee-btn" onClick={handleClose} >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeExport;