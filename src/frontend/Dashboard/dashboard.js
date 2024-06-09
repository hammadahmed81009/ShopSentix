import React from 'react';
import DonutChart from './donutChart';
import LineChart from './lineChart';
import PieChart from './pieChart';
import BarChart from './barChart';

const Dashboard = ({ averagePredictions }) => (
  <div className="ml-64 p-8 bg-gray-100 min-h-screen">
    <div className="grid grid-cols-5 gap-4 mb-8">
      {[
        {
          label: 'Quality',
          total: 100,
          highlighted: averagePredictions[2] * 100,
        },
        {
          label: 'Satisfaction',
          total: 100,
          highlighted: averagePredictions[3] * 100,
        },
        {
          label: 'Service',
          total: 100,
          highlighted: averagePredictions[4] * 100,
        },
        {
          label: 'Price',
          total: 100,
          highlighted: averagePredictions[1] * 100,
        },
        {
          label: 'Delivery',
          total: 100,
          highlighted: averagePredictions[0] * 100,
        },
      ].map(({ label, total, highlighted }) => (
        <div key={label} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{label}</h2>
          <DonutChart total={total} highlighted={highlighted} />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Pie Chart</h2>
        <PieChart
          positive={averagePredictions[5] * 100}
          negative={averagePredictions[6] * 100}
          neutral={averagePredictions[7] * 100}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
        <BarChart
          positive={averagePredictions[5] * 100}
          negative={averagePredictions[6] * 100}
          neutral={averagePredictions[7] * 100}
        />
      </div>
    </div>
  </div>
);

export default Dashboard;
