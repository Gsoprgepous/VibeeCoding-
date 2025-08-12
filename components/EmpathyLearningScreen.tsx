import { ArrowLeft, BookOpen, CheckCircle, X, Check } from 'lucide-react';
import { useState } from 'react';

interface EmpathyLearningScreenProps {
  onNavigate: (screen: string) => void;
}

export function EmpathyLearningScreen({ onNavigate }: EmpathyLearningScreenProps) {
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const tips = [
    {
      title: "Listen fully before responding",
      description: "Give the speaker your complete attention without planning your response",
      color: 'var(--ec-soft-green)'
    },
    {
      title: "Paraphrase to clarify",
      description: "Repeat back what you heard to ensure understanding",
      color: 'var(--ec-light-blue)'
    },
    {
      title: "Acknowledge emotions",
      description: "Recognize and validate how the other person feels",
      color: 'var(--ec-lavender)'
    },
    {
      title: "Ask open-ended questions",
      description: "Encourage deeper sharing with questions that start with 'how' or 'what'",
      color: 'var(--ec-beige)'
    }
  ];

  const quizQuestion = {
    question: "Your friend says: 'I'm so overwhelmed with work, I don't know what to do.' What's the most empathetic response?",
    answers: [
      "You should just quit if it's that bad.",
      "That sounds really challenging. Can you tell me more about what's making it feel overwhelming?",
      "Everyone gets stressed at work, you'll be fine.",
      "Have you tried making a to-do list?"
    ],
    correct: 1,
    explanation: "This response acknowledges their feelings and invites them to share more, showing genuine interest in understanding their situation."
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedQuizAnswer(answerIndex);
    setShowQuizResult(true);
  };

  const resetQuiz = () => {
    setSelectedQuizAnswer(null);
    setShowQuizResult(false);
  };

  return (
    <div 
      className="min-h-screen animate-fade-in"
      style={{
        background: 'linear-gradient(180deg, var(--ec-beige) 0%, white 100%)'
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
          Empathy Learning
        </h1>
        <div className="w-12"></div>
      </div>

      <div className="px-6 pb-6">
        <div className="mb-6 text-center">
          <div 
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: 'var(--ec-turquoise)' }}
          >
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <p style={{ color: 'var(--ec-text-secondary)' }}>
            Build stronger connections through empathetic communication
          </p>
        </div>

        {/* Communication Tips */}
        <div className="mb-8">
          <h2 
            className="text-xl mb-4"
            style={{ color: 'var(--ec-text-primary)' }}
          >
            Communication Tips
          </h2>
          <div className="grid gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg transition-all-smooth hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: tip.color }}
                  ></div>
                  <div>
                    <h3 
                      className="mb-2"
                      style={{ color: 'var(--ec-text-primary)' }}
                    >
                      {tip.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--ec-text-secondary)' }}
                    >
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Quiz */}
        <div className="mb-6">
          <h2 
            className="text-xl mb-4"
            style={{ color: 'var(--ec-text-primary)' }}
          >
            Practice Quiz
          </h2>
          <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
            <h3 
              className="mb-4 leading-relaxed"
              style={{ color: 'var(--ec-text-primary)' }}
            >
              {quizQuestion.question}
            </h3>
            
            <div className="space-y-3 mb-4">
              {quizQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  disabled={showQuizResult}
                  className={`w-full p-3 rounded-xl text-left transition-all-smooth border-0 ${
                    showQuizResult
                      ? index === quizQuestion.correct
                        ? 'shadow-lg'
                        : selectedQuizAnswer === index
                        ? 'shadow-lg'
                        : 'opacity-50'
                      : 'bg-white/70 hover:bg-white hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: showQuizResult
                      ? index === quizQuestion.correct
                        ? 'var(--ec-soft-green)'
                        : selectedQuizAnswer === index
                        ? 'var(--ec-soft-red)'
                        : 'var(--ec-light-blue)'
                      : undefined,
                    color: 'var(--ec-text-primary)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ 
                        borderColor: showQuizResult && index === quizQuestion.correct 
                          ? '#10b981' 
                          : showQuizResult && selectedQuizAnswer === index && index !== quizQuestion.correct
                          ? '#ef4444'
                          : 'var(--ec-text-muted)' 
                      }}
                    >
                      {showQuizResult && index === quizQuestion.correct && (
                        <Check className="w-4 h-4 text-green-600" />
                      )}
                      {showQuizResult && selectedQuizAnswer === index && index !== quizQuestion.correct && (
                        <X className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <span className="text-sm leading-relaxed">{answer}</span>
                  </div>
                </button>
              ))}
            </div>

            {showQuizResult && (
              <div 
                className="p-4 rounded-xl mb-4"
                style={{ backgroundColor: 'var(--ec-lavender)' }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 
                      className="mb-2"
                      style={{ color: 'var(--ec-text-primary)' }}
                    >
                      Explanation
                    </h4>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--ec-text-secondary)' }}
                    >
                      {quizQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {showQuizResult && (
              <button
                onClick={resetQuiz}
                className="w-full p-3 rounded-xl transition-all-smooth hover:scale-[1.02] active:scale-[0.98] border-0"
                style={{ 
                  backgroundColor: 'var(--ec-turquoise)',
                  color: 'white'
                }}
              >
                Try Another Question
              </button>
            )}
          </div>
        </div>

        {/* Bottom Action */}
        <button
          onClick={() => onNavigate('analysis')}
          className="w-full p-4 rounded-2xl shadow-lg transition-all-smooth hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0"
          style={{ 
            backgroundColor: 'var(--ec-turquoise)',
            color: 'white'
          }}
        >
          Practice with Real Messages
        </button>
      </div>
    </div>
  );
}
