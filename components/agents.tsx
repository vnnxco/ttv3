"use client"

import * as React from "react"
import { 
  SearchIcon,
  FilterIcon,
  HeartIcon,
  EyeIcon,
  ExternalLinkIcon,
  StarIcon,
  TrendingUpIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: "Customer Support Agent",
    author: "Patrick Tuell",
    authorAvatar: "🎧",
    isPro: true,
    likes: 3,
    views: 19,
    category: "Featured",
    preview: {
      bgColor: "bg-black",
      textColor: "text-white",
      content: "🎧"
    }
  },
  {
    id: 2,
    title: "Sales Assistant Bot", 
    author: "Ariel Jędrzejczak",
    authorAvatar: "💼",
    isPro: true,
    likes: 23,
    views: 292,
    category: "Featured",
    preview: {
      bgColor: "bg-black",
      textColor: "text-white",
      content: "💼"
    }
  },
  {
    id: 3,
    title: "Technical Support AI",
    author: "Chelsea Stewart",
    authorAvatar: "🔧",
    isPro: false,
    likes: 8,
    views: 36,
    category: "Featured", 
    preview: {
      bgColor: "bg-black",
      textColor: "text-white",
      content: "🔧"
    }
  },
  {
    id: 4,
    title: "Content Creator Agent",
    author: "Sam Allen",
    authorAvatar: "✍️",
    isPro: true,
    likes: 10,
    views: 49,
    category: "Featured",
    preview: {
      bgColor: "bg-orange-500",
      textColor: "text-white",
      content: "✍️"
    }
  },
  {
    id: 5,
    title: "Data Analytics Bot",
    author: "Maria Garcia",
    authorAvatar: "📊",
    isPro: true,
    likes: 15,
    views: 87,
    category: "Web Developer",
    preview: {
      bgColor: "bg-blue-600",
      textColor: "text-white", 
      content: "📊"
    }
  },
  {
    id: 6,
    title: "Language Learning Tutor",
    author: "David Kim",
    authorAvatar: "🌍",
    isPro: false,
    likes: 12,
    views: 64,
    category: "Content Creator",
    preview: {
      bgColor: "bg-green-500",
      textColor: "text-white",
      content: "🌍"
    }
  },
  {
    id: 7,
    title: "E-commerce Assistant",
    author: "Lisa Wong",
    authorAvatar: "🛒",
    isPro: true,
    likes: 18,
    views: 125,
    category: "Web Developer",
    preview: {
      bgColor: "bg-purple-600",
      textColor: "text-white",
      content: "🛒"
    }
  },
  {
    id: 8,
    title: "Social Media Manager",
    author: "Alex Thompson",
    authorAvatar: "📱",
    isPro: false,
    likes: 7,
    views: 43,
    category: "Content Creator",
    preview: {
      bgColor: "bg-pink-500",
      textColor: "text-white",
      content: "📱"
    }
  }
]

const filterTabs = [
  { name: "Featured", active: true },
  { name: "Up & Coming", active: false },
  { name: "Web Developer", active: false },
  { name: "Content Creator", active: false },
  { name: "Graphic Designer", active: false },
  { name: "Motion Designer", active: false },
  { name: "Product designers", active: false },
  { name: "Spline designer", active: false }
]

