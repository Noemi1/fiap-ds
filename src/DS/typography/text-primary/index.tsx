import { PropsWithChildren } from "react";
import { TextPrimaryStyled } from './styles';

export function TextPrimary({ children }: PropsWithChildren) {
    return <TextPrimaryStyled className="text-center">{children}</TextPrimaryStyled>
}
