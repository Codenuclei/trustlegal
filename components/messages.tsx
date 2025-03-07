'use client';
import { MessageSquare, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Messages() {
    const [messages, ] = useState([
        {
            id: 1,
            sender: "Sarah Chen",
            content: "I've reviewed the documents you sent over. Can we discuss the findings tomorrow?",
            time: "10:32 AM",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 2,
            sender: "Michael Rodriguez",
            content: "The opposing counsel has requested an extension. How should we proceed?",
            time: "Yesterday",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 3,
            sender: "Jessica Taylor",
            content: "I've uploaded the revised agreement to the shared folder.",
            time: "Yesterday",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    ])
    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#192841]">Messages</h3>
                <button className="p-1 rounded-full hover:bg-gray-100 text-[#9e814d]">
                    <MessageSquare size={18} />
                </button>
            </div>

            <div className="space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                        <div className="flex-shrink-0 mr-3">
                            <Image
                                src={message.avatar || "/placeholder.svg"}
                                alt={message.sender}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-baseline justify-between">
                                <h4 className="text-sm font-medium text-gray-900 truncate">{message.sender}</h4>
                                <span className="text-xs text-gray-500">{message.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{message.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#9e814d] focus:border-[#9e814d]"
                    />
                    <button className="px-3 py-2 bg-[#9e814d] text-white rounded-r-md hover:bg-[#8d734a] transition-colors">
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}