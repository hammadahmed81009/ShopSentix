import React from 'react';

const ParentComponent = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        width="100%"
        height="100%"
        src="http://localhost:5000"
        title="Child App"
      />
    </div>
  );
};

export default ParentComponent;
