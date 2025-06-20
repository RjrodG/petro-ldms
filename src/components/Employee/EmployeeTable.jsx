import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const EmployeeTable = ({
  filteredEmployees,
  selectedIds,
  setSelectedIds,
  openModal,
  handleDelete
}) => (
  <div className="employee-table-responsive">
    <table className="employee-table">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={filteredEmployees.length > 0 && selectedIds.length === filteredEmployees.length}
              onChange={e => {
                if (e.target.checked) {
                  setSelectedIds(filteredEmployees.map(emp => emp.id));
                } else {
                  setSelectedIds([]);
                }
              }}
            />
          </th>
          <th>Name</th>
          <th>Position</th>
          <th>Area of Assignment</th>
          <th className="actions-column">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>No employees found.</td>
          </tr>
        ) : (
          filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(emp.id)}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedIds([...selectedIds, emp.id]);
                    } else {
                      setSelectedIds(selectedIds.filter(id => id !== emp.id));
                    }
                  }}
                />
              </td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.area}</td>
              <td className="actions-column">
                <button className="action-btn view" onClick={() => openModal('view', emp)} title="View">
                  <FaEye />
                </button>
                <button className="action-btn update" onClick={() => openModal('update', emp)} title="Update">
                  <FaEdit />
                </button>
                <button className="action-btn delete" onClick={() => handleDelete(emp.id)} title="Delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default EmployeeTable;