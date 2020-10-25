import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 80rem;
        --white: #f1faee;
        --lightMain: #a8dadc;
        --medMain: #457b9d;
        --darkMain: #1d3557;
        --fontXLarge: 2.5rem;
        --fontLarge: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;


        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white)
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white)
        }
    }
`;
