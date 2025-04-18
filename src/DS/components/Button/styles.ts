import styled, { css } from 'styled-components';
import { DS_ButtonProps } from './types.d';
import { DS_Spacing } from '../../tokens/spacing';
import { DS_Colors } from '../../tokens/colors';
import { DS_FontSize } from '../../tokens/font-size';

export const ButtonContainer = styled.button<DS_ButtonProps>`
    width: 100% !important;
    margin: 0;
    display: inline-flex;
    align-items: center;
    user-select: none;
    vertical-align: bottom;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    color: ${DS_Colors.white[100]};
    padding: ${DS_Spacing.s3} ${DS_Spacing.s4};
    font-size: ${DS_FontSize.base};
    border-radius: ${DS_Spacing.s2};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    text-align: ${props => props.textAlignment};
    outline: none;

    
    ${props => (props.severity === 'primary' || props.severity === undefined )&& css`
        background: ${DS_Colors.primary[500]};
        border: 1px solid ${DS_Colors.primary[500]};

        &:hover {
            border: 1px solid ${DS_Colors.primary[600]};
            background: ${DS_Colors.primary[600]};
        }
            
        &:active,
        &:active:hover {
            border: 1px solid ${DS_Colors.primary[400]};
            background: ${DS_Colors.primary[400]};
        }
    `}
    
    ${props => (props.severity === 'secondary'  )&& css`
        background: ${DS_Colors.secondary[90]};
        border: 1px solid ${DS_Colors.secondary[10]};

        &:hover {
            background: ${DS_Colors.secondary[60]};
        }
            
        &:active,
        &:active:hover {
            background: ${DS_Colors.secondary[100]};
            border: 1px solid ${DS_Colors.secondary[100]};
        }
    `}
`
