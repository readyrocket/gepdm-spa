/* eslint-disable max-len */
import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => (
	<Global
		styles={css`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Poppins, sans-serif, Arial, Helvetica;
      }

      html {
        scroll-behavior: smooth;
        font-size: 62.2%;

        /* -------------- COLORS -------------- */
        --primary: #8d57e6;
        --secondary: #ff8144;
        --tertiary: #fd0061;
        --quaternary: #08cf5e;

        --primary-variant: #e14eca;

        --primary-background: #00071b;

        --primary-foreground: #ffffff;
        --secondary-foreground: #f3f3f4;

        --tertiary-foreground: #1f2251;

        --g-primary: linear-gradient(
          178.18deg,
          #281ac8 -13.56%,
          #fd749b 158.3%
        );

        --g-secondary: linear-gradient(
          145.64deg,
          #00e0ff 9.67%,
          #0047ff 107.49%
        );

        --g-tertiary: radial-gradient(
          100% 100% at 46.86% 0%,
          #ff8000 0%,
          #e34141 100%
        );

        --g-quaternary: linear-gradient(
          145.64deg,
          #99fdd9 19.86%,
          #1e62a2 107.49%
        );

        --g-card: linear-gradient(150deg, #151838, hsla(0, 0%, 100%, 0) 60%);

        /* -------------- MARGIN -------------- */
        --t-margin: 0.804rem;
        --s-margin: 1.608rem;
        --d-margin: 2.412rem;
        --m-margin: 3.215rem;
        --mb-margin: 4.018rem;
        --b-margin: 6.431rem;

        /* -------------- PADDING -------------- */
        --t-padding: 0.804rem;
        --s-padding: 1.608rem;
        --d-padding: 2.412rem;
        --m-padding: 3.215rem;
        --mb-padding: 4.018rem;
        --b-padding: 6.431rem;

        /* -------------- FONT SIZE -------------- */
        --s-small-0: 1rem;
        --s-small-1: 1.206rem;
        --s-small-2: 1.407rem;
        --s-small-3: 1.608rem;
        --m-medium-1: 1.809rem;
        --m-medium-2: 2.01rem;
        --m-medium-3: 2.211rem;
        --m-medium-4: 2.412rem;
        --b-big-1: 2.613rem;
        --b-big-2: 2.814rem;
        --b-big-3: 3.014rem;
        --b-big-4: 4.61rem;

        /* -------------- BUTTONS -------------- */
        --primary-height: 50px;
        --primary-width: 180px;

        --secondary-height: 55px;
        --secondary-width: 165px;

        --tertiary-height: 65px;
        --tertiary-width: 200px;

        --radius: 8px;
        --button-padding: 1.25rem;

        /* -------------- GRID -------------- */
        --s-gap: 1.206rem;
      }

      body {
        background: #1f2251;
        color: #FFFFFF;
        width: 100%;
				min-height: 100vh;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      input,
      textarea,
      button,
      h1,
      h2,
      h3,
      h4,
      span {
        font-family: Poppins, Arial, Helvetica, sans-serif;
        color: var(--tertiary-foreground);
      }

      button:focus {
        outline: none;
      }

      button {
        cursor: pointer;
      }

      body,
      html {
        -webkit-font-smoothing: antialiased;
      }

      /* Largura da barra de rolagem */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Fundo da barra de rolagem */
      ::-webkit-scrollbar-track-piece {
        background-color: #1f2251;
        /*border-left: ;*/
      }

      /* Cor do indicador de rolagem */
      ::-webkit-scrollbar-thumb:vertical,
      ::-webkit-scrollbar-thumb:horizontal {
        background-color: #e14eca;
        border-radius: 50px;
      }

      /* Cor do indicador de rolagem - ao passar o mouse */
      ::-webkit-scrollbar-thumb:vertical:hover,
      ::-webkit-scrollbar-thumb:horizontal:hover {
        background-color: #e14eca;
      }
    `}
	/>
);

export { GlobalStyles };
