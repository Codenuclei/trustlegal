"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Bell,
    Mail,
    Calendar,
    FileText,
    Users,
    Settings,
    Home,
    CheckSquare,
    MessageSquare,
    Search,
    Plus,
    MoreHorizontal,
} from "lucide-react"
import SideBar from "../../components/sidebar"
import PageTemplate from "@/components/page-template"

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const [todos, setTodos] = useState([
        { id: 1, text: "Review Johnson contract", completed: false },
        { id: 2, text: "Prepare for Smith deposition", completed: true },
        { id: 3, text: "File motion for Henderson case", completed: false },
        { id: 4, text: "Call expert witness Dr. Miller", completed: false },
        { id: 5, text: "Update client on Westfield progress", completed: false },
    ])
    useEffect(() => {
        setIsVisible(true)
    }, [])

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    const addTodo = (text: string) => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text, completed: false }])
        }
    }

    return (
        <PageTemplate title="Dashboard">
            <div
                className={`flex-1 overflow-y-auto p-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                {/* Dashboard content */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#192841] mb-4">Welcome back, John</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Active Cases", value: "24", color: "from-[#192841] to-[#2a3e63]" },
                            { title: "Pending Documents", value: "7", color: "from-[#9e814d] to-[#c0a978]" },
                            { title: "Upcoming Meetings", value: "3", color: "from-[#4a5568] to-[#718096]" },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${card.color} rounded-xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-[1.02]`}
                            >
                                <h3 className="text-lg font-medium opacity-90">{card.title}</h3>
                                <p className="text-3xl font-bold mt-2">{card.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 className="text-lg font-semibold text-[#192841] mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[
                            { action: "Filed motion", case: "Henderson v. State", time: "2 hours ago" },
                            { action: "Updated documents", case: "Westfield Acquisition", time: "Yesterday" },
                            { action: "Client meeting", case: "Johnson Contract Review", time: "Yesterday" },
                            { action: "Court appearance", case: "Smith Deposition", time: "2 days ago" },
                        ].map((activity, index) => (
                            <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="h-8 w-8 rounded-full bg-[#192841]/10 flex items-center justify-center text-[#192841] mr-3">
                                    <FileText size={16} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {activity.action}: <span className="text-[#9e814d]">{activity.case}</span>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-[#192841] mb-4">Upcoming Deadlines</h3>
                    <div className="space-y-3">
                        {[
                            {
                                deadline: "File Response Brief",
                                case: "Henderson v. State",
                                date: "Tomorrow, 5:00 PM",
                                urgent: true,
                            },
                            {
                                deadline: "Client Meeting",
                                case: "Westfield Acquisition",
                                date: "March 10, 2:00 PM",
                                urgent: false,
                            },
                            { deadline: "Document Review", case: "Johnson Contract", date: "March 12, 12:00 PM", urgent: false },
                        ].map((deadline, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center">
                                    <div
                                        className={`h-3 w-3 rounded-full ${deadline.urgent ? "bg-red-500" : "bg-[#9e814d]"} mr-3`}
                                    ></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{deadline.deadline}</p>
                                        <p className="text-xs text-gray-500">{deadline.case}</p>
                                    </div>
                                </div>
                                <div className="text-xs font-medium text-gray-500">{deadline.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </PageTemplate>
    )
}

