import { Heart, MessageCircle, Lightbulb } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
  userName: string;
}

export function WelcomeScreen({ onNavigate, userName }: WelcomeScreenProps) {
  const dailyTip = "Remember: Listening fully before responding shows genuine care and builds deeper connections.";

  return (
    <div 
      className="min-h-screen p-6 flex flex-col animate-fade-in"
      style={{
        background: 'linear-gradient(135deg, var(--ec-light-blue) 0%, var(--ec-lavender) 50%, var(--ec-beige) 100%)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-center mb-8 pt-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
          <Heart 
            className="w-8 h-8 animate-gentle-pulse" 
            style={{ color: 'var(--ec-turquoise)' }}
          />
        </div>
      </div>

      {/* Greeting */}
      <div className="text-center mb-12">
        <h1 
          className="text-3xl mb-2"
          style={{ color: 'var(--ec-text-primary)' }}
        >
          Hello, {userName}
        </h1>
        <p 
          className="text-lg opacity-80"
          style={{ color: 'var(--ec-text-secondary)' }}
        >
          How can I help you communicate better today?
        </p>
      </div>

      {/* Main Action Buttons */}
      <div className="flex-1 flex flex-col gap-4 mb-8">
        <button
          onClick={() => onNavigate('analysis')}
          className="w-full p-6 rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0"
        >
          <div className="flex items-center gap-4">
            <div 
              className="p-3 rounded-2xl"
              style={{ backgroundColor: 'var(--ec-turquoise)' }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 
                className="text-xl mb-1"
                style={{ color: 'var(--ec-text-primary)' }}
              >
                New Analysis
              </h3>
              <p 
                className="text-sm opacity-70"
                style={{ color: 'var(--ec-text-secondary)' }}
              >
                Analyze a message for tone and empathy
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('recommendations')}
          className="w-full p-6 rounded-3xl bg-white/70 backdrop-blur-sm shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0"
        >
          <div className="flex items-center gap-4">
            <div 
              className="p-3 rounded-2xl"
              style={{ backgroundColor: 'var(--ec-lavender)', border: '2px solid rgba(139, 92, 246, 0.3)' }}
            >
              <MessageCircle className="w-6 h-6" style={{ color: '#6366f1' }} />
            </div>
            <div className="text-left">
              <h3 
                className="text-xl mb-1"
                style={{ color: 'var(--ec-text-primary)' }}
              >
                Last Analysis
              </h3>
              <p 
                className="text-sm opacity-70"
                style={{ color: 'var(--ec-text-secondary)' }}
              >
                View your recent message analysis
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Daily Empathy Tip */}
      <div 
        className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transition-all-smooth"
        style={{ borderLeft: '4px solid var(--ec-turquoise)' }}
      >
        <div className="flex items-start gap-3">
          <div 
            className="p-2 rounded-xl mt-1"
            style={{ backgroundColor: 'var(--ec-beige)' }}
          >
            <Lightbulb className="w-5 h-5" style={{ color: '#f59e0b' }} />
          </div>
          <div>
            <h4 
              className="mb-2"
              style={{ color: 'var(--ec-text-primary)' }}
            >
              Daily Empathy Tip
            </h4>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--ec-text-secondary)' }}
            >
              {dailyTip}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center mt-8 gap-6">
        <button
          onClick={() => onNavigate('learning')}
          className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-md transition-all-smooth hover:shadow-lg hover:scale-110 border-0"
        >
          <Lightbulb className="w-6 h-6" style={{ color: 'var(--ec-text-secondary)' }} />
        </button>
        <button
          onClick={() => onNavigate('settings')}
          className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-md transition-all-smooth hover:shadow-lg hover:scale-110 border-0"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-current mb-1"></div>
            <div className="w-1 h-1 rounded-full bg-current mb-1 mx-1"></div>
            <div className="w-1 h-1 rounded-full bg-current mb-1"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
