import React, { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import OneilAssistant from './components/oneil/OneilAssistant.jsx';

function App() {
  const [selectedMaster, setSelectedMaster] = useState("O'Neil");

  return (
    // 기본 다크모드 적용
    <div className="bg-slate-900 text-slate-200 flex h-screen font-sans">
      <Sidebar selectedMaster={selectedMaster} setSelectedMaster={setSelectedMaster} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* 선택된 마스터에 따라 다른 컴포넌트를 렌더링 */}
          {selectedMaster === "O'Neil" && <OneilAssistant />}
          {/* {selectedMaster === "Buffett" && <BuffettAssistant />} */}
        </main>
      </div>
    </div>
  );
}

export default App;
