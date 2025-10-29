import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faClipboardList, faCalendarAlt, faBuilding, faTag, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FaChevronRight } from "react-icons/fa";

const EmployeeInHouseTraining = ({ show, setShow, employeeId }) => {
  const [trainings, setTrainings] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
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

  // Sample options for dropdowns
  const competencyOptions = ['Competency 1', 'Competency 2', 'Competency 3'];
  const typeOptions = ['Type 1', 'Type 2', 'Type 3'];
  const categoryOptions = ['Category 1', 'Category 2', 'Category 3'];

  useEffect(() => {
    if (!show) return;
    // TODO: replace with axios call to load trainings for employeeId
    setTrainings([
      { id: 1, title: 'Fire Safety', date: '2024-05-12', duration: '3 hrs', provider: 'Internal' },
      { id: 2, title: 'Data Privacy', date: '2024-06-20', duration: '2 hrs', provider: 'External' }
    ]);
  }, [show, employeeId]);

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

  const handleSave = (e) => {
    e.preventDefault();
    // Handle saving logic here
    setShowAddForm(false);
    setEditingId(null);
  };

  // If parent intentionally hides this panel, do not render the content
  if (!show) return null;

  return (
    <>
      <div className="iht-container">
        <div className="iht-header">
          <div className="iht-total" aria-live="polite" title="Total trainings attended">
            <span className="iht-total-label"> Total No. of In-house Training{trainings.length !== 1 ? 's: ' : ': '}</span>
            <span className="iht-total-count">{trainings.length}</span>
          </div>
          {!showAddForm && (
            <button type="button" className="iht-add-btn" onClick={openAdd}>+ Add Training</button>
          )}
        </div>

        {/* Modal for Add/Edit Training */}
        {showAddForm && (
          <div className="employee-modal-backdrop" onClick={() => setShowAddForm(false)}>
            <div className="employee-modal" onClick={e => e.stopPropagation()}>
              <div className='employee-modal-header'>
                <h4>{editingId ? 'Edit Training' : 'Add Training'}</h4>
                <button className='back-btn' type="button" onClick={() => setShowAddForm(false)}>Return <FaChevronRight /></button>
              </div>

              <form className="eht-form" onSubmit={handleSave}>
                <div className="form-grid">

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faClipboardList} />
                      <span>Training/Program Title</span>
                    </div>
                    <input
                      required
                      value={form.trainingTitle}
                      onChange={e => setForm(f => ({ ...f, trainingTitle: e.target.value }))}
                    />
                  </label>

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faUserCheck} />
                      <span>Competency Title</span>
                    </div>
                    <select
                      required
                      value={form.competencyTitle}
                      onChange={e => setForm(f => ({ ...f, competencyTitle: e.target.value }))}
                    >
                      <option value="">Select Competency</option>
                      {competencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faBuilding} />
                      <span>Venue</span>
                    </div>                    
                    <input
                      required
                      value={form.venue}
                      onChange={e => setForm(f => ({ ...f, venue: e.target.value }))}
                    />
                  </label>

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>Start Date</span>
                    </div>
                    <input
                      type="date"
                      required
                      value={form.startDate}
                      onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                    />
                  </label>

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>End Date</span>
                    </div>
                    <input
                      type="date"
                      required
                      value={form.endDate}
                      onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
                    />
                  </label>

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faTag} />
                      <span>Type</span>
                    </div>
                    <select
                      required
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    >
                      <option value="">Select Type</option>
                      {typeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <div className="label-text">
                      <FontAwesomeIcon icon={faTag} />
                      <span>Category</span>
                    </div>
                    <select
                      required
                      value={form.category}
                      onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    >
                      <option value="">Select Category</option>
                      {categoryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>

                  <label className="objectives-field">
                    <div className="label-text">
                      <FontAwesomeIcon icon={faClipboardList} />
                      <span>Objectives</span>
                    </div>
                    <textarea
                      required
                      value={form.objectives}
                      onChange={e => setForm(f => ({ ...f, objectives: e.target.value }))}
                    />
                  </label>
                  
                  <div className="file-upload-row">
                    <label>
                      <div className="label-text">
                        <FontAwesomeIcon icon={faFileUpload} />
                        <span>Upload Certificate</span>
                      </div>
                      <input
                        type="file"
                        onChange={e => setForm(f => ({ ...f, certificateFile: e.target.files[0] }))}
                      />
                    </label>

                    <label>
                      <div className="label-text">
                        <FontAwesomeIcon icon={faFileUpload} />
                        <span>Upload Personnel Order</span>
                      </div>
                      <input
                        type="file"
                        onChange={e => setForm(f => ({ ...f, personnelOrderFile: e.target.files[0] }))}
                      />
                    </label>
                  </div>
                    
                </div>

                <div className="iht-modal-actions">
                  <button type="submit" className="add-employee-iht-btn">Save</button>
                  <button type="button" className="close-employee-iht-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeInHouseTraining;