'use client'

type ButtonsProps = {
    title: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    loading?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const VARIANT_CLASSES = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
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