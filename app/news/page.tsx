'use client';
import PageTemplate from '@/components/page-template';
import React, { useState } from 'react';

const NewsletterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        setSubmitted(true);
    };

    return (
        <PageTemplate title="Newsletter">
            <div className="p-5 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h1>
                {submitted ? (
                    <p className="text-green-500">Thank you for subscribing!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Subscribe</button>
                    </form>
                )}
            </div>
        </PageTemplate>
    );
};

export default NewsletterPage;