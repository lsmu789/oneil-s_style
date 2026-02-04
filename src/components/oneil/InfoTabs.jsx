import React, { useState } from 'react';
import ChatWindow from './ChatWindow.jsx';
import NewsPanel from './NewsPanel.jsx';
import FinancialsPanel from './FinancialsPanel.jsx';

const TabButton = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 font-bold rounded-t-lg transition-colors ${
      active ? 'bg-slate-800 text-white' : 'bg-transparent text-slate-400 hover:bg-slate-800/50 hover:text-white'
    }`}
  >
    {title}
  </button>
);

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="h-full flex flex-col">
      {/* 탭 네비게이션 */}
      <div className="flex-shrink-0">
        <TabButton title="채팅" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
        <TabButton title="뉴스" active={activeTab === 'news'} onClick={() => setActiveTab('news')} />
        <TabButton title="재무" active={activeTab === 'financials'} onClick={() => setActiveTab('financials')} />
      </div>

      {/* 탭 컨텐츠 */}
      <div className="flex-1 bg-slate-800 rounded-b-xl rounded-tr-xl shadow-lg overflow-hidden">
        {activeTab === 'chat' && <ChatWindow />}
        {activeTab === 'news' && <NewsPanel />}
        {activeTab === 'financials' && <FinancialsPanel />}
      </div>
    </div>
  );
};

export default InfoTabs;
