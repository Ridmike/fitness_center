'use client'

type ButtonsProps = {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const VARIANT_CLASSES = {
  primary: 'bg-yellow-500 text-white hover:bg-yellow-600',
  secondary: 'transparent border dark:border-white dark:text-white',
};

const Buttons: React.FC<ButtonsProps> = ({ title, onClick, variant = 'primary', loading = false, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md ${VARIANT_CLASSES[variant]} ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Loading...' : title}
    </button>
  )
}

export default Buttons;