import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, History, Upload, FileText, Pill, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/patient-history', label: 'Patient History', icon: History },
  { to: '/upload-reports', label: 'Upload Reports', icon: Upload },
  { to: '/lab-reports', label: 'Lab Reports', icon: FileText },
  { to: '/prescriptions', label: 'Prescriptions', icon: Pill },
  { to: '/downloads', label: 'Downloads', icon: Download },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`h-full transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} bg-slate-100 text-slate-900 border-r border-slate-200 shadow-sm`}>
      <div className="flex items-center justify-between gap-2 p-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">EHR</span>
          {!collapsed && <span className="text-sm text-slate-600">Portal</span>}
        </div>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-full p-2 text-slate-600 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="mt-4 space-y-1 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-800 transition hover:bg-slate-200"
            >
              <Icon className="min-w-[20px]" />
              <span className={`${collapsed ? 'hidden' : 'inline'}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
