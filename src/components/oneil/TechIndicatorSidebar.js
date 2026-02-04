import React from 'react';

const Indicator = ({ name, value, analysis }) => (
    <div className="border-b border-slate-700 py-3">
        <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-300">{name}</span>
            <span className="font-mono text-sm bg-slate-900 px-2 py-1 rounded">{value}</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">{analysis}</p>
    </div>
);


const TechIndicatorSidebar = () => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg h-full flex flex-col p-4">
      <h3 className="text-lg font-bold text-white mb-3 flex-shrink-0">기술적 지표 분석</h3>
      <div className="flex-1 overflow-y-auto pr-2">
        <Indicator 
            name="RSI (14)" 
            value="65.2"
            analysis="과매수 구간에 근접하고 있으나, 아직 상승 여력은 남아있습니다." 
        />
        <Indicator 
            name="MACD (12, 26, 9)" 
            value="Golden Cross"
            analysis="MACD선이 시그널선을 상향 돌파하여 단기 상승 추세 전환 가능성이 높습니다." 
        />
        <Indicator 
            name="Moving Average (50/200)" 
            value="Bullish"
            analysis="50일 이동평균선이 200일 이동평균선 위에 위치하는 정배열 상태입니다." 
        />
        <Indicator 
            name="Volume" 
            value="+35.8%"
            analysis="최근 거래량이 평균 대비 증가하며 주가 상승에 신뢰도를 더합니다." 
        />
         <Indicator 
            name="Stochastic (14, 3, 3)" 
            value="78.1"
            analysis="과매수 구간에 위치해 있어 단기적인 조정 가능성에 유의해야 합니다." 
        />
      </div>
    </div>
  );
};

export default TechIndicatorSidebar;
