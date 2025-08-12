import { ArrowLeft, Send, Heart, MessageSquare, Shield } from 'lucide-react';

interface RecommendationScreenProps {
  onNavigate: (screen: string) => void;
}

export function RecommendationScreen({ onNavigate }: RecommendationScreenProps) {
  const recommendations = [
    {
      type: 'Calm Response',
      icon: Heart,
      color: 'var(--ec-soft-green)',
      iconColor: '#10b981',
      description: 'Helps reduce tension',
      response: "I understand this is frustrating. Let's work together to find a solution that works for both of us."
    },
    {
      type: 'Clarifying Question',
      icon: MessageSquare,
      color: 'var(--ec-light-blue)',
      iconColor: 'var(--ec-turquoise)',
      description: 'Shows you care about the conversation',
      response: "Could you help me understand what specifically is bothering you? I want to make sure I'm addressing your concerns properly."
    },
    {
      type: 'Boundary Setting',
      icon: Shield,
      color: 'var(--ec-lavender)',
      iconColor: '#8b5cf6',
      description: 'Maintains respect while being clear',
      response: "I appreciate your feedback, and I'd like to discuss this in a way that's constructive for both of us."
    }
  ];

  const handleSendToMessenger = (response: string) => {
    // In a real app, this would integrate with messaging apps
    navigator.clipboard.writeText(response);
    alert('Response copied to clipboard!');
  };

  return (
    <div 
      className="min-h-screen animate-fade-in"
      style={{
        background: 'linear-gradient(180deg, var(--ec-lavender) 0%, white 100%)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-16">
        <button
          onClick={() => onNavigate('analysis')}
          className="p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md transition-all-smooth hover:shadow-lg border-0"
        >
          <ArrowLeft className="w-6 h-6" style={{ color: 'var(--ec-text-primary)' }} />
        </button>
        <h1 
          className="text-xl"
          style={{ color: 'var(--ec-text-primary)' }}
        >
          Response Suggestions
        </h1>
        <div className="w-12"></div>
      </div>

      <div className="px-6 pb-6">
        <div className="mb-6 text-center">
          <p style={{ color: 'var(--ec-text-secondary)' }}>
            Choose the response style that feels right for this situation
          </p>
        </div>

        {/* Recommendation Cards */}
        <div className="space-y-4 mb-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg transition-all-smooth hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ backgroundColor: rec.color }}
                >
                  <rec.icon className="w-6 h-6" style={{ color: rec.iconColor }} />
                </div>
                <div>
                  <h3 
                    className="text-lg mb-1"
                    style={{ color: 'var(--ec-text-primary)' }}
                  >
                    {rec.type}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--ec-text-muted)' }}
                  >
                    {rec.description}
                  </p>
                </div>
              </div>

              {/* Response Text */}
              <div 
                className="p-4 rounded-xl mb-4"
                style={{ backgroundColor: rec.color }}
              >
                <p 
                  className="leading-relaxed"
                  style={{ color: 'var(--ec-text-primary)' }}
                >
                  "{rec.response}"
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSendToMessenger(rec.response)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl transition-all-smooth hover:scale-[1.02] active:scale-[0.98] border-0"
                style={{ 
                  backgroundColor: rec.iconColor,
                  color: 'white'
                }}
              >
                <Send className="w-5 h-5" />
                <span>Copy Response</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('analysis')}
            className="w-full p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0"
            style={{ color: 'var(--ec-text-primary)' }}
          >
            Analyze Another Message
          </button>
          
          <button
            onClick={() => onNavigate('learning')}
            className="w-full p-4 rounded-2xl shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0"
            style={{ 
              backgroundColor: 'var(--ec-beige)',
              color: 'var(--ec-text-primary)'
            }}
          >
            Learn More About Empathetic Communication
          </button>
        </div>
      </div>
    </div>
  );
}
