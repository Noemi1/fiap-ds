import styled from "styled-components";
import { DS_Spacing } from "../../tokens/spacing";
import { DS_Colors } from "../../tokens/colors";
import { DS_FontSize } from "../../tokens/font-size";

export const TextPrimaryStyled = styled.p`
    font-size: ${DS_FontSize.xl};
    color: ${DS_Colors.primary[600]};
    line-height: ${DS_Spacing.s6};
    margin: ${DS_Spacing.s5} ${DS_Spacing.s0};
`;
