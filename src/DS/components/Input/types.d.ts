import { InputHTMLAttributes, ReactNode } from "react";

export interface DS_InputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconPos?: 'left' | 'right' = "left";
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    state?: "default" | "focus" | "error"
}