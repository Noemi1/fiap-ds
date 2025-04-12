import styled from "styled-components";
import { DS_FontSize } from "../../tokens/spacing";
import { DS_Colors } from "../../tokens/colors";

export const TextPrimaryStyled = styled.p`
    font-size: ${DS_FontSize.xl2};
    color: ${DS_Colors.primary[600]};
    line-height: 24px;
`;
