"use client"

import axios from 'axios';
import { BotIcon, SendIcon, XIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface ChatBotProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: 'Hi! I\'m the Trust Legal AI assistant. How can I help you today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        scrollToBottom();
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages, isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: input,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('/api/gemini', {
                message: input,
            });

            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                content: response.data.text,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            console.error('Error fetching response from Gemini:', error);

            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: 'Sorry, I encountered an error. Please try again later.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 h-96 bg-gradient-to-b from-[#1e2b3e] to-[#111827] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-[#ba9669]/30 z-50 transition-all duration-300 ease-in-out">
            {/* Custom CSS for markdown styling */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                /* Markdown styles */
                .markdown h1 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                .markdown h2 {
                    font-size: 1.25rem;
                    font-weight: bold;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                .markdown h3 {
                    font-size: 1.125rem;
                    font-weight: bold;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                .markdown p {
                    margin-bottom: 0.5rem;
                }
                .markdown ul, .markdown ol {
                    margin-left: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                .markdown ul {
                    list-style-type: disc;
                }
                .markdown ol {
                    list-style-type: decimal;
                }
                .markdown li {
                    margin-bottom: 0.25rem;
                }
                .markdown a {
                    color: #4f46e5;
                    text-decoration: underline;
                }
                .markdown code {
                    background-color: rgba(0, 0, 0, 0.1);
                    padding: 0.125rem 0.25rem;
                    border-radius: 0.25rem;
                    font-family: monospace;
                }
                .markdown pre {
                    background-color: rgba(0, 0, 0, 0.15);
                    padding: 0.5rem;
                    border-radius: 0.375rem;
                    overflow-x: auto;
                    margin-bottom: 0.5rem;
                }
                .markdown pre code {
                    background-color: transparent;
                    padding: 0;
                }
                .markdown blockquote {
                    border-left: 3px solid #ba9669;
                    padding-left: 0.5rem;
                    margin-left: 0.5rem;
                    color: rgba(255, 255, 255, 0.8);
                }
                .markdown table {
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: 0.5rem;
                }
                .markdown th, .markdown td {
                    border: 1px solid rgba(186, 150, 105, 0.3);
                    padding: 0.25rem 0.5rem;
                }
                .markdown th {
                    background-color: rgba(186, 150, 105, 0.1);
                }
                .dark-message .markdown code {
                    background-color: rgba(255, 255, 255, 0.1);
                }
                .dark-message .markdown pre {
                    background-color: rgba(255, 255, 255, 0.05);
                }
            `}</style>

            {/* Header */}
            <div className="bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white p-3 flex justify-between items-center shadow-md">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                        <BotIcon size={18} className="text-white" />
                    </div>
                    <span className="font-semibold tracking-wide">Trust Legal Assistant</span>
                </div>
                <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full w-7 h-7 flex items-center justify-center transition-colors duration-200"
                    aria-label="Close chat"
                >
                    <XIcon size={16} />
                </button>
            </div>

            {/* Messages with hidden scrollbar */}
            <div
                ref={messageContainerRef}
                className="flex-grow p-4 overflow-y-auto hide-scrollbar"
            >
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-3/4 p-3 rounded-2xl shadow-md ${message.sender === 'user'
                                ? 'bg-gradient-to-br from-[#ba9669] to-[#a17a4a] text-white rounded-tr-none'
                                : 'bg-white dark:bg-[#f8fafc]/10 backdrop-blur-sm text-gray-800 dark:text-gray-100 border border-[#ba9669]/20 rounded-tl-none dark-message'
                                }`}
                        >
                            {message.sender === 'user' ? (
                                <div className="whitespace-pre-wrap text-sm">
                                    {message.content}
                                </div>
                            ) : (
                                <div className="markdown text-sm">
                                    <ReactMarkdown>
                                        {message.content}
                                    </ReactMarkdown>
                                </div>
                            )}
                            <div
                                className={`text-xs mt-1 ${message.sender === 'user' ? 'text-[#e5e7eb]/80' : 'text-gray-500 dark:text-gray-400'
                                    }`}
                            >
                                {message.timestamp.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-white dark:bg-[#f8fafc]/10 backdrop-blur-sm text-gray-800 dark:text-gray-100 border border-[#ba9669]/20 p-3 rounded-2xl rounded-tl-none shadow-md">
                            <div className="flex space-x-2">
                                <div className="h-2 w-2 bg-[#4f46e5] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="h-2 w-2 bg-[#4f46e5] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="h-2 w-2 bg-[#4f46e5] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-[#ba9669]/20 bg-[#111827]/80 backdrop-blur-sm">
                <div className="flex items-center space-x-2 rounded-full bg-white/10 p-1 backdrop-blur-sm border border-white/20">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                        placeholder="Type your message..."
                        className="flex-grow p-2 px-4 rounded-full focus:outline-none bg-transparent text-white placeholder-gray-400"
                        autoFocus={isOpen}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white p-2 rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ba9669] disabled:opacity-50 transition-all duration-200 shadow-md"
                    >
                        <SendIcon size={18} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatBot;
