import React from 'react';

const FinancialsRow = ({ metric, value, change, isPositive }) => (
    <tr className="border-b border-slate-700">
        <td className="py-3 px-4 font-semibold text-slate-300">{metric}</td>
        <td className="py-3 px-4 text-right font-mono text-white">{value}</td>
        <td className={`py-3 px-4 text-right font-mono ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
        </td>
    </tr>
)

const FinancialsPanel = () => {
  return (
    <div className="h-full overflow-y-auto p-4">
        <h4 className="text-md font-bold text-white mb-2">재무 요약 (분기 기준)</h4>
        <table className="w-full text-sm">
            <thead>
                <tr className="text-left text-slate-400">
                    <th className="py-2 px-4 font-normal">항목</th>
                    <th className="py-2 px-4 font-normal text-right">수치</th>
                    <th className="py-2 px-4 font-normal text-right">YoY</th>
                </tr>
            </thead>
            <tbody>
                <FinancialsRow metric="매출액 (Revenue)" value="$119.58B" change="+2.08%" isPositive={true} />
                <FinancialsRow metric="영업이익 (Operating Income)" value="$40.37B" change="+0.22%" isPositive={true} />
                <FinancialsRow metric="순이익 (Net Income)" value="$33.92B" change="+13.06%" isPositive={true} />
                <FinancialsRow metric="주당순이익 (EPS)" value="$2.18" change="+16.04%" isPositive={true} />
                <FinancialsRow metric="총자산 (Total Assets)" value="$353.53B" change="-4.61%" isPositive={false} />
            </tbody>
        </table>
    </div>
  );
};

export default FinancialsPanel;
