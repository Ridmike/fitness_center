import React from 'react'

type TextCopProps = {
    text: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'ternary';
}

const VARIANT_CLASSES = {
    primary: 'text-yellow-500 dark:text-yellow-400',
    secondary: 'text-gray-600 dark:text-gray-400',
    ternary: 'text-slate-50 dark:text-gray-600'
};

const TextCop: React.FC<TextCopProps> = ({ text, className = '', variant = 'primary' }) => {
  return (
    <div className={`${VARIANT_CLASSES[variant]} ${className}`}>
      {text}
    </div>
  )
}

export default TextCop;
