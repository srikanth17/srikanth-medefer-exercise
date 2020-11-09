import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
