import React from 'react';
import { FiSend } from 'react-icons/fi';

const ChatWindow = () => {
  // 채팅 메시지 상태 관리 (예시)
  const messages = [
    { from: 'ai', text: "안녕하십니까? 윌리엄 오닐의 CAN SLIM 원칙에 따라 최고의 주식을 분석해 드립니다. 어떤 종목이 궁금하십니까?" },
    { from: 'user', text: "최근 신고가를 경신한 기술주에 대해 알려줘." },
    { from: 'ai', text: "좋은 질문입니다. CAN SLIM의 'N'은 새로운 제품, 새로운 경영, 새로운 신고가를 의미합니다. 현재 시장에서 신고가를 기록 중인 몇몇 기술주를 분석해볼까요? 특정 종목을 지정해주시면 더 상세한 분석이 가능합니다." },
  ];

  return (
    <div className="h-full flex flex-col p-4">
      {/* 대화 내용 */}
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-md lg:max-w-lg p-3 rounded-2xl ${
                msg.from === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none shadow'
                  : 'bg-slate-700 text-slate-200 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      {/* 메시지 입력창 */}
      <div className="mt-4 flex items-center gap-2 flex-shrink-0">
        <input
          type="text"
          placeholder="O'Neil Assistant에게 메시지 보내기..."
          className="flex-grow bg-slate-900 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-lg transition-colors shadow">
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
