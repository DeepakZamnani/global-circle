'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

/**
 * Alternative Floating Contact Button - Circular Expansion
 * Options expand in a circular pattern around the main button
 */

interface ContactOption {
  icon: React.ReactNode;
  label: string;
  action: () => void;
  bgColor: string;
  hoverColor: string;
}

export default function FloatingContactCircular() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Your contact details - update these with actual values
  const PHONE_NUMBER = '+971501234567';
  const EMAIL = 'info@globalcircleedu.com';
  const WHATSAPP_NUMBER = '+971501234567';

  const contactOptions: ContactOption[] = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      action: () => window.location.href = `tel:${PHONE_NUMBER}`,
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      action: () => window.location.href = `mailto:${EMAIL}`,
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`, '_blank'),
      bgColor: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#20BD5A]'
    }
  ];

  // Calculate positions for circular layout (above the button)
  const getPosition = (index: number) => {
    const angleStep = 40; // Degrees between buttons
    const startAngle = 90; // Start directly above
    const radius = 80; // Distance from center
    
    const angle = startAngle + (index - 1) * angleStep; // Center the middle button
    const radian = (angle * Math.PI) / 180;
    
    return {
      bottom: `${radius * Math.sin(radian)}px`,
      right: `${-radius * Math.cos(radian)}px`
    };
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Backdrop overlay when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-40 animate-fadeIn"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50">
        {/* Contact Options in Circular Pattern */}
        {isExpanded && (
          <div className="absolute bottom-0 right-0">
            {contactOptions.map((option, index) => {
              const position = getPosition(index);
              return (
                <div
                  key={option.label}
                  className="absolute animate-popIn"
                  style={{
                    ...position,
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <div className="relative group">
                    {/* Button */}
                    <button
                      onClick={() => {
                        option.action();
                        setIsExpanded(false);
                      }}
                      className={`${option.bgColor} ${option.hoverColor} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110`}
                      aria-label={option.label}
                    >
                      {option.icon}
                    </button>
                    
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 bg-white text-[#1E3A5F] px-3 py-1.5 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {option.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={toggleExpand}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 relative ${
            isExpanded 
              ? 'bg-gray-600 hover:bg-gray-700 rotate-180' 
              : 'bg-[#FF6B35] hover:bg-[#E55A2B]'
          }`}
          aria-label={isExpanded ? 'Close contact menu' : 'Open contact menu'}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              {/* Pulse animation ring */}
              <span className="absolute inset-0 rounded-full bg-[#FF6B35] animate-ping opacity-20" />
            </>
          )}
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-popIn {
          animation: popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}