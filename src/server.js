import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

// Update these credentials for your MySQL setup
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petroldms'
});

// Get all employees
app.get('/api/employees', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employee');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});
// Get all positions
app.get('/api/positions', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT pos_id, pos_name, pos_sg FROM position');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch positions' });
  }
});
// Get all departments
app.get('/api/departments', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT dep_id, dep_name, dep_division FROM department ORDER BY dep_name');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch positions' });
  }
});
// Get all classifications
app.get('/api/classifications', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT class_id, class_name FROM classification');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch classifications' });
  }
});
// Get all divisions
app.get('/api/divisions', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT MIN(dep_id) AS dep_id, dep_division FROM department GROUP BY dep_division ORDER BY CASE WHEN dep_division = "NOT APPLICABLE" THEN 1 ELSE 0 END, dep_division');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch divisions' });
  }
});
// Get all status
app.get('/api/status', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT stat_id, stat_name FROM status');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch statuses' });
  }
});
// Get all names for supervisors
app.get('/api/supervisors', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT emp_name FROM employee ORDER BY emp_name');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch supervisors' });
  }
});
// Get all professions
app.get('/api/professions', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT prof_id, prof_name FROM profession');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch professions' });
  }
});
// Get all competencies
app.get('/api/competencies', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT comp_id, comp_title, comp_area FROM competency');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch competencies' });
  }
});

