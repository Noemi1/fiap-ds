import { ButtonTypography } from "../../typography";
import { ButtonContainer } from "./styles";
import type { DS_ButtonProps } from "./types";

export function DS_Button({
    icon,
    iconPos,
    label,
    textAlignment,
    severity,
    ...props
}: DS_ButtonProps) {
    return (
        <>
            <div className="w-full">
                <ButtonContainer severity={severity} >
                    {icon && iconPos == 'left' && <span className="mr-2">{icon}</span>}
                    <ButtonTypography>{label}</ButtonTypography>
                    {icon && iconPos == 'right' && <span className="ml-2">{icon}</span>}
                </ButtonContainer>
            </div>
        </>
    )
}
