SettingsScreen.tsximport { ArrowLeft, Wifi, WifiOff, Globe, Zap, Shield, Mic, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const [isOffline, setIsOffline] = useState(true);
  const [language, setLanguage] = useState('English');
  const [analysisMode, setAnalysisMode] = useState(50); // 0-100 scale, 0=speed, 100=depth
  const [micPermission, setMicPermission] = useState(true);
  const [messageReading, setMessageReading] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian'];

  return (
    <div 
      className="min-h-screen animate-fade-in"
      style={{
        background: 'linear-gradient(180deg, var(--ec-light-blue) 0%, white 100%)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-16">
        <button
          onClick={() => onNavigate('welcome')}
          className="p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md transition-all-smooth hover:shadow-lg border-0"
        >
          <ArrowLeft className="w-6 h-6" style={{ color: 'var(--ec-text-primary)' }} />
        </button>
        <h1 
          className="text-xl"
          style={{ color: 'var(--ec-text-primary)' }}
        >
          Settings
        </h1>
        <div className="w-12"></div>
      </div>

      <div className="px-6 pb-6">
        {/* Privacy & Security */}
        <div className="mb-6">
          <h2 
            className="text-lg mb-4"
            style={{ color: 'var(--ec-text-primary)' }}
          >
            Privacy & Security
          </h2>
          
          {/* Offline Mode */}
          <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div 
                  className="p-2 rounded-xl"
                  style={{ backgroundColor: isOffline ? 'var(--ec-soft-green)' : 'var(--ec-soft-red)' }}
                >
                  {isOffline ? (
                    <WifiOff className="w-5 h-5" style={{ color: '#10b981' }} />
                  ) : (
                    <Wifi className="w-5 h-5" style={{ color: '#ef4444' }} />
                  )}
                </div>
                <div>
                  <h3 style={{ color: 'var(--ec-text-primary)' }}>Work Offline</h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--ec-text-muted)' }}
                  >
                    Keep your data private and secure
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOffline(!isOffline)}
                className={`w-12 h-6 rounded-full transition-all-smooth border-0 ${
                  isOffline ? 'justify-end' : 'justify-start'
                } flex items-center p-1`}
                style={{ backgroundColor: isOffline ? 'var(--ec-turquoise)' : '#d1d5db' }}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-md transition-all-smooth"></div>
              </button>
            </div>
          </div>

          {/* Permissions */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: 'var(--ec-lavender)' }}
                  >
                    <Mic className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--ec-text-primary)' }}>Microphone Access</h3>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--ec-text-muted)' }}
                    >
                      For voice message analysis
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMicPermission(!micPermission)}
                  className={`w-12 h-6 rounded-full transition-all-smooth border-0 ${
                    micPermission ? 'justify-end' : 'justify-start'
                  } flex items-center p-1`}
                  style={{ backgroundColor: micPermission ? 'var(--ec-turquoise)' : '#d1d5db' }}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-md transition-all-smooth"></div>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: 'var(--ec-beige)' }}
                  >
                    <MessageSquare className="w-5 h-5" style={{ color: '#f59e0b' }} />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--ec-text-primary)' }}>Message Reading</h3>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--ec-text-muted)' }}
                    >
                      Access messages from other apps
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMessageReading(!messageReading)}
                  className={`w-12 h-6 rounded-full transition-all-smooth border-0 ${
                    messageReading ? 'justify-end' : 'justify-start'
                  } flex items-center p-1`}
                  style={{ backgroundColor: messageReading ? 'var(--ec-turquoise)' : '#d1d5db' }}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-md transition-all-smooth"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-6">
          <h2 
            className="text-lg mb-4"
            style={{ color: 'var(--ec-text-primary)' }}
          >
            Preferences
          </h2>

          {/* Language Selection */}
          <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg mb-4">
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="p-2 rounded-xl"
                style={{ backgroundColor: 'var(--ec-light-blue)' }}
              >
                <Globe className="w-5 h-5" style={{ color: 'var(--ec-turquoise)' }} />
              </div>
              <div>
                <h3 style={{ color: 'var(--ec-text-primary)' }}>Language</h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--ec-text-muted)' }}
                >
                  Interface and analysis language
                </p>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/70 border-0 shadow-sm"
              style={{ color: 'var(--ec-text-primary)' }}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          {/* Analysis Mode Slider */}
          <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="p-2 rounded-xl"
                style={{ backgroundColor: 'var(--ec-lavender)' }}
              >
                <Zap className="w-5 h-5" style={{ color: '#8b5cf6' }} />
              </div>
              <div>
                <h3 style={{ color: 'var(--ec-text-primary)' }}>Analysis Mode</h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--ec-text-muted)' }}
                >
                  Balance between speed and depth
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="100"
                value={analysisMode}
                onChange={(e) => setAnalysisMode(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ 
                  background: `linear-gradient(to right, var(--ec-turquoise) 0%, var(--ec-turquoise) ${analysisMode}%, #d1d5db ${analysisMode}%, #d1d5db 100%)`
                }}
              />
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--ec-text-muted)' }}>Fast</span>
                <span style={{ color: 'var(--ec-text-muted)' }}>Detailed</span>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="text-center">
            <div 
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: 'var(--ec-turquoise)' }}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 
              className="mb-2"
              style={{ color: 'var(--ec-text-primary)' }}
            >
              Empathetic Communicator v1.0
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--ec-text-secondary)' }}
            >
              Your private AI companion for better communication. All analysis happens offline to protect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
