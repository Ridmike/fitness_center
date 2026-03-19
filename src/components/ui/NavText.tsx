import React from 'react'

type NavTextProps = {
    text: string;
    to: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'ternary';
}

const VARIANT_CLASSES = {
    primary: 'text-yellow-500 dark:text-yellow-400 hover:border-b-2 border-yellow-500',
    secondary: 'text-gray-600 dark:text-gray-400',
    ternary: 'text-slate-50 dark:text-gray-600'
};

 const NavText: React.FC<NavTextProps> = ({ text, to, className, variant = 'primary' }) => {
  return (
    <a href={to} className={`${VARIANT_CLASSES[variant]} ${className}`}>
      {text}
    </a>
  )
}

export default NavText;