export function Agents() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [activeTab, setActiveTab] = React.useState("Featured")
  const [showFilters, setShowFilters] = React.useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false)
  const headerRef = React.useRef<HTMLDivElement>(null)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  // Handle scroll for sticky header
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop
      setIsHeaderSticky(scrollTop > 100)
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeTab === "Featured" || project.category === activeTab
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden bg-[hsl(240_5.9%_10%)]">
      {/* Sticky Header */}
      {isHeaderSticky && (
        <div className="sticky top-0 z-50 bg-[hsl(240_5.9%_10%)]/95 backdrop-blur-md border-b border-[hsl(240_3.7%_15.9%)] px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    className="text-white font-medium hover:bg-[hsl(240_3.7%_15.9%)]"
                  >
                    Projects
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white/60 font-medium hover:bg-[hsl(240_3.7%_15.9%)] hover:text-white"
                  >
                    People
                  </Button>
                </div>
              </div>
              
              {/* Compact Search Bar */}
              <div className="relative w-full sm:w-80">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-[hsl(240_3.7%_15.9%)] border-[hsl(240_3.7%_15.9%)] text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-full h-9"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content area - scrollable */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto min-h-0 scrollbar-hide"
      >
        {/* Header Section */}
        <div ref={headerRef} className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Top Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    className="text-white font-medium hover:bg-[hsl(240_3.7%_15.9%)] px-4 py-2 rounded-lg transition-colors"
                  >
                    Projects
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white/60 font-medium hover:bg-[hsl(240_3.7%_15.9%)] hover:text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    People
                  </Button>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="relative w-full sm:w-96">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <Input
                  placeholder="Search across 1M+ independents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-[hsl(240_3.7%_15.9%)] border-[hsl(240_3.7%_15.9%)] text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-full transition-all duration-200 hover:bg-[hsl(240_3.7%_18%)]"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-4 mb-8 overflow-x-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-[hsl(240_3.7%_15.9%)] border-[hsl(240_3.7%_15.9%)] text-white hover:bg-[hsl(240_3.7%_18%)] flex-shrink-0 rounded-lg transition-colors"
              >
                <FilterIcon className="h-4 w-4" />
                Filters
              </Button>
              
              <div className="flex items-center gap-2 overflow-x-auto">
                {filterTabs.map((tab) => (
                  <Button
                    key={tab.name}
                    variant={activeTab === tab.name ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab(tab.name)}
                    className={`whitespace-nowrap flex-shrink-0 rounded-lg transition-all duration-200 ${
                      activeTab === tab.name
                        ? "bg-white text-black hover:bg-white/90 shadow-lg"
                        : "text-white/60 hover:text-white hover:bg-[hsl(240_3.7%_15.9%)]"
                    }`}
                  >
                    {tab.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Section Headers */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Projects we love
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base flex items-center gap-2">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    Standout projects making waves around the web
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-white/60 hover:text-white text-sm hover:bg-[hsl(240_3.7%_15.9%)] rounded-lg transition-colors"
                >
                  View more
                </Button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {filteredProjects.slice(0, 4).map((project) => (
                <Card
                  key={project.id}
                  className="group bg-[hsl(240_3.7%_15.9%)] border-[hsl(240_3.7%_20%)] hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 cursor-pointer overflow-hidden rounded-xl"
                >
                  {/* Project Preview */}
                  <div className={`${project.preview.bgColor} ${project.preview.textColor} aspect-[4/3] flex items-center justify-center text-4xl sm:text-5xl relative overflow-hidden`}>
                    <div className="text-6xl sm:text-7xl opacity-80 transition-transform duration-300 group-hover:scale-110">
                      {project.preview.content}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action button */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-lg"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Trending indicator for popular projects */}
                    {project.views > 100 && (
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          <TrendingUpIcon className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs text-white font-medium flex-shrink-0">
                          {project.authorAvatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-white truncate">
                            {project.author}
                          </p>
                          {project.isPro && (
                            <Badge variant="secondary" className="text-xs mt-1 bg-blue-500/20 text-blue-400 border-blue-500/30">
                              PRO
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-white font-medium mb-3 line-clamp-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                        <HeartIcon className="h-3 w-3" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="h-3 w-3" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Second Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    AI agent projects using ⚡ Framer
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base">
                    The best modern websites built on the leading web design tool, Framer
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-white/60 hover:text-white text-sm hover:bg-[hsl(240_3.7%_15.9%)] rounded-lg transition-colors"
                >
                  View more
                </Button>
              </div>
            </div>

            {/* Second Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.slice(4).map((project) => (
                <Card
                  key={project.id}
                  className="group bg-[hsl(240_3.7%_15.9%)] border-[hsl(240_3.7%_20%)] hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 cursor-pointer overflow-hidden rounded-xl"
                >
                  {/* Project Preview */}
                  <div className={`${project.preview.bgColor} ${project.preview.textColor} aspect-[4/3] flex items-center justify-center text-4xl sm:text-5xl relative overflow-hidden`}>
                    <div className="text-6xl sm:text-7xl opacity-80 transition-transform duration-300 group-hover:scale-110">
                      {project.preview.content}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action button */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-lg"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Trending indicator for popular projects */}
                    {project.views > 100 && (
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          <TrendingUpIcon className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs text-white font-medium flex-shrink-0">
                          {project.authorAvatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-white truncate">
                            {project.author}
                          </p>
                          {project.isPro && (
                            <Badge variant="secondary" className="text-xs mt-1 bg-blue-500/20 text-blue-400 border-blue-500/30">
                              PRO
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-white font-medium mb-3 line-clamp-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                        <HeartIcon className="h-3 w-3" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="h-3 w-3" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Show message if no results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-[hsl(240_3.7%_15.9%)] rounded-xl p-8 max-w-md mx-auto">
                  <p className="text-white/70 mb-4 text-lg">No projects found matching your criteria.</p>
                  <p className="text-white/50 text-sm mb-6">Try adjusting your search terms or filters</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setActiveTab("Featured")
                    }}
                    className="bg-[hsl(240_3.7%_15.9%)] border-[hsl(240_3.7%_20%)] text-white hover:bg-[hsl(240_3.7%_18%)] rounded-lg"
                  >
                    Clear filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}