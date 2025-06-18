"use client"

import * as React from "react"
import { 
  PlusIcon,
  FolderIcon,
  CalendarIcon,
  UsersIcon,
  MoreVerticalIcon,
  StarIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  PlayIcon,
  GitBranchIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const projects = [
  {
    id: 1,
    name: "Voice Assistant Platform",
    description: "Building a comprehensive voice assistant platform with multi-language support",
    status: "active",
    priority: "high",
    progress: 75,
    dueDate: "Dec 15, 2024",
    team: ["John", "Sarah", "Mike"],
    tasks: { completed: 18, total: 24 },
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "AI Content Generator",
    description: "Developing an AI-powered content generation tool for marketing teams",
    status: "active",
    priority: "medium",
    progress: 45,
    dueDate: "Jan 20, 2025",
    team: ["Emma", "David"],
    tasks: { completed: 12, total: 20 },
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Customer Analytics Dashboard",
    description: "Real-time analytics dashboard for customer behavior insights",
    status: "completed",
    priority: "high",
    progress: 100,
    dueDate: "Nov 30, 2024",
    team: ["Alex", "Lisa", "Tom", "Kate"],
    tasks: { completed: 32, total: 32 },
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Mobile App Redesign",
    description: "Complete redesign of the mobile application with improved UX",
    status: "planning",
    priority: "medium",
    progress: 15,
    dueDate: "Mar 10, 2025",
    team: ["Sophie", "Ryan"],
    tasks: { completed: 3, total: 28 },
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "API Integration Suite",
    description: "Comprehensive API integration suite for third-party services",
    status: "on-hold",
    priority: "low",
    progress: 30,
    dueDate: "Feb 28, 2025",
    team: ["Chris"],
    tasks: { completed: 8, total: 16 },
    color: "bg-indigo-500"
  },
  {
    id: 6,
    name: "Security Audit System",
    description: "Automated security audit and compliance monitoring system",
    status: "active",
    priority: "high",
    progress: 60,
    dueDate: "Jan 5, 2025",
    team: ["Maria", "James", "Nina"],
    tasks: { completed: 15, total: 22 },
    color: "bg-red-500"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <PlayIcon className="h-4 w-4 text-green-500" />
    case 'completed':
      return <CheckCircleIcon className="h-4 w-4 text-blue-500" />
    case 'planning':
      return <ClockIcon className="h-4 w-4 text-yellow-500" />
    case 'on-hold':
      return <AlertCircleIcon className="h-4 w-4 text-gray-500" />
    default:
      return <FolderIcon className="h-4 w-4 text-gray-500" />
  }
}

const getStatusBadge = (status: string) => {
  const variants = {
    active: "bg-green-500/10 text-green-500 border-green-500/20",
    completed: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    planning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    'on-hold': "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
  
  return (
    <Badge variant="outline" className={`${variants[status as keyof typeof variants]} capitalize`}>
      {getStatusIcon(status)}
      {status.replace('-', ' ')}
    </Badge>
  )
}

const getPriorityBadge = (priority: string) => {
  const variants = {
    high: "bg-red-500/10 text-red-500 border-red-500/20",
    medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    low: "bg-green-500/10 text-green-500 border-green-500/20"
  }
  
  return (
    <Badge variant="outline" className={`${variants[priority as keyof typeof variants]} capitalize`}>
      {priority}
    </Badge>
  )
}

export function Projects() {
  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 lg:px-16 xl:px-24 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-medium text-white mb-2">
                Projects
              </h1>
              <p className="text-gray-400">
                Manage and track your project progress
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 hover:border-gray-500"
              >
                <GitBranchIcon className="h-4 w-4 mr-2" />
                Templates
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <FolderIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Total Projects</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">6</p>
                </div>
              </div>
            </Card>
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <PlayIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Active</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">3</p>
                </div>
              </div>
            </Card>
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Completed</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">1</p>
                </div>
              </div>
            </Card>
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <UsersIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Team Members</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">12</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors cursor-pointer p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${project.color} w-3 h-3 rounded-full flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sidebar-foreground font-semibold mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(project.status)}
                      {getPriorityBadge(project.priority)}
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sidebar-foreground/70 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-sidebar-foreground/70">Progress</span>
                  <span className="text-sidebar-foreground">{project.progress}%</span>
                </div>
                <div className="w-full bg-sidebar-border rounded-full h-2">
                  <div 
                    className={`${project.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-sidebar-foreground/70">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Due Date</span>
                  </div>
                  <span className="text-sidebar-foreground">{project.dueDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-sidebar-foreground/70">
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Tasks</span>
                  </div>
                  <span className="text-sidebar-foreground">
                    {project.tasks.completed}/{project.tasks.total}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-sidebar-foreground/70">
                    <UsersIcon className="h-4 w-4" />
                    <span>Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {project.team.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs text-white font-medium"
                        title={member}
                      >
                        {member[0]}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-sidebar-border flex items-center justify-center text-xs text-sidebar-foreground/70">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-sidebar-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  <StarIcon className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  <UsersIcon className="h-4 w-4 mr-2" />
                  Team
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}