import React from 'react';

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-400 to-purple-600 pt-6 pl-4 rounded-t-lg shadow-md">
      <nav className="flex justify-start">
        {tabs.map((tab) => (
          <Tab
            key={tab.href}
            href={tab.href}
            label={tab.label}
            isActive={activeTab === tab.label.toLowerCase()}
            onClick={() => setActiveTab(tab.label.toLowerCase())}
          />
        ))}
      </nav>
    </header>
  );
}

const Tab = ({ href, label, isActive, onClick }) => (
  <a
    href={href}
    className={`flex items-center px-6 py-2 text-lg rounded-t-lg transition duration-300 ease-in-out ${
      isActive 
        ? 'bg-white text-blue-600 z-10' 
        : 'bg-gray-600 text-white hover:bg-gray-500'
    } relative`}
    onClick={onClick}
  >
    {label}
  </a>
);

export default Header;
