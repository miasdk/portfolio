'use client'

import { JSX, useState } from 'react'
import type { Technology } from '../types'
import { Search, Filter, Grid, List, X, ChevronDown } from 'lucide-react'

type FilterType = 'all' | 'featured' | 'ai' | 'fullstack' | 'data-science' | 'open-source'
type SortType = 'newest' | 'oldest' | 'title' | 'updated'
type ViewType = 'grid' | 'list'

interface FilterBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  selectedTech: Technology | 'all'
  onTechChange: (tech: Technology | 'all') => void
  sortBy: SortType
  onSortChange: (sort: SortType) => void
  viewType: ViewType
  onViewChange: (view: ViewType) => void
  allTechnologies: Technology[]
  filterOptions: { value: FilterType; label: string; count: number }[]
  resultCount: number
  totalCount: number
}

// Group technologies for better UX - used for organizing the dropdown
const techGroups = {
  frontend: {
    label: 'Frontend',
    techs: ['react', 'nextjs', 'typescript', 'javascript', 'tailwindcss', 'html', 'css', 'redux'] as Technology[]
  },
  backend: {
    label: 'Backend', 
    techs: ['nodejs', 'express', 'python', 'fastapi', 'cpp'] as Technology[]
  },
  database: {
    label: 'Database',
    techs: ['postgresql', 'mongodb', 'firebase', 'supabase', 'prisma'] as Technology[]
  },
  cloud: {
    label: 'Cloud & DevOps',
    techs: ['vercel', 'netlify', 'awslambda', 'docker', 'git', 'github', 'railway'] as Technology[]
  },
  'ai-ml': {
    label: 'AI/ML & Data',
    techs: ['scikit-learn', 'pandas', 'numpy', 'plotly', 'streamlit'] as Technology[]
  },
  mobile: {
    label: 'Mobile & Other',
    techs: ['swift', 'jest', 'figma', 'bootstrap', 'graphql'] as Technology[]
  }
}

export default function FilterBar({
  searchTerm,
  onSearchChange,
  selectedFilter,
  onFilterChange,
  selectedTech,
  onTechChange,
  sortBy,
  onSortChange,
  viewType,
  onViewChange,
  allTechnologies,
  filterOptions,
  resultCount,
  totalCount
}: FilterBarProps) {
  const hasActiveFilters = selectedFilter !== 'all' || selectedTech !== 'all' || searchTerm !== ''
  
  const clearAllFilters = () => {
    onSearchChange('')
    onFilterChange('all')
    onTechChange('all')
    onSortChange('newest')
  }

  // Create grouped options for the technology dropdown
  const createTechOptions = () => {
    const options: JSX.Element[] = []
    
    // Add "All Technologies" option
    options.push(
      <option key="all" value="all">
        All Technologies
      </option>
    )
    
    // Add grouped options
    Object.entries(techGroups).forEach(([groupKey, group]) => {
      const availableTechs = group.techs.filter(tech => allTechnologies.includes(tech))
      
      if (availableTechs.length > 0) {
        options.push(
          <optgroup key={groupKey} label={group.label}>
            {availableTechs.map(tech => (
              <option key={tech} value={tech}>
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </option>
            ))}
          </optgroup>
        )
      }
    })
    
    return options
  }

  return (
    <div className="rounded-lg mb-6">
      {/* Compact Main Controls */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-8 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <select
            value={selectedFilter}
            onChange={(e) => onFilterChange(e.target.value as FilterType)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.count})
              </option>
            ))}
          </select>

          {/* Technology Filter - Single dropdown with grouped options */}
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value as Technology | 'all')}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm bg-white min-w-[140px]"
          >
            {createTechOptions()}
          </select>

          {/* Sort & View */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortType)}
              className="px-2 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
            >
              <option value="newest">Newest</option>
              <option value="updated">Updated</option>
              <option value="title">A-Z</option>
            </select>

            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => onViewChange('grid')}
                className={`p-2 ${viewType === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} transition-colors`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewChange('list')}
                className={`p-2 ${viewType === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} transition-colors`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results & Clear Filters */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-600">
            Showing {resultCount} of {totalCount} results
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Pills - Only show if filters are active */}
      {hasActiveFilters && (
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200">
                "{searchTerm}"
                <button onClick={() => onSearchChange('')} className="hover:text-gray-900">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedFilter !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200">
                {filterOptions.find(f => f.value === selectedFilter)?.label}
                <button onClick={() => onFilterChange('all')} className="hover:text-gray-900">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedTech !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200">
                {selectedTech.charAt(0).toUpperCase() + selectedTech.slice(1)}
                <button onClick={() => onTechChange('all')} className="hover:text-gray-900">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}