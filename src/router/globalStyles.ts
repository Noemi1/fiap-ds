import { createGlobalStyle } from "styled-components";
import { DS_Colors } from "../DS/colors";

import "primereact/resources/themes/lara-dark-blue/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

export const GlobalStyles = createGlobalStyle`

    :root {
        --primary: ${DS_Colors.primary[900]};
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-moothing: 'antialiased';
        font-size: 14px;
    }

    body {
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
    }

    /* button {
        cursor: pointer;
        border: 0;
    } */
`;
