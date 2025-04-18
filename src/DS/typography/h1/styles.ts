import styled from "styled-components";
import { DS_FontSize } from "../../tokens/font-size";
import { DS_Colors } from "../../tokens/colors";
import { DS_Spacing } from "../../tokens/spacing";

export const H1Styled = styled.h1`
    font-size: calc(${DS_FontSize.xl} + ${DS_Spacing.s1});
    color: ${DS_Colors.primary[600]};
    line-height: ${DS_Spacing.s6};
`;
