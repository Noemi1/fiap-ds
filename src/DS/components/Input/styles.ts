import styled, { css } from "styled-components";
import { DS_InputProps } from "./types";
import { DS_Colors } from "../../tokens/colors";
import { DS_Spacing } from "../../tokens/spacing";

export const Input = styled.input<DS_InputProps>`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${DS_Spacing.s10};
    padding: ${DS_Spacing.s3} ${DS_Spacing.s2};
    background-color: ${DS_Colors.white[100]};
    border-radius: ${DS_Spacing.s2};
    &:placeholder {
        color: ${DS_Colors.black[100]};
    }

    ${props => props.state === 'default' && css`
        border: 1px ${DS_Colors.primary[500]} solid;
        color: ${DS_Colors.black[100]};
        &:placeholder {
            color: transparent
        }
        &:hover {
            border: 1px ${DS_Colors.primary[600]} solid;
        }
    `}
    ${props => props.state === 'focus' && css`
        border: 1px ${DS_Colors.primary[400]} solid;
        color: ${DS_Colors.black[100]};
        &:placeholder {
            color: ${DS_Colors.black[70]};
        }
    `}
    ${props => props.state === 'error' && css`
        border: 1px ${DS_Colors.danger[500]} solid;
        color: ${DS_Colors.danger[500]};
        &:placeholder {
            color: ${DS_Colors.danger[500]};
        }
    `}
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 300px;
    width: 80%; 
`;

export const Label = styled.label`
    color: ${DS_Colors.primary[500]};
    white-space: nowrap;
`;
export const Icon = styled.span`
    color: ${DS_Colors.primary[500]};
`;