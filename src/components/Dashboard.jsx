const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Total Patients</h3>
          <p className="text-2xl">150</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Reports Uploaded</h3>
          <p className="text-2xl">45</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Lab Reports</h3>
          <p className="text-2xl">78</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Prescriptions</h3>
          <p className="text-2xl">120</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;