import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import BarChart from './barChart';
import PieChart from './pieChart';
import LineChart from './lineChart';
import { useAveragePredictions } from '../TablePage/APC';

const App = () => {
  const [activeChart, setActiveChart] = useState('dashboard');
  const { averagePredictions } = useAveragePredictions();

  const renderContent = () => {
    switch (activeChart) {
      case 'dashboard':
        return <Dashboard averagePredictions={averagePredictions} />;
      case 'barchart':
        return (
          <div className="ml-64 p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
              <BarChart
                positive={averagePredictions[5] * 100}
                negative={averagePredictions[6] * 100}
                neutral={averagePredictions[7] * 100}
              />
            </div>
          </div>
        );
      case 'piechart':
        return (
          <div className="ml-64 p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Pie Chart</h2>
              <PieChart
                positive={averagePredictions[5] * 100}
                negative={averagePredictions[6] * 100}
                neutral={averagePredictions[7] * 100}
              />
            </div>
          </div>
        );
      case 'linechart':
        return (
          <div className="ml-64 p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Line Chart</h2>
              <LineChart />
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActiveChart={setActiveChart} />
      {renderContent()}
    </div>
  );
};

export default App;
