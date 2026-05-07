import jsPDF from 'jspdf';

const Downloads = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Electronic Health Record Summary', 10, 10);
    doc.text('Patient: John Doe', 10, 20);
    doc.text('Date: ' + new Date().toLocaleDateString(), 10, 30);
    doc.save('ehr_summary.pdf');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Download PDFs</h2>
          <p className="text-sm text-slate-600">Generate and download the patient EHR summary as a PDF.</p>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-700 mb-4">This summary file includes patient details and recent record data for offline review.</p>
        <button onClick={generatePDF} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Download EHR Summary PDF
        </button>
      </div>
    </div>
  );
};

export default Downloads;
