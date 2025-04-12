import { createGlobalStyle } from "styled-components";
import { DS_Colors } from "../DS/tokens/colors";

import "primereact/resources/themes/lara-light-pink/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

export const GlobalStyles = createGlobalStyle`


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
:root {
    --primary-50: ${DS_Colors.primary[50]};
    --primary-100: ${DS_Colors.primary[100]};
    --primary-200: ${DS_Colors.primary[200]};
    --primary-300: ${DS_Colors.primary[300]};
    --primary-400: ${DS_Colors.primary[400]};
    --primary-500: ${DS_Colors.primary[500]};
    --primary-600: ${DS_Colors.primary[600]};
    --primary-700: ${DS_Colors.primary[700]};
    --primary-800: ${DS_Colors.primary[800]};
    --primary-900: ${DS_Colors.primary[900]};
}

`;
