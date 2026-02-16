'use client';

import { useState } from 'react';

export default function TheDashboard() {
  const [activeWidget, setActiveWidget] = useState(null);

  const widgets = [
    { id: 'analytics', title: 'Analytics', icon: '📊', color: 'from-blue-500 to-blue-600', size: 'col-span-2 row-span-2' },
    { id: 'revenue', title: 'Revenue', icon: '💰', color: 'from-green-500 to-green-600', size: 'col-span-1' },
    { id: 'users', title: 'Active Users', icon: '👥', color: 'from-purple-500 to-purple-600', size: 'col-span-1' },
    { id: 'performance', title: 'Performance', icon: '⚡', color: 'from-yellow-500 to-yellow-600', size: 'col-span-2' },
    { id: 'notifications', title: 'Notifications', icon: '🔔', color: 'from-red-500 to-red-600', size: 'col-span-1 row-span-2' },
    { id: 'storage', title: 'Storage', icon: '💾', color: 'from-cyan-500 to-cyan-600', size: 'col-span-1' },
    { id: 'api', title: 'API Health', icon: '🔗', color: 'from-pink-500 to-pink-600', size: 'col-span-1' },
  ];

  const MetricWidget = ({ title, value, change, icon }) => (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all">
      <div className="flex justify-between items-start mb-4">
        <span className="text-2xl">{icon}</span>
        <span className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </span>
      </div>
      <p className="text-4xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-zinc-500">{title}</p>
    </div>
  );

  const ChartWidget = () => (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">Traffic Overview</h3>
        <select className="bg-zinc-800 text-zinc-400 text-sm rounded-lg px-3 py-1 border-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <div className="h-48 flex items-end gap-2">
        {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" style={{ height: `${height}%` }} />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-zinc-500">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );

  const NotificationWidget = () => (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 h-full">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Alerts</h3>
      <div className="space-y-3">
        {[
          { type: 'error', msg: 'Server response time increased' },
          { type: 'warning', msg: 'Storage at 85% capacity' },
          { type: 'success', msg: 'Deployment completed' },
          { type: 'info', msg: 'New user signup spike' },
        ].map((alert, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg">
            <div className={`w-2 h-2 rounded-full ${
              alert.type === 'error' ? 'bg-red-500' :
              alert.type === 'warning' ? 'bg-yellow-500' :
              alert.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
            }`} />
            <span className="text-sm text-zinc-300">{alert.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-zinc-500 text-sm">Welcome back, Admin</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
            <span className="text-zinc-400">🔍</span>
          </button>
          <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors relative">
            <span className="text-zinc-400">🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full" />
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricWidget title="Total Revenue" value="$48.2K" change={12.5} icon="💰" />
        <MetricWidget title="Active Users" value="2,847" change={8.2} icon="👥" />
        <MetricWidget title="Conversion" value="3.24%" change={-2.1} icon="📈" />
        <MetricWidget title="Avg. Session" value="4m 32s" change={5.7} icon="⏱️" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Large Chart */}
        <div className="col-span-2 row-span-2">
          <ChartWidget />
        </div>

        {/* Notifications */}
        <div className="row-span-2">
          <NotificationWidget />
        </div>

        {/* Bottom Widgets */}
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <MetricWidget title="API Requests" value="1.2M" change={15.3} icon="🔗" />
          <MetricWidget title="Uptime" value="99.9%" change={0.1} icon="✅" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-3">
        {['Generate Report', 'Export Data', 'Settings'].map((action, i) => (
          <button 
            key={action}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-medium transition-all hover:scale-105"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
