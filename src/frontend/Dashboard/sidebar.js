import React from 'react';

const Sidebar = ({ setActiveChart }) => (
  <div className="fixed inset-y-0 left-0 w-64 bg-blue-900 text-white p-4">
    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
    <ul>
      <li
        className="mb-4 hover:text-purple-500 cursor-pointer"
        onClick={() => setActiveChart('dashboard')}
      >
        Dashboard
      </li>
      <li
        className="mb-4 hover:text-purple-500 cursor-pointer"
        onClick={() => setActiveChart('barchart')}
      >
        Bar Chart
      </li>
      <li
        className="mb-4 hover:text-purple-500 cursor-pointer"
        onClick={() => setActiveChart('piechart')}
      >
        Pie Chart
      </li>
    </ul>
  </div>
);

export default Sidebar;
