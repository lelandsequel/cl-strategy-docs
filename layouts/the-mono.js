'use client';

import { useState, useEffect } from 'react';

export default function TheMono() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [lines, setLines] = useState([]);
  const [activeTab, setActiveTab] = useState('terminal');

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const terminalLines = [
    { type: 'cmd', text: '$ npm install @design-system/core' },
    { type: 'output', text: 'added 847 packages in 12.3s' },
    { type: 'cmd', text: '$ npm run build' },
    { type: 'output', text: '✓ built 42 components' },
    { type: 'output', text: '✓ optimized 128kb' },
    { type: 'cmd', text: '$ ./deploy.sh --production' },
    { type: 'output', text: '→ deploying to edge...' },
    { type: 'success', text: '✓ deployed successfully!' },
  ];

  const codeSnippet = `function init() {
  const config = {
    theme: "midnight",
    mode: "dark",
    animate: true
  };
  
  render(<App {...config} />);
}`;

  const files = [
    { name: 'src/index.tsx', size: '2.4KB', type: 'ts' },
    { name: 'src/App.tsx', size: '8.1KB', type: 'ts' },
    { name: 'src/components/', size: '--', type: 'dir' },
    { name: 'src/styles.css', size: '4.2KB', type: 'css' },
    { name: 'package.json', size: '1.8KB', type: 'json' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-mono text-sm overflow-hidden">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" 
          style={{ backgroundSize: '100% 2px, 3px 100%' }} 
        />
      </div>

      {/* Header Bar */}
      <header className="h-10 bg-[#1a1a1a] border-b border-[#2a2a2a] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-neutral-500">main — zsh</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>{new Date().toLocaleDateString()}</span>
          <span>●</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-[#2a2a2a]">
        {['terminal', 'files', 'output'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs uppercase tracking-wider border-r border-[#2a2a2a] transition-colors ${
              activeTab === tab 
                ? 'bg-[#0a0a0a] text-white border-b-2 border-b-white' 
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-82px)]">
        {/* Sidebar */}
        <div className="w-64 border-r border-[#2a2a2a] p-4">
          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Explorer</div>
          <div className="space-y-1">
            {files.map((file, i) => (
              <div key={i} className="flex items-center gap-2 py-1 hover:bg-[#1a1a1a] cursor-pointer group">
                <span className="text-neutral-500">{file.type === 'dir' ? '▸' : '○'}</span>
                <span className="text-neutral-400 group-hover:text-white">{file.name}</span>
                <span className="ml-auto text-neutral-600 text-xs">{file.size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Editor/Terminal */}
        <div className="flex-1 p-6 overflow-auto">
          {activeTab === 'terminal' && (
            <div className="space-y-2">
              {terminalLines.map((line, i) => (
                <div key={i} className={`${
                  line.type === 'cmd' ? 'text-green-400' :
                  line.type === 'success' ? 'text-blue-400' :
                  'text-neutral-400'
                }`}>
                  {line.type === 'cmd' && <span className="text-yellow-400 mr-2">$</span>}
                  {line.text}
                </div>
              ))}
              <div className="flex items-center text-white">
                <span className="text-yellow-400 mr-2">$</span>
                <span>echo "ready"</span>
                <span className={`ml-1 w-2 h-4 bg-white ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <pre className="text-xs leading-relaxed">
              <code className="text-amber-400">{'// '}src/App.tsx</code>
              <br />
              <code className="text-purple-400">{'import'} React</code> <code className="text-blue-400">{'from'} 'react'</code>;
              <br /><br />
              <code className="text-blue-400">{'export default'} </code>
              <code className="text-yellow-400">{'function'}</code> <code className="text-cyan-400">{'App'}</code>
              <code>{'() {'}</code>
              <br />
              &nbsp;&nbsp;<code className="text-blue-400">{'return'}</code> (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<code>{'<'}</code><code className="text-orange-400">{'div'}</code><code>{'>'}</code>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className="text-green-400">{'// Your code here'}</code>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<code>{'</'}</code><code className="text-orange-400">{'div'}</code><code>{'>'}</code>
              <br />
              &nbsp;&nbsp;);
              <br />
              {'}'}
            </pre>
          )}

          {activeTab === 'output' && (
            <div className="space-y-4">
              <div>
                <span className="text-blue-400">[INFO]</span> Starting development server...
              </div>
              <div>
                <span className="text-blue-400">[INFO]</span> Compiled successfully
              </div>
              <div>
                <span className="text-yellow-400">[WARN]</span> No ESLint configuration found
              </div>
              <div className="border-t border-[#2a2a2a] pt-4">
                <span className="text-green-400">✓</span> Ready in 2.341s
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-6 bg-[#1a1a1a] border-t border-[#2a2a2a] flex items-center justify-between px-4 text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-green-400">
            <span>●</span> main
          </span>
          <span className="text-neutral-500">0 errors</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-500">
          <span>UTF-8</span>
          <span>TypeScript</span>
          <span>Ln 42, Col 18</span>
        </div>
      </footer>
    </div>
  );
}
