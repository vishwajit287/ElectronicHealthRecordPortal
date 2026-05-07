import { useState } from 'react';
import { Download } from 'lucide-react';

const Prescriptions = () => {
  const [search, setSearch] = useState('');

  const mockData = [
    { id: 1, date: '2023-05-01', medication: 'Aspirin', dosage: '100mg', file: 'prescription1.pdf' },
    { id: 2, date: '2023-04-15', medication: 'Ibuprofen', dosage: '200mg', file: 'prescription2.pdf' },
  ];

  const filteredData = mockData.filter(item =>
    item.medication.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = (file) => {
    // Mock download
    alert(`Downloading ${file}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Prescriptions</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search medications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Date</th>
            <th className="p-2">Medication</th>
            <th className="p-2">Dosage</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.medication}</td>
              <td className="p-2">{item.dosage}</td>
              <td className="p-2">
                <button onClick={() => handleDownload(item.file)} className="text-blue-500 hover:text-blue-700">
                  <Download size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prescriptions;