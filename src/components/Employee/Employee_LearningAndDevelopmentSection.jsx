import React from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Employee_LearningAndDevelopment = ({
  show,
  setShow,
  part3Sets,
  addPart3Set,
  removePart3Set,
  updatePart3Field,
  readOnly = false // new prop
}) => (
  <>
    <div className="section-header-p3">
      PART III. LEARNING AND DEVELOPMENT PLAN
      <button type="button" className='employee-extend-p3-btn' onClick={() => setShow(v => !v)}>
        {show ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
      </button>
    </div>
    <div className={`competency-animated-section${show ? ' open' : ''}`}>
      <div className="idp-p3-add-btn-container">
        {!readOnly && part3Sets.length < 5 && (
          <button type="button" className="idp-p3-add-btn" onClick={addPart3Set}> + Add Learning and Development </button>
        )}
      </div>
      {show && (
        <>
          {part3Sets.map((set, setIdx) => (
            <div className="part3-set" key={setIdx}>
              {/* Row 1: labels */}
              <label className="part3-label" style={{ gridColumn: 1, gridRow: 1 }}>
                a. Development Activity or Proposed Learning and Development Intervention/s (LDIs) (Formal Learning1, Non-Formal Learning2, Informal Learning3)
              </label>
              <label className="part3-label" style={{ gridColumn: 2, gridRow: 1 }}>
                d. Budget Source (i.e. PETRO, Unit, Scholarship, etc.)
              </label>
              {/* Row 2: inputs or text */}
              {readOnly ? (
                <div className="part3-readonly" style={{ gridColumn: 1, gridRow: 2 }}>
                  {set.developmentActivity || <span style={{color:'#aaa'}}>-</span>}
                </div>
              ) : (
                <input
                  className="ldp-input"
                  type="text"
                  style={{ gridColumn: 1, gridRow: 2, width: '100%' }}
                  value={set.developmentActivity}
                  onChange={e => updatePart3Field(setIdx, 'developmentActivity', e.target.value)}
                  readOnly={readOnly}
                  required
                />
              )}
              {readOnly ? (
                <div className="part3-readonly" style={{ gridColumn: 2, gridRow: 2 }}>
                  {set.budgetSource || <span style={{color:'#aaa'}}>-</span>}
                </div>
              ) : (
                <input
                  className="ldp-input"
                  type="text"
                  style={{ gridColumn: 2, gridRow: 2, width: '100%' }}
                  value={set.budgetSource}
                  onChange={e => updatePart3Field(setIdx, 'budgetSource', e.target.value)}
                  readOnly={readOnly}
                />
              )}
              {/* Row 3: labels */}
              <label className="part3-label" style={{ gridColumn: 1, gridRow: 3, marginBottom: 4, marginTop: 4  }}>
                b. Expected Output/s
              </label>
              <label className="part3-label" style={{ gridColumn: 2, gridRow: 3, marginBottom: 4, marginTop: 4  }}>
                e. Budget/Resources Needed (In-Service Scholarship, Registration Fee, Manpower, time, energy, cost, etc.)
              </label>
              {/* Row 4: inputs or text */}
              {readOnly ? (
                <div className="part3-readonly" style={{ gridColumn: 1, gridRow: 4, width: '100%', padding: '6px 0' }}>{set.expectedOutput || <span style={{color:'#aaa'}}>-</span>}</div>
              ) : (
                <input
                  className="ldp-input"
                  type="text"
                  style={{ gridColumn: 1, gridRow: 4, width: '100%' }}
                  value={set.expectedOutput}
                  onChange={e => updatePart3Field(setIdx, 'expectedOutput', e.target.value)}
                  readOnly={readOnly}
                />
              )}
              {readOnly ? (
                <div className="part3-readonly" style={{ gridColumn: 2, gridRow: 4, width: '100%', padding: '6px 0' }}>{set.budgetNeeded || <span style={{color:'#aaa'}}>-</span>}</div>
              ) : (
                <input
                  className="ldp-input"
                  type="text"
                  style={{ gridColumn: 2, gridRow: 4, width: '100%' }}
                  value={set.budgetNeeded}
                  onChange={e => updatePart3Field(setIdx, 'budgetNeeded', e.target.value)}
                  readOnly={readOnly}
                />
              )}
              {/* Row 5: labels */}
              <label className="part3-label" style={{ gridColumn: 1, gridRow: 5, marginBottom: 4, marginTop: 4  }}>
                c. Support Needed (OT, OB, OL, Study Leave, etc.)
              </label>
              <label className="part3-label" style={{ gridColumn: 2, gridRow: 5, marginBottom: 4, marginTop: 4  }}>
                f. Date Completed/ Accomplished
              </label>
              {/* Row 6: inputs or text */}
              {readOnly ? (
                <div className="part3-readonly" style={{ gridColumn: 1, gridRow: 6, width: '100%', padding: '6px 0' }}>{set.supportNeeded || <span style={{color:'#aaa'}}>-</span>}</div>
              ) : (
                <input
                  className="ldp-input"
                  type="text"
                  style={{ gridColumn: 1, gridRow: 6, width: '100%' }}
                  value={set.supportNeeded}
                  onChange={e => updatePart3Field(setIdx, 'supportNeeded', e.target.value)}
                  readOnly={readOnly}
                />
              )}
              {readOnly ? (
                <div className="part3-readonly" style={{ gridColumn: 2, gridRow: 6, width: '100%', padding: '6px 0' }}>{set.dateCompleted ? new Date(set.dateCompleted).toLocaleDateString() : <span style={{color:'#aaa'}}>-</span>}</div>
              ) : (
                <DatePicker
                  selected={set.dateCompleted ? new Date(set.dateCompleted) : null}
                  onChange={date =>
                    updatePart3Field(setIdx, 'dateCompleted', date ? date.toISOString().slice(0, 10) : '')
                  }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  wrapperClassName="custom-datepicker"
                  className = "dateCompleted"
                  disabled={readOnly}
                />
              )}
              {/* Remove button: always render for layout, but hide if not allowed */}
              <div style={{
                gridColumn: 3,
                gridRow: '1 / span 6',
                display: 'flex',
                alignItems: 'flex-start',
                marginLeft: 8
              }}>
                <button
                  type="button"
                  className="idp-p3-remove-btn"
                  onClick={() => removePart3Set(setIdx)}
                  aria-label="Remove set"
                  style={{ visibility: (!readOnly && part3Sets.length > 1) ? 'visible' : 'hidden' }}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  </>
);

export default Employee_LearningAndDevelopment;
