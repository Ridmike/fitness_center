'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { NotificationStatus } from '../components/ui/CustomNotification'

export interface Notification {
  id: string
  message: string
  title: string
  status: NotificationStatus
  duration?: number
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  showSuccess: (title: string, message: string, duration?: number) => void
  showError: (title: string, message: string, duration?: number) => void
  showWarning: (title: string, message: string, duration?: number) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString()
    setNotifications((prev) => [...prev, { ...notification, id }])
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const showSuccess = useCallback(
    (title: string, message: string, duration = 4000) => {
      addNotification({ title, message, status: 'success', duration })
    },
    [addNotification]
  )

  const showError = useCallback(
    (title: string, message: string, duration = 4000) => {
      addNotification({ title, message, status: 'error', duration })
    },
    [addNotification]
  )

  const showWarning = useCallback(
    (title: string, message: string, duration = 4000) => {
      addNotification({ title, message, status: 'warning', duration })
    },
    [addNotification]
  )

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        showSuccess,
        showError,
        showWarning,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}
