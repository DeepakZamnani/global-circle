import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface PromoAdProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  variant?: 'default' | 'gradient';
  className?: string;
}

const PromoAd: React.FC<PromoAdProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  buttonHref,
  variant = 'default',
  className = '',
}) => {
  const ButtonWrapper = buttonHref ? 'a' : 'button';
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl 
        ${variant === 'gradient' 
          ? 'bg-gradient-to-r from-[#1E3A5F] to-[#2A5080]' 
          : 'bg-[#1E3A5F]'
        }
        ${className}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF6B35] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative px-6 py-6 md:px-10 md:py-8 lg:px-12 lg:py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Content */}
          <div className="flex-1 flex items-start gap-4 md:gap-6">
            {/* Icon */}
            {Icon && (
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#FF6B35]" />
              </div>
            )}
            
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <ButtonWrapper
              {...(buttonHref ? { href: buttonHref } : {})}
              onClick={onButtonClick}
              className="
                group w-full lg:w-auto inline-flex items-center justify-center gap-2 
                px-6 md:px-8 py-3 md:py-4 
                bg-[#FF6B35] hover:bg-[#ff7d4d] 
                text-white font-semibold 
                rounded-xl 
                transition-all duration-300 
                hover:shadow-lg hover:shadow-[#FF6B35]/30
                hover:scale-105
                active:scale-95
              "
            >
              <span className="text-sm md:text-base">{buttonText}</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </ButtonWrapper>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PromoAd;