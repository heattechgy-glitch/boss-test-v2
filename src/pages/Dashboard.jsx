import React from 'react';

function Dashboard() {
  const metrics = [
    { label: 'Users', value: '1,234' },
    { label: 'Revenue', value: '$5,678' },
    { label: 'Sign-ups', value: '890' }
  ];

  const recentActivities = [
    'User John Doe signed up',
    'Revenue goal for Q3 reached',
    'New feature deployed',
    'Server maintenance completed'
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">{metric.label}</h2>
            <p className="text-2xl">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside space-y-2">
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-800 p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Statistics Chart</h2>
        <div className="h-48 bg-gray-700"></div>
      </div>
    </div>
  );
}

export default Dashboard;
