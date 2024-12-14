import styled, { css } from 'styled-components';
import { DS_ButtonProps } from './types.d';
import { DS_Spacing } from '../../spacing';
import { DS_Colors } from '../../colors';

export const ButtonContainer = styled.button<DS_ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    gap: ${DS_Spacing.s2};
    padding: ${DS_Spacing.s3};
    margin-top: ${DS_Spacing.s3};
    border-radius: ${DS_Spacing.s2};
    transition: background-color 0.2s ease;
    ${props => props.state === "default" && css`
        background-color: ${DS_Colors.primary[900]};
        border: none;

        &:hover {
            background-color: ${DS_Colors.primary[700]};
        }
    `
    }
     ${props => props.state === "outlined" && css`
         background-color: transparent;
         color: ${DS_Colors.primary[300]};
         border: ${DS_Spacing.s1} solid ${DS_Colors.primary[900]};

         &:hover {
             border-color: ${DS_Colors.primary[500]};
         color: ${DS_Colors.primary[500]};
         }
     `
    }

`
