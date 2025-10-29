import React, { useRef, useState } from 'react';
import { RiDownloadCloudFill } from "react-icons/ri";
import { FaPlusCircle, FaChevronRight } from 'react-icons/fa';
import './EmployeeStyle.css';

const EmployeeImport = ({ show, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  if (!show) return null;

  const handleClose = () => {
    setSelectedFile(null);
    if (typeof onClose === 'function') onClose();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // TODO: Replace with your actual upload endpoint
      // const response = await axios.post('/api/import-employees', formData);
      
      handleClose();
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="employee-modal-backdrop">
      <div className="employee-modal employee-import-modal">
        <div className="employee-modal-header">
          <h4>Import Employees</h4>
          <button className="back-btn" type="button" onClick={handleClose}>
            Return <FaChevronRight />
          </button>
        </div>

        <div className="employee-modal-content">
          <div className="import-header">
            <RiDownloadCloudFill size={64} className="import-icon" />
            <h5 className="import-title">Upload Employee Data</h5>
            <p className="import-subtitle">Supported formats: .xlsx, .xls, .csv</p>
          </div>

          <div className="upload-area">
            <input
              type="file"
              id="employee-file-upload"
              accept=".xlsx,.xls,.csv"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="file-input-hidden"
              ref={fileInputRef}
            />
            
            <label htmlFor="employee-file-upload" className="upload-label">
              <FaPlusCircle className="upload-icon" />
              {selectedFile ? selectedFile.name : 'Choose File'}
            </label>

            {selectedFile && (
              <div className="file-info">
                File size: {(selectedFile.size / 1024).toFixed(2)} KB
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button type="button" className="import-file-btn" onClick={handleUpload} disabled={!selectedFile}>
              Import
            </button>
            <button type="button" className="close-employee-btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeImport;