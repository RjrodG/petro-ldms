import React from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

const PartII_CompetencyAssessment = ({
  show,
  setShow,
  strengths,
  addStrength,
  removeStrength,
  updateStrength,
  gaps,
  addGap,
  removeGap,
  updateGap
}) => (
  <>
    <div className="section-header-p2">
      PART II. COMPETENCY ASSESSMENT
      <button type="button" className='employee-extend-p2-btn' onClick={() => setShow(v => !v)}>
        {show ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
      </button>
    </div>
    <div className={`competency-animated-section${show ? ' open' : ''}`}>
      {show && (
        <>
          <label style={{marginTop: '5px'}}>
            a. Description/Critical Incident/Comment
            <textarea className="idp-input" rows={2} />
          </label>
          <div className="idp-row" style={{display: 'flex', gap: 24}}>
            {/* Strengths */}
            <div className="idp-col" style={{flex: 1}}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <label style={{ flex: 1 }}>b. Area/s of Strength</label>
                {strengths.length < 5 && (
                  <button type="button" className='idp-p2-add-btn' onClick={addStrength}> + Add Strength </button>
                )}
              </div>
              {strengths.map((value, idx) => (
                <div className="idp-list" key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                  <input className="idp-input" value={value} onChange={e => updateStrength(idx, e.target.value)} />
                  <button type="button" className="idp-p2-remove-btn" onClick={() => removeStrength(idx)} style={{marginLeft: 4}}>×</button>
                </div>
              ))}
            </div>
            {/* Gaps */}
            <div className="idp-col" style={{flex: 1}}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <label style={{ flex: 1 }}>c. Area/s for Growth or Performance Gap</label>
                {gaps.length < 5 && (
                  <button type="button" className='idp-p2-add-btn' onClick={addGap}> + Add Gap </button>
                )}
              </div>
              {gaps.map((value, idx) => (
                <div className="idp-list" key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                  <input className="idp-input" value={value} onChange={e => updateGap(idx, e.target.value)} />
                  <button type="button" className="idp-p2-remove-btn" onClick={() => removeGap(idx)} style={{marginLeft: 4}}>×</button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  </>
);

export default PartII_CompetencyAssessment;