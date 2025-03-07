"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    Bell,
    Mail,
    CheckSquare,
    Search,
    Plus,
    MoreHorizontal,
} from "lucide-react"
import SideBar from "./sidebar"

export default function PageTemplate({children, title}:{children:React.ReactNode, title:string}) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    // const [title, setTitle] = useState("Dashboard")
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
        <div className="flex h-screen bg-gray-50">
            <SideBar />

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top navbar */}
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center justify-between h-16 px-4">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="text-gray-600 hover:text-[#192841] focus:outline-none lg:hidden h-full w-[10%]"
                            >
                                <Menu size={24} />
                            </button>
                            <div className="ml-4 lg:ml-0">
                                <h1 className="text-xl font-semibold text-[#192841] pl-10">{title}</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-48 lg:w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                />
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>

                            <button className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 relative">
                                <Bell size={20} />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#9e814d]"></span>
                            </button>

                            <button className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 relative">
                                <Mail size={20} />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#9e814d]"></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 flex overflow-hidden">
                    <div
                        className={`flex-1 overflow-y-auto p-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {children}                        
                    </div>

                    {/* Right sidebar */}
                    <div className="hidden lg:block w-80 border-l border-gray-200 bg-white overflow-y-auto">
                        {/* Todo section */}
                        <div className="p-4 border-b border-gray-200 h-full relative">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-[#192841]">Tasks</h3>
                                <button className="p-1 rounded-full hover:bg-gray-100 text-[#9e814d]">
                                    <Plus size={18} />
                                </button>
                            </div>

                            <div className="space-y-2">
                                {todos.map((todo) => (
                                    <div key={todo.id} className="flex items-start group">
                                        <button
                                            onClick={() => toggleTodo(todo.id)}
                                            className={`flex-shrink-0 h-5 w-5 rounded border ${todo.completed
                                                ? "bg-[#9e814d] border-[#9e814d] text-white"
                                                : "border-gray-300 hover:border-[#9e814d]"
                                                } mr-2 mt-0.5 flex items-center justify-center`}
                                        >
                                            {todo.completed && <CheckSquare size={14} />}
                                        </button>
                                        <span className={`text-sm ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
                                            {todo.text}
                                        </span>
                                        <button className="ml-auto opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    const input = e.currentTarget.elements.namedItem("newTodo") as HTMLInputElement
                                    addTodo(input.value)
                                    input.value = ""
                                }}
                                className="mt-4 flex absolute bottom-4"
                            >
                                <input
                                    name="newTodo"
                                    type="text"
                                    placeholder="Add a task..."
                                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#9e814d] focus:border-[#9e814d]"
                                />
                                <button
                                    type="submit"
                                    className="px-3 py-2 bg-[#192841] text-white rounded-r-md hover:bg-[#13203a] transition-colors"
                                >
                                    Add
                                </button>
                            </form>
                        </div>

                        {/* Messages section */}
                        
                    </div>
                </main>
            </div>
        </div>
    )
}

