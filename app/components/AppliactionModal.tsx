"use client";

import React, { useState, useEffect } from 'react';
import { ApplicationFormData, generateApplicationId, isValidEmail, isValidPhone, isValidAge } from '../../types/application';
import { submitFormData } from '../../services/dbServices';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryCode: string;
  countryName: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  age?: string;
  country?: string;
  city?: string;
}

export default function ApplicationModal({ isOpen, onClose, countryCode, countryName }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    country: '',
    city: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          age: '',
          country: '',
          city: ''
        });
        setErrors({});
        setIsSuccess(false);
        setSubmitError(null);
      }, 300);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!isValidPhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (!isValidAge(formData.age)) {
      newErrors.age = 'Age must be between 16-35';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const applicationData: ApplicationFormData = {
        applicationId: generateApplicationId(countryCode),
        countryCode: countryCode,
        countryName: countryName,
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phoneNumber: formData.phoneNumber.trim(),
        age: formData.age.trim(),
        country: formData.country.trim(),
        city: formData.city.trim(),
        submittedAt: new Date().toISOString(),
        status: 'pending',
        source: 'country_page'
      };

      await submitFormData('applications', applicationData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
        padding: '20px',
        overflow: 'auto'
      }}>
        {/* Modal Content */}
        <div 
          style={{
            background: 'white',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '520px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transform: isOpen ? 'scale(1)' : 'scale(0.95)',
            opacity: isOpen ? 1 : 0,
            transition: 'all 0.3s ease'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid #E2E8F0',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: '#64748B',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FF6B35';
              e.currentTarget.style.color = '#FF6B35';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.color = '#64748B';
            }}
          >
            ✕
          </button>

          {!isSuccess ? (
            /* Form View */
            <div style={{ padding: '40px 32px 32px' }}>
              {/* Header */}
              <div style={{ marginBottom: '32px', paddingRight: '40px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: '#FFF7ED',
                  borderRadius: '50px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#FF6B35',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Apply Now
                  </span>
                </div>
                
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  color: '#1E3A5F',
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                  lineHeight: '1.2'
                }}>
                  Study MBBS in {countryName}
                </h2>
                
                <p style={{
                  fontSize: '15px',
                  color: '#64748B',
                  fontWeight: '500',
                  lineHeight: '1.5'
                }}>
                  Fill in your details and our counselors will contact you shortly
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#1E3A5F',
                    marginBottom: '8px',
                    letterSpacing: '0.3px'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: `2px solid ${errors.fullName ? '#EF4444' : '#E2E8F0'}`,
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1E3A5F',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      background: '#FAFBFC'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FF6B35';
                      e.target.style.background = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.fullName ? '#EF4444' : '#E2E8F0';
                      e.target.style.background = '#FAFBFC';
                    }}
                  />
                  {errors.fullName && (
                    <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px', fontWeight: '600' }}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#1E3A5F',
                    marginBottom: '8px',
                    letterSpacing: '0.3px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: `2px solid ${errors.email ? '#EF4444' : '#E2E8F0'}`,
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1E3A5F',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      background: '#FAFBFC'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FF6B35';
                      e.target.style.background = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email ? '#EF4444' : '#E2E8F0';
                      e.target.style.background = '#FAFBFC';
                    }}
                  />
                  {errors.email && (
                    <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px', fontWeight: '600' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#1E3A5F',
                    marginBottom: '8px',
                    letterSpacing: '0.3px'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: `2px solid ${errors.phoneNumber ? '#EF4444' : '#E2E8F0'}`,
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1E3A5F',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      background: '#FAFBFC'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FF6B35';
                      e.target.style.background = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.phoneNumber ? '#EF4444' : '#E2E8F0';
                      e.target.style.background = '#FAFBFC';
                    }}
                  />
                  {errors.phoneNumber && (
                    <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px', fontWeight: '600' }}>
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Age */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#1E3A5F',
                    marginBottom: '8px',
                    letterSpacing: '0.3px'
                  }}>
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    min="16"
                    max="35"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: `2px solid ${errors.age ? '#EF4444' : '#E2E8F0'}`,
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1E3A5F',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      background: '#FAFBFC'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FF6B35';
                      e.target.style.background = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.age ? '#EF4444' : '#E2E8F0';
                      e.target.style.background = '#FAFBFC';
                    }}
                  />
                  {errors.age && (
                    <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px', fontWeight: '600' }}>
                      {errors.age}
                    </p>
                  )}
                </div>

                {/* Country & City Row */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  {/* Country */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#1E3A5F',
                      marginBottom: '8px',
                      letterSpacing: '0.3px'
                    }}>
                      Your Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g., India"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: `2px solid ${errors.country ? '#EF4444' : '#E2E8F0'}`,
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: '500',
                        color: '#1E3A5F',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        background: '#FAFBFC'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FF6B35';
                        e.target.style.background = 'white';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.country ? '#EF4444' : '#E2E8F0';
                        e.target.style.background = '#FAFBFC';
                      }}
                    />
                    {errors.country && (
                      <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px', fontWeight: '600' }}>
                        {errors.country}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#1E3A5F',
                      marginBottom: '8px',
                      letterSpacing: '0.3px'
                    }}>
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g., Mumbai"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: `2px solid ${errors.city ? '#EF4444' : '#E2E8F0'}`,
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: '500',
                        color: '#1E3A5F',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        background: '#FAFBFC'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FF6B35';
                        e.target.style.background = 'white';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.city ? '#EF4444' : '#E2E8F0';
                        e.target.style.background = '#FAFBFC';
                      }}
                    />
                    {errors.city && (
                      <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px', fontWeight: '600' }}>
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div style={{
                    padding: '12px 16px',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '12px',
                    marginBottom: '20px'
                  }}>
                    <p style={{ color: '#DC2626', fontSize: '14px', fontWeight: '600' }}>
                      {submitError}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '18px 32px',
                    background: isSubmitting ? '#94A3B8' : '#FF6B35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '700',
                    letterSpacing: '0.3px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = '#F7931E';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(255,107,53,0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = '#FF6B35';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application →'
                  )}
                </button>

                {/* Privacy Note */}
                <p style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  textAlign: 'center',
                  marginTop: '16px',
                  lineHeight: '1.5'
                }}>
                  By submitting, you agree to our privacy policy. We'll contact you within 24 hours.
                </p>
              </form>
            </div>
          ) : (
            /* Success View */
            <div style={{ 
              padding: '60px 32px',
              textAlign: 'center'
            }}>
              {/* Success Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 12px 24px rgba(16, 185, 129, 0.3)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <h3 style={{
                fontSize: '26px',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '12px',
                letterSpacing: '-0.5px'
              }}>
                Application Submitted!
              </h3>

              <p style={{
                fontSize: '16px',
                color: '#64748B',
                fontWeight: '500',
                lineHeight: '1.6',
                marginBottom: '32px',
                maxWidth: '360px',
                margin: '0 auto 32px'
              }}>
                Thank you for your interest in studying MBBS in {countryName}. Our counselors will contact you within 24 hours.
              </p>

              <button
                onClick={onClose}
                style={{
                  padding: '16px 40px',
                  background: '#1E3A5F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0F2744';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1E3A5F';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Close
              </button>
            </div>
          )}

          {/* Spinner Animation */}
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}