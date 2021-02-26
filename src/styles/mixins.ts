export const textGradient = (primary: string, secondary: string) => `
	background: -webkit-linear-gradient(90deg, ${primary} 0%, ${secondary} 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;



export const flexCenter = (flow: `column nowrap` | `column wrap` | `row wrap` | `row nowrap`) => `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: ${flow};
`;
