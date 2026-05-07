import { useState } from 'react';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Prescriptions = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const mockData = [
    { id: 1, date: '2023-05-01', medication: 'Aspirin', dosage: '100mg', file: 'prescription1.pdf' },
    { id: 2, date: '2023-04-15', medication: 'Ibuprofen', dosage: '200mg', file: 'prescription2.pdf' },
  ];

  const filteredData = mockData.filter((item) => {
    const value = search.toLowerCase();
    return (
      item.date.toLowerCase().includes(value) ||
      item.medication.toLowerCase().includes(value) ||
      item.dosage.toLowerCase().includes(value) ||
      item.file.toLowerCase().includes(value)
    );
  });

  const handleDownload = (file) => {
    // Mock download
    alert(`Downloading ${file}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t('prescriptions')}</h2>
          <p className="text-sm text-slate-600">{t('searchPrescriptions')}</p>
        </div>
        <input
          type="text"
          placeholder={t('searchPrescriptions')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full table-fixed border-collapse text-left">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="w-1/5 px-4 py-3 text-sm font-semibold">Date</th>
              <th className="w-1/4 px-4 py-3 text-sm font-semibold">Medication</th>
              <th className="w-1/4 px-4 py-3 text-sm font-semibold">Dosage</th>
              <th className="w-1/4 px-4 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-t border-slate-200 hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-700">{item.date}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{item.medication}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{item.dosage}</td>
                <td className="px-4 py-3 text-sm text-slate-700">
                  <button onClick={() => handleDownload(item.file)} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <Download size={16} />
                    <span>{t('download')}</span>
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-sm text-slate-500">
                  No prescriptions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescriptions;
