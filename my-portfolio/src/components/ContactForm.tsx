'use client'; 

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    if (status === 'sent') {
        return (
            <div className='p-4 bg-green-100 text-green-700 rounded text-center'>
                <p className='font-medium'>Thank you!</p>
                <p>Your message has been sent successfully.</p>
            </div>          
        );
    } 

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                </label>
                <input 
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                {status === 'sending' ? (
                <span className="flex justify-center items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                </span>
                ) : 'Send Message'}
            </button>
            {status === 'error' && (
                <p className="text-red-600 text-center">
                Failed to send message. Please try again later.
                </p>
            )}
        </form>
    )
}