import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PatientHistory from './components/PatientHistory';
import UploadReports from './components/UploadReports';
import LabReports from './components/LabReports';
import Prescriptions from './components/Prescriptions';
import Downloads from './components/Downloads';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patient-history" element={<PatientHistory />} />
              <Route path="/upload-reports" element={<UploadReports />} />
              <Route path="/lab-reports" element={<LabReports />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/downloads" element={<Downloads />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;