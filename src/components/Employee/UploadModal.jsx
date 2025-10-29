import React, { useRef, useState } from 'react';
import { RiUploadCloudFill } from "react-icons/ri";
import { FaPlusCircle } from 'react-icons/fa';
import './Employee.css';

const UploadModal = ({ show, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  if (!show) return null;

  return (
    <div className="employee-modal-backdrop" onClick={onClose}>
      <div className="employee-upload-modal" onClick={e => e.stopPropagation()}>
        <div className="employee-upload-modal-title">
          Upload Employee List
        </div>
        <div className="employee-upload-icon">
          <RiUploadCloudFill size={20} />
        </div>
        <label htmlFor="employee-upload" className="employee-upload-label">
          <span style={{ display: 'inline-flex', alignItems: 'center', color: '#4bb6fd' }}>
            <FaPlusCircle size={20} style={{ marginRight: '8px' }} />
            {selectedFile ? selectedFile.name : 'Select File'}
          </span>
          <input
            id="employee-upload"
            type="file"
            className="employee-upload-input"
            ref={fileInputRef}
            onChange={e => setSelectedFile(e.target.files[0])}
          />
        </label>
        <div className="employee-upload-actions">
          <button type="button" className="upload-employee-btn" onClick={() => { onClose(); setSelectedFile(null); }} disabled={!selectedFile}>Upload</button>
          <button type="button" className="close-employee-btn" onClick={() => { onClose(); setSelectedFile(null); }}> Close </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
