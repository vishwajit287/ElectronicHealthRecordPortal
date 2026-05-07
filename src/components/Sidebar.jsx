import { Link } from 'react-router-dom';
import { Home, History, Upload, FileText, Pill, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">EHR Portal</h2>
      </div>
      <nav className="mt-4">
        <Link to="/" className="block px-4 py-2 hover:bg-blue-700"><Home className="inline mr-2" /> Dashboard</Link>
        <Link to="/patient-history" className="block px-4 py-2 hover:bg-blue-700"><History className="inline mr-2" /> Patient History</Link>
        <Link to="/upload-reports" className="block px-4 py-2 hover:bg-blue-700"><Upload className="inline mr-2" /> Upload Reports</Link>
        <Link to="/lab-reports" className="block px-4 py-2 hover:bg-blue-700"><FileText className="inline mr-2" /> Lab Reports</Link>
        <Link to="/prescriptions" className="block px-4 py-2 hover:bg-blue-700"><Pill className="inline mr-2" /> Prescriptions</Link>
        <Link to="/downloads" className="block px-4 py-2 hover:bg-blue-700"><Download className="inline mr-2" /> Downloads</Link>
      </nav>
    </div>
  );
};

export default Sidebar;