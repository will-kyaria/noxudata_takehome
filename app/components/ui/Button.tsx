'use client'
import clsx from 'clsx'

const baseStyles =
    'duration-150 ease-in-out inline-flex items-center justify-center font-medium group rounded-md'

const styles = {
    solid: '',
    ghost: 'border',
    secondary: '',
    warning: 'border',
    issue: 'border',
}

const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 xl:px-7 xl:py-4 text-base xl:text-lg',
}

const colors = {
    solid: {
        dark: 'bg-slate-700 text-white hover:bg-slate-900',
        light: '',
    },

    ghost: {
        dark: 'text-slate-800 border-slate-300 hover:bg-slate-100 hover:text-slate-900',
        light:
            'border-slate-300 text-white hover:border-white hover:bg-white hover:text-slate-900',
    },

    secondary: {
        dark: 'text-slate-900 bg-gray-secondary-100 hover:bg-gray-secondary-200/70',
        light: '',
    },

    warning: {
        dark: 'text-red-500 border-red-300 hover:bg-red-100 hover:text-red-600 hover:border-600',
        light: '',
    },

    issue: {
        dark: 'text-orange-500 border-slate-300 hover:bg-orange-100 hover:text-orange-600 hover:slate-600',
        light: '',
    },
}

interface ButtonProps {
    variant?: 'solid' | 'ghost' | 'secondary' | 'warning' | 'issue';
    size?: 'sm' | 'md' | 'lg';
    color?: 'dark' | 'light';
    className?: string;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;  // Step 1: Add this line
}

export function Button({
    variant = 'solid',
    size = 'lg',
    color = 'dark',
    className,
    type,
    children,
    disabled,
    onClick,  // Destructure the onClick prop
    ...props
}: ButtonProps) {
    className = clsx(
        baseStyles,
        styles[variant],
        sizeStyles[size],
        colors[variant][color],
        className,
    )

    return (
        <button className={className} onClick={onClick} disabled={disabled} type={type} {...props}>
            {children}
        </button>
    )
}
