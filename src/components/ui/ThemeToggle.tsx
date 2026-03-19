'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={`
        relative w-9 h-9 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        border border-gray-200 dark:border-gray-700
        bg-gray-100 dark:bg-gray-800
        hover:bg-yellow-100 dark:hover:bg-yellow-900/30
        hover:border-yellow-400 dark:hover:border-yellow-500
        shadow-sm hover:shadow-md
        group
      `}
    >
      {/* Sun icon */}
      <Sun
        size={18}
        className={`
          absolute transition-all duration-300
          text-yellow-500
          ${isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-50'}
        `}
      />
      {/* Moon icon */}
      <Moon
        size={18}
        className={`
          absolute transition-all duration-300
          text-gray-700 dark:text-gray-300
          ${isDark
            ? 'opacity-0 -rotate-90 scale-50'
            : 'opacity-100 rotate-0 scale-100'}
        `}
      />
    </button>
  )
}
