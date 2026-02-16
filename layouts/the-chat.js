// THE CHAT - Chat interface aesthetic
export default function TheChat({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <header className="p-4 border-b border-[#16213e] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">{businessName.charAt(0)}</span>
          </div>
          <div>
            <h1 className="text-white font-medium">{businessName}</h1>
            <p className="text-green-400 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Online now
            </p>
          </div>
        </header>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-xs">{businessName.charAt(0)}</span>
            </div>
            <div className="bg-[#16213e] rounded-2xl rounded-tl-sm p-4 max-w-[70%]">
              <p className="text-white">Hi there! 👋 Welcome to {businessName}. How can we help you today?</p>
            </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-neutral-600 flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-xs">You</span>
            </div>
            <div className="bg-[#0f3460] rounded-2xl rounded-tr-sm p-4 max-w-[70%]">
              <p className="text-white">{tagline}</p>
            </div>
          </div>

          {services?.slice(0, 3).map((s, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-xs">{businessName.charAt(0)}</span>
              </div>
              <div className="bg-[#16213e] rounded-2xl rounded-tl-sm p-4 max-w-[70%]">
                <p className="text-white mb-1"><strong>{s.title}</strong></p>
                <p className="text-neutral-400 text-sm">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-[#16213e]">
          <div className="flex gap-2 mb-3">
            {services?.slice(0, 3).map((s, i) => (
              <button key={i} className="px-3 py-1 bg-[#16213e] text-neutral-300 rounded-full text-sm hover:bg-[#0f3460] transition-colors">
                {s.title}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-[#16213e] text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
