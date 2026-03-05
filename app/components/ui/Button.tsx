import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-body font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-custom-primary text-custom-light-bg hover:bg-custom-olive hover:shadow-lg focus:ring-custom-primary",
        secondary: "bg-custom-sand text-custom-primary hover:bg-[#c9b493] hover:shadow-md focus:ring-custom-sand",
        outline: "border-2 border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-custom-light-bg focus:ring-custom-primary",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
