import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ChartAnalysis = () => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg h-full flex flex-col p-4">
      {/* 상단 컨트롤러 */}
      <div className="flex items-center mb-3 gap-2 flex-shrink-0">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="종목 검색 (예: AAPL)"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition">
          일봉
        </button>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
          주봉
        </button>
      </div>

      {/* 차트가 들어갈 공간 (Placeholder) */}
      <div className="flex-1 bg-black rounded-md flex items-center justify-center min-h-0">
        <p className="text-slate-600">Chart will be displayed here.</p>
      </div>
    </div>
  );
};

export default ChartAnalysis;
