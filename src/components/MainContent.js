import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const MainContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="overflow-y-auto max-h-[calc(100vh-150px)]"> {/* Adjust height as needed */}
      {renderContent()}
    </div>
  );
};

export default MainContent;
