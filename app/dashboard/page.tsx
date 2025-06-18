"use client"

import { useState } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { AiChat } from '@/components/ai-chat'
import { Homepage } from '@/components/homepage'
import { Agents } from '@/components/agents'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Page() {
  const [currentView, setCurrentView] = useState<'home' | 'chat' | 'agents' | 'projects'>('home')

  const handleNavigateToChat = () => {
    setCurrentView('chat')
  }

  const handleNavigateToHome = () => {
    setCurrentView('home')
  }

  const handleNavigateToAgents = () => {
    setCurrentView('agents')
  }

  const handleNavigateToProjects = () => {
    setCurrentView('projects')
  }
  return (
    <SidebarProvider>
      <AppSidebar 
        variant="inset" 
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onNavigateToChat={handleNavigateToChat}
        onNavigateToProjects={handleNavigateToProjects}
      />
      <SidebarInset className="flex flex-col">
        <div className="sticky top-0 z-50 bg-background rounded-t-xl overflow-hidden">
          <SiteHeader currentView={currentView} />
        </div>
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          {currentView === 'home' ? (
            <Homepage onNavigateToChat={handleNavigateToChat} />
          ) : currentView === 'chat' ? (
            <AiChat />
          ) : currentView === 'agents' ? (
            <Agents />
          ) : (
            <Projects />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}