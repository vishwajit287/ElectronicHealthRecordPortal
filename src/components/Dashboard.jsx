import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t('dashboard')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{t('totalPatients')}</h3>
          <p className="text-2xl">150</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{t('reportsUploaded')}</h3>
          <p className="text-2xl">45</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{t('labReports')}</h3>
          <p className="text-2xl">78</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{t('prescriptions')}</h3>
          <p className="text-2xl">120</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;