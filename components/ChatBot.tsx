
import React, { useState, useRef, useEffect } from 'react';
import { getHealthAdviceStream } from '../geminiService';
import { ChatMessage } from '../types';

const QUICK_QUESTIONS = [
  "Apa gejala awal Super Flu?",
  "Bagaimana cara pencegahannya?",
  "Apakah vaksin flu biasa efektif?",
  "Beda Super Flu dengan flu biasa?"
];

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Saya EduSense AI. Ada yang ingin Anda ketahui lebih dalam tentang Super Flu hari ini? Silakan tanya apa saja, saya di sini untuk mengedukasi.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (customQuery?: string) => {
    const query = customQuery || input;
    if (!query.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setIsLoading(true);

    try {
      const responseStream = await getHealthAdviceStream(query);
      
      // Add an empty model message to be filled by the stream
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      let fullText = '';
      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { 
              role: 'model', 
              text: fullText 
            };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Maaf, terjadi kendala teknis. Mohon coba beberapa saat lagi.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="asisten" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-teal-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-teal-600 font-bold tracking-widest uppercase text-xs">Interactive Assistant</span>
        <h2 className="text-4xl font-serif text-slate-900 mt-2 mb-4">Tanya EduSense AI</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Butuh informasi cepat? Asisten kami siap menjawab pertanyaan Anda seputar mitigasi dan pemahaman virus flu.</p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl shadow-teal-900/5 overflow-hidden flex flex-col h-[650px] border border-slate-100">
        {/* Chat Header */}
        <div className="bg-white border-b border-slate-100 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner text-white">
                ✨
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-bold text-slate-800">EduSense AI</h4>
              <p className="text-xs text-slate-400 font-medium tracking-wide">PAKAR KESEHATAN VIRTUAL</p>
            </div>
          </div>
          <div className="hidden sm:block">
             <span className="bg-teal-50 text-teal-700 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter border border-teal-100">
               Data Terverifikasi
             </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#fcfdfe]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`max-w-[85%] p-5 rounded-3xl ${
                msg.role === 'user' 
                ? 'bg-teal-600 text-white rounded-tr-none shadow-lg shadow-teal-600/10' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm leading-relaxed'
              }`}>
                {msg.text.split('\n').map((line, index) => (
                  <p key={index} className={line.startsWith('-') || line.startsWith('*') ? 'ml-2' : 'mb-2'}>{line}</p>
                ))}
                {msg.text === '' && msg.role === 'model' && (
                  <div className="flex space-x-2 py-2">
                    <div className="w-2 h-2 bg-teal-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-teal-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Chips & Input */}
        <div className="p-6 bg-white border-t border-slate-50 space-y-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {QUICK_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-4 py-2 bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 border border-slate-200 hover:border-teal-200 rounded-full text-xs font-semibold transition-all disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-3 items-center bg-slate-100 rounded-2xl px-4 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-teal-500/20 transition-all border border-transparent focus-within:border-teal-100">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ketik pertanyaan atau pilih topik di atas..."
              className="flex-1 bg-transparent border-none py-3 text-slate-800 placeholder-slate-400 outline-none text-sm font-medium"
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-xl transition-all shadow-md hover:shadow-teal-500/20 disabled:bg-slate-300 disabled:shadow-none"
            >
              {isLoading ? (
                 <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              )}
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 font-medium">
            Informasi AI bertujuan untuk edukasi dan bukan pengganti saran medis profesional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
