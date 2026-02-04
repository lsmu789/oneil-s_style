import React from 'react';

const NewsItem = ({ source, title, time }) => (
    <div className="border-b border-slate-700 py-3 hover:bg-slate-700/50 px-4">
        <p className="text-sm font-bold text-white">{title}</p>
        <div className="flex justify-between items-center text-xs text-slate-400 mt-1">
            <span>{source}</span>
            <span>{time}</span>
        </div>
    </div>
)

const NewsPanel = () => {
  return (
    <div className="h-full overflow-y-auto">
        <NewsItem source="Reuters" title="Tech Stocks Hit All-Time Highs Amid AI Boom" time="2 hours ago" />
        <NewsItem source="Bloomberg" title="Federal Reserve Signals Steady Interest Rates" time="5 hours ago" />
        <NewsItem source="Wall Street Journal" title="AAPL Announces New Chip Technology, Stock Surges" time="1 day ago" />
        <NewsItem source="The Economist" title="Global Supply Chain Issues Easing, Analysts Say" time="2 days ago" />
    </div>
  );
};

export default NewsPanel;
