import { ArrowLeft, Mic, Type, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface AnalysisScreenProps {
  onNavigate: (screen: string) => void;
}

export function AnalysisScreen({ onNavigate }: AnalysisScreenProps) {
  const [inputType, setInputType] = useState<'text' | 'voice'>('text');
  const [message, setMessage] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleAnalyze = () => {
    if (!message.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const mockAnalysis = {
        emotion: message.toLowerCase().includes('angry') || message.toLowerCase().includes('frustrated') ? 'negative' :
                message.toLowerCase().includes('happy') || message.toLowerCase().includes('great') ? 'positive' : 'neutral',
        emotionScore: Math.random(),
        tone: message.toLowerCase().includes('angry') ? 'aggressive' : 
              message.toLowerCase().includes('please') ? 'polite' : 'neutral',
        toxicity: message.toLowerCase().includes('stupid') || message.toLowerCase().includes('hate') ? 'high' : 'low',
        summary: message.toLowerCase().includes('angry') ? 'Tone: passive-aggressive' : 'Tone: neutral and conversational'
      };
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case 'positive': return 'var(--ec-soft-green)';
      case 'negative': return 'var(--ec-soft-red)';
      case 'cautious': return 'var(--ec-soft-yellow)';
      default: return 'var(--ec-soft-green)';
    }
  };

  const getEmotionEmoji = (emotion: string) => {
    switch (emotion) {
      case 'positive': return '🙂';
      case 'negative': return '😟';
      case 'cautious': return '😐';
      default: return '🙂';
    }
  };

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
          Message Analysis
        </h1>
        <button
          className="p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md transition-all-smooth hover:shadow-lg border-0"
        >
          <MoreHorizontal className="w-6 h-6" style={{ color: 'var(--ec-text-primary)' }} />
        </button>
      </div>

      <div className="px-6 pb-6">
        {/* Input Type Selector */}
        <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 mb-6 shadow-lg">
          <button
            onClick={() => setInputType('text')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-all-smooth border-0 ${
              inputType === 'text' 
                ? 'bg-white shadow-md' 
                : 'bg-transparent'
            }`}
          >
            <Type className="w-5 h-5" style={{ color: 'var(--ec-text-primary)' }} />
            <span style={{ color: 'var(--ec-text-primary)' }}>Text</span>
          </button>
          <button
            onClick={() => setInputType('voice')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-all-smooth border-0 ${
              inputType === 'voice' 
                ? 'bg-white shadow-md' 
                : 'bg-transparent'
            }`}
          >
            <Mic className="w-5 h-5" style={{ color: 'var(--ec-text-primary)' }} />
            <span style={{ color: 'var(--ec-text-primary)' }}>Voice</span>
          </button>
        </div>

        {/* Input Area */}
        {inputType === 'text' ? (
          <div className="mb-6">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type or paste the message you'd like me to analyze..."
              className="w-full h-32 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border-0 resize-none"
              style={{ 
                color: 'var(--ec-text-primary)',
                outline: 'none'
              }}
            />
          </div>
        ) : (
          <div className="mb-6">
            <div 
              className="w-full h-32 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center animate-gentle-pulse"
                  style={{ backgroundColor: 'var(--ec-turquoise)' }}
                >
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <p style={{ color: 'var(--ec-text-secondary)' }}>
                  Tap to record your message
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!message.trim() || isAnalyzing}
          className="w-full p-4 rounded-2xl mb-6 shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0 disabled:opacity-50"
          style={{ 
            backgroundColor: 'var(--ec-turquoise)',
            color: 'white'
          }}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Message'}
        </button>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-4">
            {/* Message Display */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 
                className="mb-2"
                style={{ color: 'var(--ec-text-primary)' }}
              >
                Analyzed Message
              </h3>
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: 'var(--ec-light-blue)' }}
              >
                <p style={{ color: 'var(--ec-text-primary)' }}>{message}</p>
              </div>
            </div>

            {/* Emotion Indicator */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: getEmotionColor(analysis.emotion) }}
                >
                  {getEmotionEmoji(analysis.emotion)}
                </div>
                <div>
                  <h3 
                    className="mb-1"
                    style={{ color: 'var(--ec-text-primary)' }}
                  >
                    Emotional Tone
                  </h3>
                  <p 
                    className="capitalize"
                    style={{ color: 'var(--ec-text-secondary)' }}
                  >
                    {analysis.emotion}
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 
                className="mb-2"
                style={{ color: 'var(--ec-text-primary)' }}
              >
                Analysis Summary
              </h3>
              <p style={{ color: 'var(--ec-text-secondary)' }}>
                {analysis.summary}
              </p>
              <p 
                className="mt-2 text-sm"
                style={{ color: 'var(--ec-text-muted)' }}
              >
                Toxicity level: {analysis.toxicity}
              </p>
            </div>

            {/* Next Steps Button */}
            <button
              onClick={() => onNavigate('recommendations')}
              className="w-full p-4 rounded-2xl shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0"
              style={{ 
                backgroundColor: 'var(--ec-lavender)',
                color: 'var(--ec-text-primary)'
              }}
            >
              Get Response Recommendations
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
