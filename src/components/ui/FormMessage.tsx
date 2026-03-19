import React from 'react'

type FormMessageProps = {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: string;
    className?: string;
    variant?: "primary" | "secondary" | "ternary";
}

const InputVariants = {
    primary: "dark:bg-slate-400 bg-slate-100 placeholder:text-gray-800 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500",
    secondary: "dark:bg-slate-100 bg-slate-100 placeholder:text-gray-500 border-gray-300 focus:ring-slate-500 focus:border-slate-500",
    ternary: "dark:bg-yellow-100 bg-slate-100 bg-yellow-100 placeholder:text-yellow-500 border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500"
}

const LabelVariants = {
    primary: "text-gray-700 dark:text-gray-200",
    secondary: "text-gray-700 dark:text-gray-400",
    ternary: "text-yellow-500"
}

const FormMessage: React.FC<FormMessageProps> = ({ label, name, placeholder, value, onChange, onBlur, error, className, variant = "primary" }) => {
  return (
    <div className={className}>
      <label htmlFor={name} className={`block text-sm font-medium ${LabelVariants[variant]}`}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:outline-none focus:ring-2 ${InputVariants[variant]} ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default FormMessage