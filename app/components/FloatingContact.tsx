'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

interface ContactOption {
  icon: React.ReactNode;
  label: string;
  action: () => void;
  bgColor: string;
  hoverColor: string;
}

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Your contact details - update these with actual values
  const PHONE_NUMBER = '+971501234567'; // Dubai format
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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Contact Options */}
      {isExpanded && (
        <>
          {contactOptions.map((option, index) => (
            <div
              key={option.label}
              className="flex items-center gap-3 animate-slideIn"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'backwards'
              }}
            >
            
              
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
            </div>
          ))}
        </>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpand}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 ${
          isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700 rotate-90' 
            : 'bg-[#FF6B35] hover:bg-[#E55A2B]'
        }`}
        aria-label={isExpanded ? 'Close contact menu' : 'Open contact menu'}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}