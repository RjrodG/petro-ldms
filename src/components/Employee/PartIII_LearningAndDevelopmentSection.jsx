import React from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

const PartIII_LearningAndDevelopment = ({
  show,
  setShow,
  part3Sets,
  addPart3Set,
  removePart3Set,
  updatePart3Field
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
              {part3Sets.length < 5 && (
                <button type="button" className="idp-p3-add-btn" onClick={addPart3Set}> + Add Learning and Development </button>
              )}
      </div>
      {show && (
        <>
          {part3Sets.map((set, setIdx) => (
            <div className="part3-set" key={setIdx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr auto',
                gridTemplateRows: 'repeat(6, auto)',
                columnGap: 24,
                rowGap: 0,
                background: '#fafbfc',
                border: '1px solid #ccc',
                padding: 10,
                marginBottom: 10,
                marginTop: 10,
                alignItems: 'start'
              }}
            >
              {/* Row 1: labels */}
              <label style={{ gridColumn: 1, gridRow: 1, marginBottom: 4, marginTop: 4 }}>
                a. Development Activity or Proposed Learning and Development Intervention/s (LDIs) (Formal Learning1, Non-Formal Learning2, Informal Learning3)
              </label>
              <label style={{ gridColumn: 2, gridRow: 1, marginBottom: 4, marginTop: 4  }}>
                d. Budget Source (i.e. PETRO, Unit, Scholarship, etc.)
              </label>
              {/* Row 2: inputs */}
              <input
                type="text"
                style={{ gridColumn: 1, gridRow: 2, width: '100%' }}
                value={set.developmentActivity}
                onChange={e => updatePart3Field(setIdx, 'developmentActivity', e.target.value)}
              />
              <input
                type="text"
                style={{ gridColumn: 2, gridRow: 2, width: '100%' }}
                value={set.budgetSource}
                onChange={e => updatePart3Field(setIdx, 'budgetSource', e.target.value)}
              />
              {/* Row 3: labels */}
              <label style={{ gridColumn: 1, gridRow: 3, marginBottom: 4, marginTop: 4  }}>
                b. Expected Output/s
              </label>
              <label style={{ gridColumn: 2, gridRow: 3, marginBottom: 4, marginTop: 4  }}>
                e. Budget/Resources Needed (In-Service Scholarship, Registration Fee, Manpower, time, energy, cost, etc.)
              </label>
              {/* Row 4: inputs */}
              <input
                type="text"
                style={{ gridColumn: 1, gridRow: 4, width: '100%' }}
                value={set.expectedOutput}
                onChange={e => updatePart3Field(setIdx, 'expectedOutput', e.target.value)}
              />
              <input
                type="text"
                style={{ gridColumn: 2, gridRow: 4, width: '100%' }}
                value={set.budgetNeeded}
                onChange={e => updatePart3Field(setIdx, 'budgetNeeded', e.target.value)}
              />
              {/* Row 5: labels */}
              <label style={{ gridColumn: 1, gridRow: 5, marginBottom: 4, marginTop: 4  }}>
                c. Support Needed (OT, OB, OL, Study Leave, etc.)
              </label>
              <label style={{ gridColumn: 2, gridRow: 5, marginBottom: 4, marginTop: 4  }}>
                f. Date Completed/ Accomplished
              </label>
              {/* Row 6: inputs */}
              <input
                type="text"
                style={{ gridColumn: 1, gridRow: 6, width: '100%' }}
                value={set.supportNeeded}
                onChange={e => updatePart3Field(setIdx, 'supportNeeded', e.target.value)}
              />
              <input
                type="date"
                style={{ gridColumn: 2, gridRow: 6, width: '100%' }}
                value={set.dateCompleted}
                onChange={e => updatePart3Field(setIdx, 'dateCompleted', e.target.value)}
              />
              {/* Remove button */}
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

export default PartIII_LearningAndDevelopment;
