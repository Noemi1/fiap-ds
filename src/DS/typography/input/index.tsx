import { PropsWithChildren } from "react";
import { InputStyled } from "./styles";

export function InputTypography({ children }: PropsWithChildren) {
    return <InputStyled>{children}</InputStyled>
}
