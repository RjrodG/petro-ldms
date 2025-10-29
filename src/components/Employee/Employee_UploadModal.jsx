import React, { useRef, useState } from 'react';
import { RiUploadCloudFill } from "react-icons/ri";
import { FaPlusCircle } from 'react-icons/fa';
import { FaChevronRight } from "react-icons/fa";
import './EmployeeStyle.css';

const UploadModal = ({ show, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
    const [showAddForm, setShowAddForm] = useState(false);
  
const openAdd = () => {
    setEditingId(null);
    setForm({
      competencyTitle: '',
      trainingTitle: '',
      startDate: '',
      endDate: '',
      venue: '',
      type: '',
      category: '',
      objectives: '',
      certificateFile: null,
      personnelOrderFile: null,
    });
    setShowAddForm(true);
  };

  if (!show) return null;

  return (
          <div className="iht-container">
        <div className="iht-header">
          
          {!show && (
            <button type="button" className="iht-add-btn" onClick={openAdd}>+ Add Training</button>
          )}
        </div>

        {showAddForm && (
    <div className="employee-modal-backdrop" onClick={onClose}>
      <div className="employee-upload-modal" onClick={e => e.stopPropagation()}>
        <div className='employee-modal-header'>
          <h4>Import Training</h4>
          <button className='back-btn' type="button" onClick={() => setShowAddForm(false)}>Return <FaChevronRight /></button>
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
        )}
    </div>
  );
};

export default UploadModal;
