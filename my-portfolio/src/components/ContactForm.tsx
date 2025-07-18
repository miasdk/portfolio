"use client"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from "lucide-react"

// Define TypeScript types
type FormData = {
  name: string;
  email: string;
  message: string;
}

type FormStatus = {
  loading: boolean;
  success: boolean;
  error: boolean;
  message: string;
}

export default function ContactForm() {
  // Form data state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  // Form status state
  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: false,
    message: '',
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Set loading state
    setStatus({ loading: true, success: false, error: false, message: '' });
    
    try {
      // Send to API endpoint - update this to your correct endpoint
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success state
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon. 🌟',
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Auto-reset status after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      // Error state
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'An error occurred. Please try again later.',
      });
      
      // Auto-reset error status after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  // Success view (when message is sent successfully)
  if (status.success) {
    return (
      <div className="relative overflow-hidden rounded-xl">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-70"></div>

        <div className="relative z-10 p-8 text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur opacity-70"></div>
            <div className="relative bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm border border-green-100">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank you!</h3>
          <p className="text-gray-700 max-w-md mx-auto leading-relaxed">
            Your message has been sent successfully. I'll get back to you as soon as possible 🌟
          </p>

          <button
            onClick={() => setStatus({ loading: false, success: false, error: false, message: '' })}
            className="mt-6 px-5 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors text-sm font-medium"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  // Main form view
  return (
    <div className="relative overflow-hidden rounded-sm">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-70"></div>

      <div className="relative z-10 p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="group">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm group-hover:shadow-md"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm group-hover:shadow-md"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm group-hover:shadow-md resize-none"
                placeholder="Your message here..."
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status.loading}
              className="relative w-full px-6 py-3.5 bg-gray-900 text-white rounded-lg hover:bg-black disabled:opacity-80 disabled:cursor-not-allowed transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md overflow-hidden group"
            >
              <div className="relative z-10 flex justify-center items-center gap-2">
                {status.loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </button>
          </div>

          {status.error && (
            <div className="relative overflow-hidden rounded-lg mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-rose-50 opacity-70"></div>
              <div className="relative z-10 p-4 flex items-center gap-3">
                <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-sm">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-red-700">Message could not be sent</p>
                  <p className="text-sm text-red-600">{status.message || 'Please try again later or contact me directly.'}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}