import React from 'react';
import ChartAnalysis from './ChartAnalysis';
import TechIndicatorSidebar from './TechIndicatorSidebar';
import InfoTabs from './InfoTabs';

const OneilAssistant = () => {
  return (
    <div className="flex flex-col h-full">
      {/* 상단 헤더 */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white">O'Neil's Style Assistant</h2>
        <p className="text-slate-400">윌리엄 오닐의 CAN SLIM 원칙에 기반한 투자 분석</p>
      </div>

      {/* 중앙 메인 영역 (차트 + 기술적 분석) */}
      <div className="flex-1 flex gap-6 mb-6 min-h-0">
        {/* 왼쪽: 차트 분석 (60%) */}
        <div className="w-3/5 h-full">
          <ChartAnalysis />
        </div>
        {/* 오른쪽: 기술적 지표 분석 (40%) */}
        <div className="w-2/5 h-full">
          <TechIndicatorSidebar />
        </div>
      </div>

      {/* 하단 탭 영역 */}
      <div className="h-[40%] flex-shrink-0">
        <InfoTabs />
      </div>
    </div>
  );
};

export default OneilAssistant;
