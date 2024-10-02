import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-9/12 rounded-lg shadow-lg h-[80vh] flex flex-col overflow-hidden bg-white">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default App;
