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
    <div>
      <h2 className="text-xl font-bold mb-4">Download PDFs</h2>
      <button onClick={generatePDF} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Download EHR Summary PDF
      </button>
    </div>
  );
};

export default Downloads;