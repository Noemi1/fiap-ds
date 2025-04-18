import type { DS_InputProps } from "./types";
import { Icon, Input, InputContainer, Label } from "./styles";
// import { InputTypography } from "../../typography";

// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { InputText } from 'primereact/inputtext';
// import { FloatLabel } from "primereact/floatlabel";

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
        <div className="w-full mt-3 relative">
            {/* <IconField iconPosition={iconPos} className="w-full">
                <FloatLabel className="w-full">
                    <Label > {label}</Label>
                    <InputText className="w-full border-round-2xl p-3" placeholder={placeholder} type={type} />
                </FloatLabel>
                <InputIcon> {icon && <Icon>{icon}</Icon>} </InputIcon>
            </IconField> */}

            <Label> {label}</Label>
            <InputContainer>
                <Input state={state} placeholder={placeholder}></Input>
                {icon && <Icon iconPos={iconPos}>{icon}</Icon>}
            </InputContainer>
        </div>
      
    )
}