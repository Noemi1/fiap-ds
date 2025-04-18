import styled, { css } from "styled-components";
import { DS_InputProps } from "./types";
import { DS_Colors } from "../../tokens/colors";
import { DS_FontSize } from "../../tokens/font-size";
import { DS_Spacing } from "../../tokens/spacing";
import { DS_FontWeight } from "../../tokens/weight";

export const Input = styled.input<DS_InputProps>`
    font-weight: ${DS_FontWeight.normal};
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: ${DS_FontSize.base};
    color: ${DS_Colors.secondary[100]};
    background-color: ${DS_Colors.secondary[10]};
    padding: ${DS_Spacing.s4} ${DS_Spacing.s5};
    border: 1px solid ${DS_Colors.primary[400]};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: ${DS_Spacing.s2};
    outline: none;
    margin: ${DS_Spacing.s0};
    width: 100%;
    border-radius: ${DS_Spacing.s3};
    &::placeholder {
        color: ${DS_Colors.secondary[50]};
        font-weight: ${DS_FontWeight.normal};
    }
    &:focus:hover, 
    &:focus {
        border: 2px solid ${DS_Colors.primary[500]};
        outline: none;
    }
    &:hover {
        border: 1px solid ${DS_Colors.primary[300]};
        outline: none;
    }
`;
export const InputContainer = styled.div`
    position: relative;
`;

export const Label = styled.label`
    color: ${DS_Colors.primary[500]};
    white-space: nowrap;
    padding: 0 ${DS_Spacing.s2};
    display: block;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    left: ${DS_Spacing.s3};
    background-color: ${DS_Colors.secondary[10]};
    z-index:2;
`;

export const Icon = styled.span<DS_InputProps>`
    color: ${DS_Colors.primary[500]};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1px;
    ${props => props.iconPos === 'left' && css`
        left: ${DS_Spacing.s3};
    `}
    ${props => props.iconPos === 'right' && css`
        right: ${DS_Spacing.s3};
    `}
`;