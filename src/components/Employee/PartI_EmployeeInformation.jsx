import CompetencyAssessment from './PartII_CompetencyAssessment';
import LearningAndDevelopment from './PartIII_LearningAndDevelopmentSection';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDateDisplay } from './Employee';
import { FaChevronRight } from "react-icons/fa";
import Select from 'react-select';

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
  professionOptions,
  supervisorOptions,
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
  description,
  setDescription,
  competencyOptions
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
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_name || 'N/A'}</span>
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
                <td><strong>k. Year Period</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_yearperiod || 'N/A'}</span>
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
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_position || 'N/A'}</span>
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
                <td><strong>l. Division</strong></td>
                  <td>
                    {modal.type === 'view' ? (
                      <span style={{fontWeight: 'bold'}}>{modal.employee.emp_div || 'N/A'}</span>
                    ) : (
                      <select
                        name="emp_div"
                        value={modal.employee.emp_div || ''}
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
                      <span style={{fontWeight: 'bold'}}>{modal.employee.emp_sg || 'N/A'}</span>
                    ) : (
                      <input
                        type="number"
                        name="emp_sg"
                        value={modal.employee.emp_sg || ''}
                        onChange={handleChange}
                      />
                    )}
                  </td>
                <td><strong>m. ID Number</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_idnumber || 'N/A'}</span>
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
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_yearscurrentpos || 'N/A'}</span>
                  ) : (
                    <input
                      type="number"
                      name="emp_yearscurrentpos"
                      value={modal.employee.emp_yearscurrentpos}
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td><strong>n. Start Date</strong></td>
                <td>
                  {modal.type === 'view'
                    ? <span style={{fontWeight: 'bold'}}>{formatDateDisplay(modal.employee.emp_sdatecurrentpos)}</span>
                    : (
                      <DatePicker
                        selected={modal.employee.emp_sdatecurrentpos ? new Date(modal.employee.emp_sdatecurrentpos) : null}
                        onChange={date =>
                          handleChange({
                            target: {
                              name: "emp_sdatecurrentpos",
                              value: date ? date.toISOString().slice(0, 10) : ""
                            }
                          })
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="dd/mm/yyyy"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    )
                  }
                </td>
              </tr>
              <tr>
                <td><strong>e. Years in ZCMC occupying a Plantilla Position</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_yearsplantpos || 'N/A'}</span>
                  ) : (
                    <input
                      type="number"
                      name="emp_yearsplantpos"
                      value={modal.employee.emp_yearsplantpos}
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td><strong>o. Start Date for Occupying a Plantilla</strong></td>
                <td>
                  {modal.type === 'view'
                    ? <span style={{fontWeight: 'bold'}}>{formatDateDisplay(modal.employee.emp_sdateplantpos)}</span>
                    : (
                      <DatePicker
                        selected={modal.employee.emp_sdateplantpos ? new Date(modal.employee.emp_sdateplantpos) : null}
                        onChange={date =>
                          handleChange({
                            target: {
                              name: "emp_sdateplantpos",
                              value: date ? date.toISOString().slice(0, 10) : ""
                            }
                          })
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="dd/mm/yyyy"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    )
                  }
                </td>
              </tr>
              <tr>
                <td><strong>f. Office/Dept./Unit</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_dep || 'N/A'}</span>
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
                <td><strong>p. Immediate Supervisor's Name (Last, First Ext, Middle)</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_supervisor || 'N/A'}</span>
                  ) : (
                    <Select
                      name="emp_supervisor"
                      value={
                        supervisorOptions.find(opt => opt.emp_name === modal.employee.emp_supervisor) || null
                      }
                      onChange={option => handleChange({
                        target: { name: 'emp_supervisor', value: option ? option.emp_name : '' }
                      })}
                      options={supervisorOptions}
                      getOptionLabel={opt => opt.emp_name}
                      getOptionValue={opt => opt.emp_name}
                      placeholder="Select or type Immediate Supervisor"
                      isClearable
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>g. Sex</strong></td>
                <td style={{ verticalAlign: 'middle' }}>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_sex || 'N/A'}</span>
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
                <td><strong>q. Email Address</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_email || 'N/A'}</span>
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
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_contact || 'N/A'}</span>
                  ) : (
                    <input
                      type="text"
                      name="emp_contact"
                      value={modal.employee.emp_contact}
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td><strong>r. Status</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_status || 'N/A'}</span>
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
                <td><strong>i. Date of Birth</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{formatDateDisplay(modal.employee.emp_dateofbirth)}</span>
                  ) : (
                    <DatePicker
                      selected={modal.employee.emp_dateofbirth ? new Date(modal.employee.emp_dateofbirth) : null}
                      onChange={date =>
                        handleChange({
                          target: {
                            name: "emp_dateofbirth",
                            value: date ? date.toISOString().slice(0, 10) : ""
                          }
                        })
                      }
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                  )}
                </td>
                <td><strong>s. Date of Entry</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{formatDateDisplay(modal.employee.emp_dateofentry)}</span>
                  ) : (
                    <DatePicker
                      selected={modal.employee.emp_dateofentry ? new Date(modal.employee.emp_dateofentry) : null}
                      onChange={date =>
                        handleChange({
                          target: {
                            name: "emp_dateofentry",
                            value: date ? date.toISOString().slice(0, 10) : ""
                          }
                        })
                      }
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td><strong>j. Classification</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.emp_classification || 'N/A'}</span>
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
                <td><strong>t. With Profession?</strong></td>
                <td>
                  {modal.type === 'view' ? (
                    <span style={{fontWeight: 'bold'}}>{modal.employee.with_prof || 'N/A'}</span>
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
              {modal.employee.with_prof === "Yes" && (
                <>
                  <tr>
                    <td><strong>• Profession</strong></td>
                    <td>
                      {modal.type === 'view' ? (
                        <span style={{fontWeight: 'bold'}}>{modal.employee.emp_prof || 'N/A'}</span>
                      ) : (
                        <select
                          name="emp_prof"
                          value={modal.employee.emp_prof}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Profession</option>
                          {professionOptions.map(prof => (
                            <option key={prof.prof_id} value={prof.prof_name}>{prof.prof_name}</option>
                          ))}
                        </select>
                      )}
                    </td>
                    <td><strong>• CPD Units</strong></td>
                    <td>
                      {modal.type === 'view' ? (
                        <span style={{fontWeight: 'bold'}}>{modal.employee.emp_cpdunits || 'N/A'}</span>
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
                        <span style={{fontWeight: 'bold'}}>{modal.employee.emp_prcid || 'N/A'}</span>
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
                        <span style={{fontWeight: 'bold'}}>{formatDateDisplay(modal.employee.emp_prcexpdate)}</span>
                      ) : (
                        <DatePicker
                          selected={modal.employee.emp_prcexpdate ? new Date(modal.employee.emp_prcexpdate) : null}
                          onChange={date =>
                            handleChange({
                              target: {
                                name: "emp_prcexpdate",
                                value: date ? date.toISOString().slice(0, 10) : ""
                              }
                            })
                          }
                          dateFormat="dd/MM/yyyy"
                          placeholderText="dd/mm/yyyy"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
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
          description={description}
          setDescription={setDescription}
          competencyOptions={competencyOptions}
          modal={modal}
        />

        {/* PART III */}
        <LearningAndDevelopment
          show={showLearningandDevelopment}
          setShow={setShowLearningandDevelopment}
          part3Sets={part3Sets}
          addPart3Set={addPart3Set}
          removePart3Set={removePart3Set}
          updatePart3Field={updatePart3Field}
          readOnly={modal.type === 'view'}
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