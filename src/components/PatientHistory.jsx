import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PatientHistory = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [yearMonthFilter, setYearMonthFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // Comprehensive mock data with all record types
  const allRecords = [
    {
      id: 1,
      date: '2023-05-01',
      type: 'Consultation',
      title: 'General Checkup',
      doctor: 'Dr. Smith',
      notes: 'Routine checkup - Patient in good health',
      details: 'Blood pressure normal, heart rate 72 bpm. No concerns noted. Continue current medication.',
      yearMonth: '2023-05',
    },
    {
      id: 2,
      date: '2023-04-15',
      type: 'Lab Test',
      title: 'Blood Work Analysis',
      doctor: 'Dr. Johnson',
      notes: 'Complete blood count and metabolic panel',
      details: 'Results: All values within normal range. Cholesterol: 180 mg/dL. Glucose: 95 mg/dL.',
      yearMonth: '2023-04',
    },
    {
      id: 3,
      date: '2023-03-20',
      type: 'Prescription',
      title: 'Medication Refill',
      doctor: 'Dr. Smith',
      notes: 'Refill for hypertension management',
      details: 'Lisinopril 10mg - 30 tablets. Take once daily in morning. No side effects reported.',
      yearMonth: '2023-03',
    },
    {
      id: 4,
      date: '2023-02-10',
      type: 'Surgery',
      title: 'Arthroscopic Knee Surgery',
      doctor: 'Dr. Williams',
      notes: 'Right knee meniscus repair',
      details: 'Procedure completed successfully. Estimated recovery: 6-8 weeks. Physical therapy recommended starting week 3.',
      yearMonth: '2023-02',
    },
    {
      id: 5,
      date: '2023-01-25',
      type: 'Doctor Notes',
      title: 'Follow-up Consultation',
      doctor: 'Dr. Brown',
      notes: 'Post-surgery follow-up assessment',
      details: 'Incision healing well. Pain level 2/10. Patient cleared for light activity. Schedule next follow-up in 2 weeks.',
      yearMonth: '2023-01',
    },
    {
      id: 6,
      date: '2022-12-15',
      type: 'Lab Test',
      title: 'X-Ray Imaging',
      doctor: 'Dr. Anderson',
      notes: 'Chest X-ray for annual screening',
      details: 'X-ray report: No abnormalities detected. Lungs clear. Heart size normal.',
      yearMonth: '2022-12',
    },
    {
      id: 7,
      date: '2022-11-01',
      type: 'Consultation',
      title: 'Diabetes Management Review',
      doctor: 'Dr. Smith',
      notes: 'Annual diabetes check-in',
      details: 'HbA1c: 6.8%. Patient maintaining good glucose control. Discussed dietary modifications.',
      yearMonth: '2022-11',
    },
    {
      id: 8,
      date: '2022-10-10',
      type: 'Prescription',
      title: 'New Medication Prescription',
      doctor: 'Dr. Johnson',
      notes: 'Prescribed for cholesterol management',
      details: 'Atorvastatin 20mg - 90 tablets. Take once daily at evening. Take with or without food.',
      yearMonth: '2022-10',
    },
  ];

  // Filter logic
  const filteredRecords = allRecords.filter((item) => {
    const searchValue = search.toLowerCase();
    const matchesSearch =
      item.date.toLowerCase().includes(searchValue) ||
      item.type.toLowerCase().includes(searchValue) ||
      item.title.toLowerCase().includes(searchValue) ||
      item.doctor.toLowerCase().includes(searchValue) ||
      item.notes.toLowerCase().includes(searchValue);

    const matchesType = typeFilter === 'all' || item.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesYearMonth = yearMonthFilter === 'all' || item.yearMonth === yearMonthFilter;

    return matchesSearch && matchesType && matchesYearMonth;
  });

  // Sort by date descending
  const sortedRecords = [...filteredRecords].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get unique year-months for filter
  const uniqueYearMonths = [...new Set(allRecords.map((r) => r.yearMonth))].sort().reverse();

  // Get type icon color based on type
  const getTypeColor = (type) => {
    const colors = {
      Consultation: 'bg-blue-100 text-blue-700',
      'Lab Test': 'bg-green-100 text-green-700',
      Prescription: 'bg-purple-100 text-purple-700',
      Surgery: 'bg-red-100 text-red-700',
      'Doctor Notes': 'bg-yellow-100 text-yellow-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t('patientMedicalTimeline')}</h2>
        <p className="text-sm text-slate-600 mt-1">{t('timelineDescription')}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('recordType')}</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          >
            <option value="all">{t('allTypes')}</option>
            <option value="consultation">{t('consultation')}</option>
            <option value="lab test">{t('labTest')}</option>
            <option value="prescription">{t('prescription')}</option>
            <option value="surgery">{t('surgery')}</option>
            <option value="doctor notes">{t('doctorNotes')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('yearMonth')}</label>
          <select
            value={yearMonthFilter}
            onChange={(e) => setYearMonthFilter(e.target.value)}
            className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          >
            <option value="all">{t('allDates')}</option>
            {uniqueYearMonths.map((ym) => (
              <option key={ym} value={ym}>
                {ym}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('search')}</label>
          <input
            type="text"
            placeholder={t('searchTimeline')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-96 rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </div>

      {/* Timeline with Scrollbar */}
      <div className="flex flex-col gap-4 bg-white rounded-lg border border-slate-200 p-4 shadow-sm" style={{ maxHeight: 'calc(100vh - 400px)', display: 'flex', flexDirection: 'column' }}>
        <div className="overflow-y-auto flex-1 pr-2">
          {sortedRecords.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-slate-500">{t('noRecords')}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedRecords.map((record) => (
                <div key={record.id} className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                  {/* Timeline Item Header */}
                  <div
                    onClick={() => toggleExpand(record.id)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      {/* Timeline dot and line */}
                      <div className="flex flex-col items-center pt-1">
                        <div className={`w-3 h-3 rounded-full border-2 border-slate-300 ${getTypeColor(record.type).split(' ')[0]}`}></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(record.type)}`}>{record.type}</span>
                          <span className="text-sm font-semibold text-slate-900">{record.title}</span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{record.notes}</p>
                        <div className="flex gap-4 mt-2 text-xs text-slate-500">
                          <span>📅 {record.date}</span>
                          <span>👨‍⚕️ {record.doctor}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <div className="ml-2 flex-shrink-0">
                      {expandedId === record.id ? (
                        <ChevronUp size={20} className="text-slate-600" />
                      ) : (
                        <ChevronDown size={20} className="text-slate-600" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedId === record.id && (
                    <div className="border-t border-slate-200 bg-slate-50 p-4">
                      <div className="bg-white rounded p-3 border border-slate-100">
                        <h4 className="font-semibold text-sm text-slate-900 mb-2">{t('detailedInformation')}</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">{record.details}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Stats - Sticky at Bottom */}
        <div className="border-t border-slate-200 pt-4 mt-2">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
              <p className="text-xs text-slate-600">{t('totalRecords')}</p>
              <p className="text-base font-bold text-slate-900">{allRecords.length}</p>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
              <p className="text-xs text-slate-600">{t('consultations')}</p>
              <p className="text-base font-bold text-slate-900">{allRecords.filter((r) => r.type === 'Consultation').length}</p>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
              <p className="text-xs text-slate-600">{t('labTests')}</p>
              <p className="text-base font-bold text-slate-900">{allRecords.filter((r) => r.type === 'Lab Test').length}</p>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
              <p className="text-xs text-slate-600">{t('prescriptions')}</p>
              <p className="text-base font-bold text-slate-900">{allRecords.filter((r) => r.type === 'Prescription').length}</p>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
              <p className="text-xs text-slate-600">{t('surgeries')}</p>
              <p className="text-base font-bold text-slate-900">{allRecords.filter((r) => r.type === 'Surgery').length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHistory;
