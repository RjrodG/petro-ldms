import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import Select from 'react-select';

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
  updateGap,
  description,
  setDescription,
  competencyOptions = [],
  modal
}) => {
  return (
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
            {modal && modal.type === 'view' ? (
              <div style={{ padding: '8px 0' }}>{description || 'N/A'}</div>
            ) : (
              <textarea
                className="idp-desc"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            )}
          </label>
            <div className="idp-row" style={{display: 'flex', gap: 24}}>
              {/* Strengths */}
              <div className="idp-col" style={{flex: 1}}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <label style={{ flex: 1 }}>b. Area/s of Strength</label>
                {modal && modal.type !== 'view' && strengths.length < 5 && (
                  <button type="button" className='idp-p2-add-btn' onClick={addStrength}> + Add Strength </button>
                )}
              </div>
              {strengths.map((value, idx) => (
                <div className="idp-list" key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                  {modal && modal.type === 'view' ? (
                    <div style={{flex: 1, padding: '8px 0', fontSize: '0.9rem', borderBottom: '1px solid #ccc', marginLeft: '12px'}}>
                      {value || 'N/A'}
                    </div>
                  ) : (
                    <Select
                      className="idp-input-strength"
                      value={competencyOptions.find(opt => opt.comp_title.trim().toLowerCase() === value.trim().toLowerCase()) || null}
                      onChange={selected => updateStrength(idx, selected ? selected.comp_title : "")}
                      options={competencyOptions}
                      getOptionLabel={opt => opt.comp_title}
                      getOptionValue={opt => opt.comp_title}
                      placeholder="Select Strength"
                      isClearable
                      required
                    />
                  )}
                  {modal && modal.type !== 'view' && strengths.length > 1 && (
                    <button type="button" className="idp-p2-remove-btn" onClick={() => removeStrength(idx)} style={{marginLeft: 4}}>×</button>
                  )}
                </div>
              ))}
            </div>
            {/* Gaps */}
            <div className="idp-col" style={{flex: 1}}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <label style={{ flex: 1 }}>c. Area/s for Growth or Performance Gap</label>
                {modal && modal.type !== 'view' && gaps.length < 5 && (
                  <button type="button" className='idp-p2-add-btn' onClick={addGap}> + Add Gap </button>
                )}
              </div>
              {gaps.map((value, idx) => (
                <div className="idp-list" key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                  {modal && modal.type === 'view' ? (
                    <div style={{flex: 1, padding: '8px 0', fontSize: '0.9rem', borderBottom: '1px solid #ccc', marginLeft: '12px'}}>
                      {value || 'N/A'}
                    </div>
                  ) : (
                    <Select
                      className="idp-input-gap"
                      value={competencyOptions.find(opt => opt.comp_title.trim().toLowerCase() === value.trim().toLowerCase()) || null}
                      onChange={selected => updateGap(idx, selected ? selected.comp_title : "")}
                      options={competencyOptions}
                      getOptionLabel={opt => opt.comp_title}
                      getOptionValue={opt => opt.comp_title}
                      placeholder="Select Gap"
                      isClearable
                      required
                    />
                  )}
                  {modal && modal.type !== 'view' && gaps.length > 1 && (
                    <button type="button" className="idp-p2-remove-btn" onClick={() => removeGap(idx)} style={{marginLeft: 4}}>×</button>
                  )}
                </div>
              ))}
            </div>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default PartII_CompetencyAssessment;