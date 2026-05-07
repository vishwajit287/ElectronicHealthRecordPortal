import { useState } from 'react';

const PatientHistory = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const mockData = [
    { id: 1, date: '2023-05-01', type: 'Consultation', doctor: 'Dr. Smith', notes: 'Routine checkup' },
    { id: 2, date: '2023-04-15', type: 'Lab Test', doctor: 'Dr. Johnson', notes: 'Blood work' },
    { id: 3, date: '2023-03-20', type: 'Prescription', doctor: 'Dr. Smith', notes: 'Medication refill' },
  ];

  const filteredData = mockData.filter((item) => {
    const searchValue = search.toLowerCase();
    const matchesSearch =
      item.date.toLowerCase().includes(searchValue) ||
      item.type.toLowerCase().includes(searchValue) ||
      item.doctor.toLowerCase().includes(searchValue) ||
      item.notes.toLowerCase().includes(searchValue);

    const matchesFilter =
      filter === 'all' || item.type.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Patient History</h2>
          <p className="text-sm text-slate-600">Search by date, type, doctor, or notes.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search history..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 sm:w-72"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 sm:w-56"
          >
            <option value="all">All Types</option>
            <option value="consultation">Consultation</option>
            <option value="lab test">Lab Test</option>
            <option value="prescription">Prescription</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full table-fixed border-collapse text-left">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="w-1/5 px-4 py-3 text-sm font-semibold">Date</th>
              <th className="w-1/4 px-4 py-3 text-sm font-semibold">Type</th>
              <th className="w-1/4 px-4 py-3 text-sm font-semibold">Doctor</th>
              <th className="w-1/3 px-4 py-3 text-sm font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-t border-slate-200 hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-700">{item.date}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{item.type}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{item.doctor}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{item.notes}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-sm text-slate-500">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientHistory;
