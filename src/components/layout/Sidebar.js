import React from 'react';
import { FaBook } from 'react-icons/fa'; // react-icons 예시

const MasterBook = ({ title, selected, onClick, disabled = false }) => (
  <div
    onClick={!disabled ? onClick : undefined}
    className={`flex items-center p-3 my-2 rounded-lg transition-all duration-200 group ${
      disabled 
        ? 'cursor-not-allowed opacity-50' 
        : `cursor-pointer ${selected ? 'bg-indigo-600 shadow-lg' : 'hover:bg-slate-700'}`
    }`}
  >
    <FaBook
      className={`text-2xl transition-transform duration-200 ${
        selected ? 'text-white' : 'text-indigo-400 group-hover:text-indigo-300'
      } ${!disabled && 'group-hover:scale-110'}`}
    />
    <span className={`ml-4 font-bold ${selected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
      {title}
    </span>
  </div>
);

const Sidebar = ({ selectedMaster, setSelectedMaster }) => {
  // 나중에 API 등에서 마스터 목록을 받아올 수 있습니다.
  const masters = ["O'Neil's Style", "Buffett's Way", "Lynch's Logic"];

  return (
    <aside className="w-1/5 min-w-[280px] bg-slate-800 p-4 flex flex-col shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-6 px-3">My Masters</h2>
      <nav>
        <MasterBook
          title="O'Neil's Style"
          selected={selectedMaster === "O'Neil"}
          onClick={() => setSelectedMaster("O'Neil")}
        />
        {/* 다른 책들은 현재 비활성화된 상태로 표시 */}
        <MasterBook title="Buffett's Way" disabled={true} />
        <MasterBook title="Lynch's Logic" disabled={true} />
      </nav>
    </aside>
  );
};

export default Sidebar;
