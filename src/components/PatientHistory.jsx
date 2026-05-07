import { useState } from 'react';

const PatientHistory = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const mockData = [
    { id: 1, date: '2023-05-01', type: 'Consultation', doctor: 'Dr. Smith', notes: 'Routine checkup' },
    { id: 2, date: '2023-04-15', type: 'Lab Test', doctor: 'Dr. Johnson', notes: 'Blood work' },
    { id: 3, date: '2023-03-20', type: 'Prescription', doctor: 'Dr. Smith', notes: 'Medication refill' },
  ];

  const filteredData = mockData.filter(item =>
    (filter === 'all' || item.type.toLowerCase().includes(filter.toLowerCase())) &&
    item.notes.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Patient History</h2>
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded">
          <option value="all">All Types</option>
          <option value="consultation">Consultation</option>
          <option value="lab test">Lab Test</option>
          <option value="prescription">Prescription</option>
        </select>
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.type}</td>
              <td className="p-2">{item.doctor}</td>
              <td className="p-2">{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientHistory;