import { useEffect, useState } from 'react';
import SakuraPetals from './components/SakuraPetals';

function App() {
  const [level, setLevel] = useState(0);
  const [exp, setExp] = useState(0);
  const [showSystem, setShowSystem] = useState(false);

  useEffect(() => {
    // Animate level counter
    const levelInterval = setInterval(() => {
      setLevel((prev) => {
        if (prev >= 147) {
          clearInterval(levelInterval);
          return 147;
        }
        return prev + 1;
      });
    }, 20);

    // Animate experience bar
    const expInterval = setInterval(() => {
      setExp((prev) => {
        if (prev >= 78) {
          clearInterval(expInterval);
          return 78;
        }
        return prev + 1;
      });
    }, 30);

    // Show system window with delay
    setTimeout(() => setShowSystem(true), 500);

    return () => {
      clearInterval(levelInterval);
      clearInterval(expInterval);
    };
  }, []);

  const stats = [
    { name: 'STR', value: 85, color: 'from-red-600 to-red-400' },
    { name: 'INT', value: 92, color: 'from-purple-600 to-purple-400' },
    { name: 'AGI', value: 78, color: 'from-blue-600 to-blue-400' },
    { name: 'VIT', value: 88, color: 'from-green-600 to-green-400' },
    { name: 'PER', value: 95, color: 'from-yellow-600 to-yellow-400' },
  ];

  const skills = [
    { name: 'Shadow Extraction', rank: 'S', level: 'MAX' },
    { name: 'Domain Expansion', rank: 'S', level: 'Lv. 8' },
    { name: 'Ruler\'s Authority', rank: 'A', level: 'Lv. 6' },
    { name: 'Code Architecture', rank: 'S', level: 'Lv. 9' },
    { name: 'System Design', rank: 'A', level: 'Lv. 7' },
  ];

  const contactMethods = [
    { icon: 'fab fa-github', label: 'GitHub', value: '@shadow-monarch', color: 'hover:border-purple-400' },
    { icon: 'fab fa-discord', label: 'Discord', value: 'ShadowMonarch#0001', color: 'hover:border-indigo-400' },
    { icon: 'fab fa-telegram', label: 'Telegram', value: '@shadow_monarch', color: 'hover:border-blue-400' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'monarch@shadow.dev', color: 'hover:border-pink-400' },
    { icon: 'fab fa-twitter', label: 'Twitter', value: '@shadow_arise', color: 'hover:border-cyan-400' },
    { icon: 'fas fa-globe', label: 'Website', value: 'shadow-monarch.dev', color: 'hover:border-yellow-400' },
  ];

  const recentQuests = [
    { name: 'Full-Stack Dungeon Clear', reward: '+500 EXP', status: 'completed' },
    { name: 'React Component Forge', reward: '+300 EXP', status: 'completed' },
    { name: 'API Gateway Raid', reward: '+450 EXP', status: 'in-progress' },
    { name: 'Database Optimization', reward: '+350 EXP', status: 'completed' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Sakura Petals */}
      <SakuraPetals />

      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://image.qwenlm.ai/generated-images/32b7fdd0-0a1d-4c29-af73-8ebeeb18150e/_result.png"
          alt="Sakura Garden"
          className="w-full h-full object-cover"
        />
        <div className="banner-overlay absolute inset-0" />

        {/* Profile Info on Banner */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-purple-900 via-bordeaux to-black flex items-center justify-center">
                  <span className="text-5xl md:text-6xl">👤</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse" />
              </div>
              {/* Rank Badge */}
              <div className="rank-badge absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg shadow-yellow-500/50">
                <span className="text-black font-bold text-lg" style={{ fontFamily: 'Cinzel' }}>S</span>
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
            </div>

            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1
                className="title-glitch text-3xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'Cinzel' }}
                data-text="SHADOW MONARCH"
              >
                SHADOW MONARCH
              </h1>
              <p className="text-purple-300 text-lg md:text-xl" style={{ fontFamily: 'Rajdhani' }}>
                ⚔️ Full-Stack Developer | System Architect ⚔️
              </p>
              <p className="text-pink-200/70 text-sm mt-1">
                「 I alone level up 」
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 relative z-10">

        {/* System Notification */}
        {showSystem && (
          <div className="system-window rounded-lg p-4 mb-8 text-center">
            <p className="text-purple-300 text-sm tracking-widest uppercase mb-1">
              ⚡ System Notification ⚡
            </p>
            <p className="text-white text-lg" style={{ fontFamily: 'Cinzel' }}>
              You have awakened as a <span className="text-yellow-400">Shadow Monarch</span>
            </p>
            <p className="text-purple-200/60 text-xs mt-2">
              [Quest Available: Build Something Amazing]
            </p>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* Level & Stats Panel */}
          <div className="system-window rounded-lg p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-purple-200" style={{ fontFamily: 'Cinzel' }}>
                ◈ STATUS WINDOW
              </h2>
              <span className="text-xs text-purple-400 tracking-wider">[ACTIVE]</span>
            </div>

            {/* Level Display */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-black/30 rounded-lg border border-purple-900/50">
              <div className="text-center">
                <p className="text-xs text-purple-400 uppercase tracking-wider">Level</p>
                <p className="text-4xl font-bold text-yellow-400" style={{ fontFamily: 'Cinzel', animation: 'text-glow 2s ease-in-out infinite' }}>
                  {level}
                </p>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-purple-300 mb-1">
                  <span>EXP</span>
                  <span>{exp}%</span>
                </div>
                <div className="stat-bar h-4">
                  <div
                    className="stat-bar-fill bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-400"
                    style={{ width: `${exp}%` }}
                  />
                </div>
                <p className="text-xs text-purple-400/60 mt-1">
                  Next Level: {1000 - (exp * 13)} EXP remaining
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              {stats.map((stat) => (
                <div key={stat.name} className="flex items-center gap-3">
                  <span className="text-sm font-bold text-purple-200 w-10" style={{ fontFamily: 'Rajdhani' }}>
                    {stat.name}
                  </span>
                  <div className="flex-1 stat-bar h-3">
                    <div
                      className={`stat-bar-fill bg-gradient-to-r ${stat.color}`}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                  <span className="text-sm text-purple-300 w-8 text-right">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Panel */}
          <div className="system-window rounded-lg p-6">
            <h2 className="text-xl font-bold text-purple-200 mb-4" style={{ fontFamily: 'Cinzel' }}>
              ◈ SKILLS
            </h2>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="p-3 bg-black/30 rounded border border-purple-900/30 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-100">{skill.name}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      skill.rank === 'S' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {skill.rank}
                    </span>
                  </div>
                  <p className="text-xs text-purple-400 mt-1">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Recent Quests */}
          <div className="system-window rounded-lg p-6">
            <h2 className="text-xl font-bold text-purple-200 mb-4" style={{ fontFamily: 'Cinzel' }}>
              ◈ RECENT QUESTS
            </h2>
            <div className="space-y-3">
              {recentQuests.map((quest, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-black/30 rounded border border-purple-900/30">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${
                      quest.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'
                    }`} />
                    <span className="text-sm text-purple-100">{quest.name}</span>
                  </div>
                  <span className="text-xs text-yellow-400">{quest.reward}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Widget */}
          <div className="system-window rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📡</span>
              <h2 className="text-xl font-bold text-purple-200" style={{ fontFamily: 'Cinzel' }}>
                HOW TO CONTACT ME
              </h2>
            </div>
            <p className="text-purple-300/70 text-sm mb-4">
              Reach out through any of these channels. I respond to all summoning requests.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactMethods.map((contact) => (
                <div
                  key={contact.label}
                  className={`contact-card p-3 bg-black/40 rounded-lg border border-purple-900/40 ${contact.color} cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${contact.icon} text-lg text-purple-300`} />
                    <div>
                      <p className="text-xs text-purple-400 uppercase tracking-wider">{contact.label}</p>
                      <p className="text-sm text-purple-100">{contact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shadow Army / Repos */}
        <div className="system-window rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-200 mb-4" style={{ fontFamily: 'Cinzel' }}>
            ◈ SHADOW ARMY (Repositories)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'shadow-extraction', desc: 'Automated deployment system', lang: 'TypeScript', stars: 342 },
              { name: 'arise-system', desc: 'Full-stack framework', lang: 'React', stars: 256 },
              { name: 'monarch-api', desc: 'RESTful API gateway', lang: 'Node.js', stars: 189 },
              { name: 'domain-expansion', desc: 'Container orchestration', lang: 'Docker', stars: 167 },
              { name: 'ruler-cmd', desc: 'CLI tools collection', lang: 'Rust', stars: 134 },
              { name: 'night-portal', desc: 'Real-time communication', lang: 'WebSocket', stars: 98 },
            ].map((repo) => (
              <div key={repo.name} className="p-4 bg-black/30 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-all group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fas fa-folder text-purple-400 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-sm font-bold text-purple-100 group-hover:text-yellow-300 transition-colors">{repo.name}</span>
                </div>
                <p className="text-xs text-purple-400/70 mb-3">{repo.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-300 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    {repo.lang}
                  </span>
                  <span className="text-xs text-yellow-400 flex items-center gap-1">
                    <i className="fas fa-star text-[10px]" />
                    {repo.stars}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-purple-900/30">
          <p className="text-purple-400/50 text-sm" style={{ fontFamily: 'Cinzel' }}>
            「 The system has chosen me 」
          </p>
          <p className="text-purple-400/30 text-xs mt-2">
            © 2024 Shadow Monarch | Arise
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
