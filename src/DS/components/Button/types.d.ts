import { ButtonHTMLAttributes, ReactNode } from "react";

export interface DS_ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconPos?: 'left' | 'right' = 'left';
    icon?: ReactNode;
    label?: string = ''
    textAlignment?: 'left' | 'right' | 'center' = 'center';
    severity: "primary" | "secondary" | undefined = '';
    state?: string = '';
}