// Add employee
app.post('/api/employees', async (req, res) => {
  try {
    const emp = req.body;
    const [result] = await db.query(
      `INSERT INTO employee
      (emp_name, emp_position, emp_sg, emp_yearscurrentpos, emp_yearsplantpos, emp_dep, emp_sex, emp_contact, emp_classification, emp_yearperiod, emp_div, emp_idnumber, emp_sdatecurrentpos, emp_sdateplantpos, emp_super, emp_email, emp_status, emp_dateofbirth, emp_dateofentry, with_prof, emp_prof, emp_cpdunits, emp_prcid, emp_prcexpdate)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        emp.emp_name,
        emp.emp_position,
        emp.emp_sg,
        emp.emp_yearscurrentpos,
        emp.emp_yearsplantpos,
        emp.emp_dep,
        emp.emp_sex,
        emp.emp_contact,
        emp.emp_classification,
        emp.emp_yearperiod,
        emp.emp_div,
        emp.emp_idnumber,
        emp.emp_sdatecurrentpos,
        emp.emp_sdateplantpos,
        emp.emp_super,
        emp.emp_email,
        emp.emp_status,
        emp.emp_dateofbirth,
        emp.emp_dateofentry,
        emp.with_prof,
        emp.emp_prof,
        emp.emp_cpdunits,
        emp.emp_prcid,
        emp.emp_prcexpdate
      ]
    );
    res.json({ success: true, emp_id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add employee' });
  }
});
// Update employee
app.put('/api/employees/:id', async (req, res) => {
  try {
    const emp = req.body;
    const { id } = req.params;
    await db.query(
      `UPDATE employee SET
        emp_name=?,
        emp_position=?,
        emp_sg=?,
        emp_yearscurrentpos=?,
        emp_yearsplantpos=?,
        emp_dep=?,
        emp_sex=?,
        emp_contact=?,
        emp_classification=?,
        emp_yearperiod=?,
        emp_div=?,
        emp_idnumber=?,
        emp_sdatecurrentpos=?,
        emp_sdateplantpos=?,
        emp_super=?,
        emp_email=?,
        emp_status=?,
        emp_dateofbirth=?,
        emp_dateofentry=?,
        with_prof=?,
        emp_prof=?,
        emp_cpdunits=?,
        emp_prcid=?,
        emp_prcexpdate=?
      WHERE emp_id=?`,
      [
        emp.emp_name,
        emp.emp_position,
        emp.emp_sg,
        emp.emp_yearscurrentpos,
        emp.emp_yearsplantpos,
        emp.emp_dep,
        emp.emp_sex,
        emp.emp_contact,
        emp.emp_classification,
        emp.emp_yearperiod,
        emp.emp_div,
        emp.emp_idnumber,
        emp.emp_sdatecurrentpos,
        emp.emp_sdateplantpos,
        emp.emp_super,
        emp.emp_email,
        emp.emp_status,
        emp.emp_dateofbirth,
        emp.emp_dateofentry,
        emp.with_prof,
        emp.emp_prof,
        emp.emp_cpdunits,
        emp.emp_prcid,
        emp.emp_prcexpdate,
        id
      ]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update employee' });
  }
});
// Delete employee
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM employee WHERE emp_id=?', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete employee' });
  }
});

// Add employee competency assessment description
app.post('/api/employee-ca-description', async (req, res) => {
  try {
    const { emp_id, empc_description } = req.body;
    await db.query(
      'INSERT INTO employee_ca_description (emp_id, empc_description) VALUES (?, ?)',
      [emp_id, empc_description]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add employee_ca_description' });
  }
});
// Update employee competency assessment description
app.put('/api/employee-ca-description/:emp_id', async (req, res) => {
  const emp_id = req.params.emp_id;
  const { empc_description } = req.body;
  const [result] = await db.query(
    'UPDATE employee_ca_description SET empc_description = ? WHERE emp_id = ?',
    [empc_description, emp_id]
  );
  if (result.affectedRows === 0) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json({ success: true });
});
// Delete employee competency assessment description
app.delete('/api/employee-ca-description/:empc_id', async (req, res) => {
  try {
    const { empc_id } = req.params;
    await db.query(
      'DELETE FROM employee_ca_description WHERE empc_id=?',
      [empc_id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete employee_ca_description' });
  }
});
// Get employee competency assessment description
app.get('/api/employee-ca-description/:emp_id', async (req, res) => {
  const emp_id = req.params.emp_id;
  console.log('Fetching description for emp_id:', emp_id);
  const [rows] = await db.query('SELECT * FROM employee_ca_description WHERE emp_id = ?', [emp_id]);
  console.log('Query result:', rows);
  if (rows.length === 0) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(rows[0]);
});

// GET /api/employees/:id/competencies
app.get('/api/employees/:id/competencies', async (req, res) => {
  const { id } = req.params;
  const [strengthRows] = await db.query('SELECT emps_strength FROM employee_ca_strength WHERE emp_id = ?', [id]);
  const [gapRows] = await db.query('SELECT empg_gap FROM employee_ca_gap WHERE emp_id = ?', [id]);
  const strengths = strengthRows.map(r => r.emps_strength);
  const gaps = gapRows.map(r => r.empg_gap);
  res.json({ strengths, gaps });
});
// POST /api/employees/:id/competencies
app.post('/api/employees/:id/competencies', async (req, res) => {
  try {
    const { id } = req.params;
    const { strengths, gaps } = req.body;

    // Remove old
    await db.query('DELETE FROM employee_ca_strength WHERE emp_id = ?', [id]);
    await db.query('DELETE FROM employee_ca_gap WHERE emp_id = ?', [id]);

    // Insert new strengths
    if (strengths && strengths.length) {
      const strengthValues = strengths.map(val => [id, val]);
      await db.query('INSERT INTO employee_ca_strength (emp_id, emps_strength) VALUES ?', [strengthValues]);
    }

    // Insert new gaps
    if (gaps && gaps.length) {
      const gapValues = gaps.map(val => [id, val]);
      await db.query('INSERT INTO employee_ca_gap (emp_id, empg_gap) VALUES ?', [gapValues]);
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save competencies' });
  }
});


// Get employee learning and development plans
app.get('/api/employees/:id/ldplan', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM employee_ldplan WHERE emp_id = ?', [id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch learning and development plans' });
  }
});
// Add employee learning and development plan
app.post('/api/employees/:id/ldplan', async (req, res) => {
  try {
    const { id } = req.params;
    const { ldplans } = req.body; // ldplans should be an array of objects

    // Remove old plans for this employee (optional, if you want to replace)
    await db.query('DELETE FROM employee_ldplan WHERE emp_id = ?', [id]);

    // Insert new plans
    if (ldplans && ldplans.length) {
      const values = ldplans.map(plan => [
        plan.empl_id, // or null if auto-increment
        id,
        plan.empl_development,
        plan.empl_expected,
        plan.empl_support,
        plan.empl_budget,
        plan.empl_resources,
        plan.empl_datecompleteed
      ]);
      await db.query(
        'INSERT INTO employee_ldplan (empl_id, emp_id, empl_development, empl_expected, empl_support, empl_budget, empl_resources, empl_datecompleteed) VALUES ?',
        [values]
      );
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save learning and development plans' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
