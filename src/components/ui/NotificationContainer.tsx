'use client'

import React from 'react'
import { useNotification } from '../../providers/NotificationProvider'
import CustomNotification from './CustomNotification'

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotification()

  return (
    <div className="fixed top-16 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {notifications.map((notification) => (
        <CustomNotification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          title={notification.title}
          status={notification.status}
          duration={notification.duration}
          onClose={removeNotification}
        />
      ))}
    </div>
  )
}
