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
    const [rows] = await db.query('SELECT dep_id, dep_name FROM department ORDER BY dep_name');
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

// Add employee
app.post('/api/employees', async (req, res) => {
  try {
    const emp = req.body;
    const [result] = await db.query(
      `INSERT INTO employee
      (emp_name, emp_position, emp_sg, emp_yearscurrentpos, emp_yearsplantpos, emp_dep, emp_sex, emp_contact, emp_classification, emp_yearperiod, emp_idnumber, emp_sdatecurrentpos, emp_sdateplantpos, emp_email, emp_status, emp_dateofentry, emp_dateofbirth, with_prof, emp_prof, emp_prcid, emp_prcexpdate, emp_cpdunits)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        emp.emp_idnumber,
        emp.emp_sdatecurrentpos,
        emp.emp_sdateplantpos,
        emp.emp_email,
        emp.emp_status,
        emp.emp_dateofentry,
        emp.emp_dateofbirth,
        emp.with_prof,
        emp.emp_prof,
        emp.emp_prcid,
        emp.emp_prcexpdate,
        emp.emp_cpdunits
      ]
    );
    res.json({ id: result.insertId });
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
        dep_id=?,
        prof_id=?,
        emp_name=?,
        emp_position=?,
        emp_sg=?,
        emp_yearscurrentpos=?,
        emp_yearsplantpos=?,
        emp_sex=?,
        emp_contact=?,
        emp_classification=?,
        emp_yearperiod=?,
        emp_idnumber=?,
        emp_sdatecurrentpos=?,
        emp_sdateplantpos=?,
        emp_email=?,
        emp_status=?,
        emp_dateofentry=?,
        emp_dateofbirth=?,
        emp_prcid=?,
        emp_prcexpdate=?,
        emp_cpdunits=?
      WHERE emp_id=?`,
      [
        emp.dep_id,
        emp.prof_id,
        emp.emp_name,
        emp.emp_position,
        emp.emp_sg,
        emp.emp_yearscurrentpos,
        emp.emp_yearsplantpos,
        emp.emp_sex,
        emp.emp_contact,
        emp.emp_classification,
        emp.emp_yearperiod,
        emp.emp_idnumber,
        emp.emp_sdatecurrentpos,
        emp.emp_sdateplantpos,
        emp.emp_email,
        emp.emp_status,
        emp.emp_dateofentry,
        emp.emp_dateofbirth,
        emp.emp_prcid,
        emp.emp_prcexpdate,
        emp.emp_cpdunits,
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

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));