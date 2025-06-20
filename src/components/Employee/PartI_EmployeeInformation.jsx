import CompetencyAssessment from './PartII_CompetencyAssessmentSection';
import LearningAndDevelopment from './PartIII_LearningAndDevelopmentSection';
import { FaChevronRight } from "react-icons/fa";

const PartI_EmployeeInformation = ({
  modal,
  closeModal,
  handleSave,
  handleChange,
  positionOptions,
  divisionOptions,
  departmentOptions,
  classificationOptions,
  statusOptions,
  showCompetencyAssessment,
  setShowCompetencyAssessment,
  strengths,
  addStrength,
  removeStrength,
  updateStrength,
  gaps,
  addGap,
  removeGap,
  updateGap,
  showLearningandDevelopment,
  setShowLearningandDevelopment,
  part3Sets,
  addPart3Set,
  removePart3Set,
  updatePart3Field,
}) => (
  <div className="employee-modal-backdrop" onClick={closeModal}>
    <div className="employee-modal" onClick={e => e.stopPropagation()}>
      <div className='employee-modal-header'>
        <h3>
          {modal.type === 'add' && 'Add Employee'}
          {modal.type === 'update' && 'Update Employee'}
          {modal.type === 'view' && 'Employee Profile'}
        </h3>
        <button className='back-btn' type="button" onClick={closeModal}>Return <FaChevronRight /></button>
      </div>
      
      <form onSubmit={handleSave}>
        <div className="employee-info-section">
          <div className="section-header">PART I. EMPLOYEE INFORMATION</div>
          <table className="employee-info-table">
            <tbody>
              <tr>
                <td><strong>a. Name (Last, First Ext, Middle)</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_name || 'N/A'
                  ) : (
                    <input
                      type="text"
                      name="emp_name"
                      value={modal.employee.emp_name}
                      onChange={handleChange}
                      required
                    />
                  )}
                </td>
                <td><strong>j. Year Period</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_yearperiod || 'N/A'
                  ) : (
                    <input
                      type="text"
                      name="emp_yearperiod"
                      value={modal.employee.emp_yearperiod}
                      onChange={handleChange}
                      required
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>b. Current Position</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_position || 'N/A'
                  ) : (
                    <select
                      name="emp_position"
                      value={modal.employee.emp_position || ''}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Position</option>
                      {positionOptions.map(pos => (
                        <option key={pos.pos_id} value={pos.pos_name}>{pos.pos_name}</option>
                      ))}
                    </select>
                  )}
                </td>
                <td><strong>k. Division</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_division || 'N/A'
                  ) : (
                    <select
                      name="emp_division"
                      value={modal.employee.emp_division || ''}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Division</option>
                      {divisionOptions.map(div => (
                        <option key={div.dep_id} value={div.dep_division}>{div.dep_division}</option>
                      ))}
                    </select>
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>c. Salary Grade</strong></td>
                  <td>
                    {modal.type === 'view' ? (
                      modal.employee.emp_sg || 'N/A'
                    ) : (
                      <input
                        type="number"
                        name="emp_sg"
                        value={modal.employee.emp_sg || ''}
                        onChange={handleChange}
                      />
                    )}
                  </td>
                <td><strong>l. ID Number</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_idnumber || 'N/A'
                  ) : (
                    <input
                      type="text"
                      name="emp_idnumber"
                      value={modal.employee.emp_idnumber}
                      onChange={handleChange}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>d. Years in Current Position</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_yearscurrentpos || 'N/A'
                  ) : (
                    <input
                      type="number"
                      name="emp_yearscurrentpos"
                      value={modal.employee.emp_yearscurrentpos}
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td><strong>m. Start Date</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_sdatecurrentpos || 'N/A'
                  ) : (
                    <input
                      type="date"
                      name="emp_sdatecurrentpos"
                      value={modal.employee.emp_sdatecurrentpos}
                      onChange={handleChange}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>e. Years in ZCMC occupying a Plantilla Position</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_yearsplantpos || 'N/A'
                  ) : (
                    <input
                      type="number"
                      name="emp_yearsplantpos"
                      value={modal.employee.emp_yearsplantpos}
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td><strong>n. Start Date for Occupying a Plantilla</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_sdateplantpos || 'N/A'
                  ) : (
                    <input
                      type="date"
                      name="emp_sdateplantpos"
                      value={modal.employee.emp_sdateplantpos}
                      onChange={handleChange}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>f. Office/Dept./Unit</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_dep || 'N/A'
                  ) : (
                    <select
                      name="emp_dep"
                      value={modal.employee.emp_dep}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      {departmentOptions.map(dep => (
                        <option key={dep.dep_id} value={dep.dep_name}>{dep.dep_name}</option>
                      ))}
                    </select>
                  )}
                </td>
                <td><strong>o. Immediate Supervisor's Name (Last, First Ext, Middle)</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_supervisor || 'N/A'
                  ) : (
                    <input
                      type="text"
                      name="emp_supervisor"
                      value={modal.employee.emp_supervisor || ''}
                      onChange={handleChange}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>g. Sex</strong></td>
                <td style={{ verticalAlign: 'middle' }}>
                  {modal.type === 'view' ? (
                    modal.employee.emp_sex || 'N/A'
                  ) : (
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="emp_sex"
                          value="Male"
                          checked={modal.employee.emp_sex === "Male"}
                          onChange={handleChange}
                        />
                        Male
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="emp_sex"
                          value="Female"
                          checked={modal.employee.emp_sex === "Female"}
                          onChange={handleChange}
                        />
                        Female
                      </label>
                    </div>
                  )}
                </td>
                <td><strong>p. Email Address</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_email || 'N/A'
                  ) : (
                    <input
                      type="email"
                      name="emp_email"
                      value={modal.employee.emp_email}
                      onChange={handleChange}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>h. Contact Number</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_contact || 'N/A'
                  ) : (
                    <input
                      type="text"
                      name="emp_contact"
                      value={modal.employee.emp_contact}
                      onChange={handleChange}
                      required
                    />
                  )}
                </td>
                <td><strong>q. Status</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_status || 'N/A'
                  ) : (
                    <select
                      name="emp_status"
                      value={modal.employee.emp_status}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Status</option>
                      {statusOptions.map(stat => (
                        <option key={stat.stat_id} value={stat.stat_name}>{stat.stat_name}</option>
                      ))}
                    </select>
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>i. Classification</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.emp_classification || 'N/A'
                  ) : (
                    <select
                      name="emp_classification"
                      value={modal.employee.emp_classification}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Classification</option>
                      {classificationOptions.map(clas => (
                        <option key={clas.class_id} value={clas.class_name}>{clas.class_name}</option>
                      ))}
                    </select>
                  )}
                </td>
                <td><strong>r. With Profession?</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    modal.employee.with_prof || 'N/A'
                  ) : (
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="with_prof"
                          value="Yes"
                          checked={modal.employee.with_prof === "Yes"}
                          onChange={handleChange}
                        />
                        Yes
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="with_prof"
                          value="No"
                          checked={modal.employee.with_prof === "No"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                    </div>
                  )}
                </td>
              </tr>
              {/* WITH PROFESSION FIELDS */}
              {(modal.employee.with_prof === "Yes" || modal.type === 'view') && (
                <>
                  <tr>
                    <td><strong>• Profession</strong></td>
                    <td>
                      {modal.type === 'view' ? (
                        modal.employee.emp_prof || 'N/A'
                      ) : (
                        <select
                          name="emp_prof"
                          value={modal.employee.emp_prof}
                          onChange={handleChange}
                        >
                          <option value="">Select Profession</option>
                          <option value="Nurse">Nurse</option>
                          <option value="Doctor">Doctor</option>
                          <option value="Engineer">Engineer</option>
                          {/* Add more as needed */}
                        </select>
                      )}
                    </td>
                    <td><strong>• CPD Units</strong></td>
                    <td>
                      {modal.type === 'view' ? (
                        modal.employee.emp_cpdunits || 'N/A'
                      ) : (
                        <input
                          type="number"
                          name="emp_cpdunits"
                          value={modal.employee.emp_cpdunits}
                          onChange={handleChange}
                          min="0"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>• PRC ID No.</strong></td>
                    <td>
                      {modal.type === 'view' ? (
                        modal.employee.emp_prcid || 'N/A'
                      ) : (
                        <input
                          type="text"
                          name="emp_prcid"
                          value={modal.employee.emp_prcid}
                          onChange={handleChange}
                        />
                      )}
                    </td>
                    <td><strong>• PRC Expiration Date</strong></td>
                    <td>
                      {modal.type === 'view' ? (
                        modal.employee.emp_prcexpdate || 'N/A'
                      ) : (
                        <input
                          type="date"
                          name="emp_prcexpdate"
                          value={modal.employee.emp_prcexpdate}
                          onChange={handleChange}
                        />
                      )}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* PART II */}
        <CompetencyAssessment
          show={showCompetencyAssessment}
          setShow={setShowCompetencyAssessment}
          strengths={strengths}
          addStrength={addStrength}
          removeStrength={removeStrength}
          updateStrength={updateStrength}
          gaps={gaps}
          addGap={addGap}
          removeGap={removeGap}
          updateGap={updateGap}
        />

        {/* PART III */}
        <LearningAndDevelopment
          show={showLearningandDevelopment}
          setShow={setShowLearningandDevelopment}
          part3Sets={part3Sets}
          addPart3Set={addPart3Set}
          removePart3Set={removePart3Set}
          updatePart3Field={updatePart3Field}
        />

        <div className="modal-actions">
          {modal.type !== 'view' && <button className='save-employee-btn' type="submit"> Save </button>}
          <button className="close-employee-btn" type="button" onClick={closeModal}>Close</button>
        </div>
      </form>
    </div>
  </div>
);

export default PartI_EmployeeInformation;