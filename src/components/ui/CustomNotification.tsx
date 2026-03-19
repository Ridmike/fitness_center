import React, { useEffect } from 'react'
import { CheckCircle, AlertCircle, XCircle, X } from 'lucide-react'

export type NotificationStatus = 'success' | 'error' | 'warning'

type CustomNotificationProps = {
  id: string
  message: string
  title: string
  status: NotificationStatus
  duration?: number
  onClose: (id: string) => void
}

const statusConfig = {
  success: {
    bgColor: 'bg-green-50 dark:bg-green-900/70',
    borderColor: 'border-green-200 dark:border-green-800',
    titleColor: 'text-green-900 dark:text-green-200',
    messageColor: 'text-green-700 dark:text-green-300',
    icon: <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />,
  },
  error: {
    bgColor: 'bg-red-50 dark:bg-red-900/70',
    borderColor: 'border-red-200 dark:border-red-800',
    titleColor: 'text-red-900 dark:text-red-200',
    messageColor: 'text-red-700 dark:text-red-300',
    icon: <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />,
  },
  warning: {
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/70',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    titleColor: 'text-yellow-900 dark:text-yellow-200',
    messageColor: 'text-yellow-700 dark:text-yellow-300',
    icon: <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
  },
}

const CustomNotification: React.FC<CustomNotificationProps> = ({
  id,
  message,
  title,
  status,
  duration = 4000,
  onClose,
}) => {
  const config = statusConfig[status]

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [id, duration, onClose])

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 flex gap-3 items-start shadow-lg animate-in fade-in slide-in-from-top-2 duration-300`}
    >
      <div className="flex-shrink-0">{config.icon}</div>
      <div className="flex-1">
        <h3 className={`font-semibold text-sm ${config.titleColor}`}>{title}</h3>
        <p className={`text-sm mt-1 ${config.messageColor}`}>{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export default CustomNotification