import type { DS_InputProps } from "./types";
import { Icon, Input, InputContainer, Label } from "./styles";
import { InputTypography } from "../../typography";

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";

export function DS_Input({
    iconPos,
    icon,
    children,
    label,
    placeholder,
    type,
    state,
    value,
    ...props
}: DS_InputProps) {
    return (
        <div className="w-full mt-5 ">
            <IconField iconPosition={iconPos} className="w-full">
                <FloatLabel className="w-full">
                    {/* <label htmlFor="">{label}</label> */}
                    <Label className="ml-2 mb-5"> {label}</Label>
                    <InputText className="w-full border-round-2xl p-3" placeholder={placeholder} type={type} />
                </FloatLabel>
                <InputIcon> {icon && <Icon>{icon}</Icon>} </InputIcon>
            </IconField>
        </div>
        // <>
        //     <InputContainer>
        //         {leftIcon && <span>{leftIcon}</span>}
        //         <Label>{label}</Label>
        //         <Input
        //             state={state}
        //             placeholder={placeholder}
        //             value={value}
        //             {...props} >
        //         </Input>
        //         {icon && <span>{icon}</span>}
        //     </InputContainer>
        // </>
    )
}