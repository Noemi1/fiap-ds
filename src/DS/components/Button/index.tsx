import { Button } from "primereact/button";
import { ButtonTypography } from "../../typography";
import { ButtonContainer } from "./styles";
import type { DS_ButtonProps } from "./types";

export function DS_Button({
    icon,
    iconPos,
    label,
    textAlignment,
    severity,
    // children,
    // state,
    ...props
}: DS_ButtonProps) {
    return (
        <>
            <div className="w-full">

                <Button className="w-full" severity={severity}>
                    {icon && iconPos == 'left' && <span className="mr-2">{icon}</span>}
                    {textAlignment && textAlignment == 'left' && <span className="w-full text-left"><ButtonTypography>{label}</ButtonTypography></span>}
                    {textAlignment && textAlignment == 'center' && <span className="w-full text-center"><ButtonTypography>{label}</ButtonTypography></span>}
                    {textAlignment && textAlignment == 'right' && <span className="w-full text-right"><ButtonTypography>{label}</ButtonTypography></span>}
                    
                    {icon && iconPos == 'right' && <span className="ml-2">{icon}</span>}
                </Button>
            </div>
        </>
    )
}
