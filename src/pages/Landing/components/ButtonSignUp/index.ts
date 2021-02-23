/* eslint-disable max-len */
import styled from '@emotion/styled';

const props = {
	primary: {
		width: `var(--primary-width)`,
		height: `var(--primary-height)`,
		background: `var(--primary-variant)`,
		color: `var(--primary-foreground)`,
		margin: 0,
		font: `var(--s-small-3);`,
	},
	secondary: {
		width: `var(--tertiary-width)`,
		height: `var(--tertiary-height)`,
		background: `var(--primary-foreground)`,
		color: `var(--primary-variant)`,
		margin: `2rem 0 0 0`,
		font: `var(--m-medium-2);`,
	},
};

const ButtonSignUp = styled.button`
  border-radius: var(--radius);
  border: none;

  height: ${({ className }) => (className === `secondary` ? props.secondary.height : props.primary.height)};
  width: ${({ className }) => (className === `secondary` ? props.secondary.width : props.primary.width)};
  margin: ${({ className }) => (className === `secondary` ? props.secondary.margin : 0)};

  background: ${({ className }) => (className === `secondary` ?
		props.secondary.background
		: props.primary.background)};

  color: ${({ className }) => (className === `secondary` ? props.secondary.color : props.primary.color)};

  font-weight: 800;
  font-size: ${({ className }) => (className === `secondary` ? props.secondary.font : props.primary.font)};

  transition: all 0.3s ease;

  &:hover {
    color: ${({ className }) => (className === `secondary` ? `--primary` : `inherint`)};
  }
`;

export { ButtonSignUp };
