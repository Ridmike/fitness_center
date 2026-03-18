import React from 'react'

type TextCopProps = {
    text: string;
    className?: string;
    variant?: 'primary' | 'secondary';
}

const VARIANT_CLASSES = {
    primary: 'text-yellow-500 dark:text-yellow-400',
    secondary: 'text-gray-600 dark:text-gray-400',
};

const TextCop: React.FC<TextCopProps> = ({ text, className = '', variant = 'primary' }) => {
  return (
    <div className={`${VARIANT_CLASSES[variant]} ${className}`}>
      {text}
    </div>
  )
}

export default TextCop;
