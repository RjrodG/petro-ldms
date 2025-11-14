import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faClipboardList, faCalendarAlt, faBuilding, faTag, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FaChevronRight, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import './EmployeeStyle.css';

const EmployeeOutHouseTraining = ({ show, setShow, employeeId }) => {
  const [trainings, setTrainings] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loadingSave, setLoadingSave] = useState(false);
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

  // keep track of created object URLs to revoke later
  const objectUrlsRef = useRef([]);

  // sample options (replace with real data)
  const competencyOptions = ['Competency 1', 'Competency 2', 'Competency 3'];
  const classificationOptions = ['Training', 'Workshop', 'Orientation / Other LDIs'];
  const categoryOptions = ['Learning and Development (LD)', 'Non-Learning and Development (Non-LD)'];

  useEffect(() => {
    if (!show) return;
    // TODO: fetch out-house trainings for employeeId from server
    setTrainings([
      { id: 1, trainingTitle: 'External Safety Course', startDate: '2024-05-12', endDate: '2024-05-12', venue: 'Vendor Hall', type: 'Training', category: 'Non-LD', certificateFileName: null, certificateUrl: null, personnelFileName: null, personnelUrl: null },
      { id: 2, trainingTitle: 'Third-Party Data Privacy', startDate: '2024-06-20', endDate: '2024-06-20', venue: 'Remote', type: 'Workshop', category: 'LD', certificateFileName: null, certificateUrl: null, personnelFileName: null, personnelUrl: null }
    ]);
  }, [show, employeeId]);

  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach(url => URL.revokeObjectURL(url));
      objectUrlsRef.current = [];
    };
  }, []);

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

  const openEdit = (t) => {
    setEditingId(t.id);
    setForm({
      competencyTitle: t.competencyTitle || '',
      trainingTitle: t.trainingTitle || '',
      startDate: t.startDate || '',
      endDate: t.endDate || '',
      venue: t.venue || '',
      type: t.type || '',
      category: t.category || '',
      objectives: t.objectives || '',
      certificateFile: null,
      personnelOrderFile: null,
    });
    setShowAddForm(true);
  };

  const handleSave = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (loadingSave) return;

    if (!form.trainingTitle || !form.startDate || !form.venue) {
      alert('Please fill required fields: Title, Start Date, Venue.');
      return;
    }

    setLoadingSave(true);
    try {
      let certificateUrl = null;
      let personnelUrl = null;
      const certificateName = form.certificateFile ? form.certificateFile.name : null;
      const personnelName = form.personnelOrderFile ? form.personnelOrderFile.name : null;

      if (form.certificateFile) {
        certificateUrl = URL.createObjectURL(form.certificateFile);
        objectUrlsRef.current.push(certificateUrl);
      }
      if (form.personnelOrderFile) {
        personnelUrl = URL.createObjectURL(form.personnelOrderFile);
        objectUrlsRef.current.push(personnelUrl);
      }

      if (editingId) {
        setTrainings(prev => prev.map(t => {
          if (t.id !== editingId) return t;
          if (form.certificateFile && t.certificateUrl) { URL.revokeObjectURL(t.certificateUrl); }
          if (form.personnelOrderFile && t.personnelUrl) { URL.revokeObjectURL(t.personnelUrl); }
          return {
            ...t,
            ...form,
            trainingTitle: form.trainingTitle,
            certificateFileName: certificateName || t.certificateFileName || null,
            certificateUrl: certificateUrl || t.certificateUrl || null,
            personnelFileName: personnelName || t.personnelFileName || null,
            personnelUrl: personnelUrl || t.personnelUrl || null
          };
        }));
      } else {
        const newId = Date.now();
        const newEntry = {
          id: newId,
          ...form,
          trainingTitle: form.trainingTitle,
          certificateFileName: certificateName,
          certificateUrl,
          personnelFileName: personnelName,
          personnelUrl
        };
        setTrainings(prev => [newEntry, ...prev]);
      }

      // TODO: POST to server (multipart/form-data) to persist files/metadata
      setShowAddForm(false);
      setEditingId(null);
    } catch (err) {
      console.error('Save error', err);
      alert('Failed saving training.');
    } finally {
      setLoadingSave(false);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete training?')) return;
    const t = trainings.find(x => x.id === id);
    if (t) {
      if (t.certificateUrl) { URL.revokeObjectURL(t.certificateUrl); objectUrlsRef.current = objectUrlsRef.current.filter(u => u !== t.certificateUrl); }
      if (t.personnelUrl) { URL.revokeObjectURL(t.personnelUrl); objectUrlsRef.current = objectUrlsRef.current.filter(u => u !== t.personnelUrl); }
    }
    setTrainings(prev => prev.filter(t => t.id !== id));
  };

  // open file in new tab — prefer server file route, fallback to object URL if present
  const handleViewFile = (fileName, fileUrl) => {
    if (fileUrl) {
      window.open(fileUrl, '_blank', 'noopener');
      return;
    }
    if (!fileName) {
      alert('No file available');
      return;
    }
    const url = `/api/files/outhouse/${encodeURIComponent(fileName)}`;
    window.open(url, '_blank', 'noopener');
  };

  if (!show) return null;

  return (
    <>
      <div className="oht-container">
        <div className="oht-header">
          <div className="oht-total" aria-live="polite" title="Total trainings attended">
            <span className="oht-total-label">Total No. of Out-house Training{trainings.length !== 1 ? 's:' : ':'}</span>
            <span className="oht-total-count">{trainings.length}</span>
          </div>

          <div className="oht-header-controls">
            <button type="button" className="oht-add-btn" onClick={openAdd}>+ Add Training</button>
          </div>
        </div>

        <div className="oht-table-wrap">
          <table className="oht-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Start</th>
                <th>End</th>
                <th>Certificate</th>
                <th>Personnel Order</th>
                <th className="oht-actions-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trainings.length === 0 ? (
                <tr><td colSpan="6" className="oht-empty">No trainings found.</td></tr>
              ) : trainings.map(t => (
                <tr key={t.id}>
                  <td className="oht-wrap">{t.trainingTitle}</td>
                  <td className="oht-wrap">{t.startDate}</td>
                  <td className="oht-wrap">{t.endDate}</td>

                  <td className="oht-wrap oht-file-cell">
                    {t.certificateUrl || t.certificateFileName ? (
                      <button
                        type="button"
                        className="oht-action-btn view"
                        onClick={() => handleViewFile(t.certificateFileName, t.certificateUrl)}
                        title={t.certificateFileName || 'View certificate'}
                      >
                        <FaEye />
                      </button>
                    ) : (
                      <span className="oht-no-file">—</span>
                    )}
                  </td>

                  <td className="oht-wrap oht-file-cell">
                    {t.personnelUrl || t.personnelFileName ? (
                      <button
                        type="button"
                        className="oht-action-btn view"
                        onClick={() => handleViewFile(t.personnelFileName, t.personnelUrl)}
                        title={t.personnelFileName || 'View personnel order'}
                      >
                        <FaEye />
                      </button>
                    ) : (
                      <span className="oht-no-file">—</span>
                    )}
                  </td>

                  <td className="oht-actions-col">
                    <button className="oht-action-btn update" onClick={() => openEdit(t)}><FaEdit /></button>
                    <button className="oht-action-btn delete" onClick={() => handleDelete(t.id)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddForm && (
          <div className="employee-modal-backdrop" onClick={() => setShowAddForm(false)}>
            <div className="employee-modal" onClick={e => e.stopPropagation()}>
              <div className='employee-modal-header'>
                <h4>{editingId ? 'Edit Training' : 'Add Training'}</h4>
                <button className='back-btn' type="button" onClick={() => setShowAddForm(false)}>Return <FaChevronRight /></button>
              </div>

              <div className="eht-form" role="form">
                <div className="form-grid">
                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faClipboardList} /><span>Training/Program Title</span></div>
                    <input required value={form.trainingTitle} onChange={e => setForm(f => ({ ...f, trainingTitle: e.target.value }))} />
                  </label>

                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faUserCheck} /><span>Competency Title</span></div>
                    <select required value={form.competencyTitle} onChange={e => setForm(f => ({ ...f, competencyTitle: e.target.value }))}>
                      <option value="">Select Competency</option>
                      {competencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>

                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faBuilding} /><span>Venue</span></div>
                    <input required value={form.venue} onChange={e => setForm(f => ({ ...f, venue: e.target.value }))} />
                  </label>

                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faCalendarAlt} /><span>Start Date</span></div>
                    <input type="date" required value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} />
                  </label>

                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faCalendarAlt} /><span>End Date</span></div>
                    <input type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} />
                  </label>

                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faTag} /><span>Classification</span></div>
                    <select required value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
                      <option value="">Select Classification</option>
                      {classificationOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>

                  <label>
                    <div className="label-text"><FontAwesomeIcon icon={faTag} /><span>Category</span></div>
                    <select required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                      <option value="">Select Category</option>
                      {categoryOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>

                  <label className="objectives-field">
                    <div className="label-text"><FontAwesomeIcon icon={faClipboardList} /><span>Objectives</span></div>
                    <textarea required value={form.objectives} onChange={e => setForm(f => ({ ...f, objectives: e.target.value }))} />
                  </label>

                  <div className="file-upload-row">
                    <label>
                      <div className="label-text"><FontAwesomeIcon icon={faFileUpload} /><span>Upload Certificate</span></div>
                      <input type="file" onChange={e => setForm(f => ({ ...f, certificateFile: e.target.files[0] }))} />
                    </label>

                    <label>
                      <div className="label-text"><FontAwesomeIcon icon={faFileUpload} /><span>Upload Personnel Order</span></div>
                      <input type="file" onChange={e => setForm(f => ({ ...f, personnelOrderFile: e.target.files[0] }))} />
                    </label>
                  </div>
                </div>

                <div className="oht-modal-actions">
                  <button type="button" className="add-employee-oht-btn" disabled={loadingSave} onClick={handleSave}>
                    {loadingSave ? 'Saving...' : 'Save'}
                  </button>
                  <button type="button" className="close-employee-oht-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeOutHouseTraining;