// src/components/LeadFormModal.tsx - Final compact version with better visibility

'use client';

import React, { useState, useEffect } from 'react';
import { generateApplicationId, isValidEmail, isValidPhone, isValidAge } from '@/types/application';
import { submitFormData } from '@/services/dbServices';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryCode?: string;
  countryName?: string;
  scholarshipSlug?: string;
  scholarshipTitle?: string;
   universitySlug?: string;
  universityName?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  age?: string;
  country?: string;
  city?: string;
}

export default function LeadFormModal({
  isOpen,
  onClose,
  countryCode,
  countryName,
  scholarshipSlug,
  scholarshipTitle,
}: LeadFormModalProps) {
  const isScholarship = !!scholarshipSlug;
  const displayTitle = isScholarship ? scholarshipTitle : countryName || 'Studying Abroad';
  const contextPrefix = isScholarship
    ? `SCH-${scholarshipSlug?.slice(0, 6).toUpperCase() || 'GEN'}`
    : countryCode || 'GEN';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    country: '',
    city: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          age: '',
          country: '',
          city: '',
        });
        setErrors({});
        setIsSuccess(false);
      }, 300);
    }
  }, [isOpen]);

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

    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Required';
    else if (!isValidPhone(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone';
    if (!formData.age.trim()) newErrors.age = 'Required';
    else if (!isValidAge(formData.age)) newErrors.age = 'Age 16-35';
    if (!formData.country.trim()) newErrors.country = 'Required';
    if (!formData.city.trim()) newErrors.city = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const baseData = {
        applicationId: generateApplicationId(contextPrefix),
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phoneNumber: formData.phoneNumber.trim(),
        age: formData.age.trim(),
        country: formData.country.trim(),
        city: formData.city.trim(),
        submittedAt: new Date().toISOString(),
        status: 'pending',
        interestType: isScholarship ? 'scholarship' : 'country',
        source: isScholarship ? 'scholarship-detail' : 'country-detail',
      };

      const applicationData = isScholarship
        ? { ...baseData, scholarshipSlug, scholarshipTitle }
        : { ...baseData, countryCode, countryName };

      await submitFormData('applications', applicationData);

      setIsSuccess(true);
    } catch (error) {
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(10px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
        onClick={onClose}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '380px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#1E3A5F', // ← Darker close button
                fontWeight: 'bold',
              }}
            >
              ✕
            </button>

            <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1E3A5F' }}>
              Express Interest
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', marginTop: '6px' }}>
              Free guidance for {displayTitle}
            </p>
          </div>

          {!isSuccess ? (
            <div style={{ padding: '20px 24px' }}>
              <form onSubmit={handleSubmit}>
                {['fullName', 'email', 'phoneNumber', 'age', 'country', 'city'].map((field) => (
                  <div key={field} style={{ marginBottom: '14px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#1E3A5F', display: 'block', marginBottom: '4px' }}>
                      {field === 'fullName' ? 'Full Name' :
                       field === 'phoneNumber' ? 'Phone Number' :
                       field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phoneNumber' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={field === 'fullName' ? 'Enter your name' :
                                   field === 'email' ? 'your@email.com' :
                                   field === 'phoneNumber' ? '+91 _________' :
                                   field === 'age' ? 'e.g. 22' :
                                   field === 'country' ? 'e.g. India' :
                                   'e.g. Mumbai'}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: `1.5px solid ${errors[field as keyof FormErrors] ? '#EF4444' : '#E2E8F0'}`,
                        fontSize: '14px',
                        color: '#0F172A', // ← Darker input text
                      }}
                    />
                    {errors[field as keyof FormErrors] && (
                      <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px' }}>
                        {errors[field as keyof FormErrors]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#FF6B35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: '700',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    marginTop: '8px',
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit →'}
                </button>

                <p style={{ fontSize: '11px', color: '#94A3B8', textAlign: 'center', marginTop: '12px' }}>
                  We'll contact you within 24 hours
                </p>
              </form>
            </div>
          ) : (
            <div style={{ padding: '40px 24px', textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#10B981',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F' }}>
                Request Submitted!
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '12px auto 24px', maxWidth: '280px' }}>
                Thank you! We'll contact you soon about {displayTitle}.
              </p>

              <button
                onClick={onClose}
                style={{
                  padding: '12px 32px',
                  background: '#1E3A5F',
                  color: 'white',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '700',
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}