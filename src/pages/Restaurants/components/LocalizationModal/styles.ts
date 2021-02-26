import styled from '@emotion/styled';

import { flexCenter } from '../../../../styles/mixins';

const _Container = styled.section`
  ${flexCenter(`column nowrap`)}

  width: 100%;
  height: 100%;

  padding: var(--s-padding);

  background: var(--primary-foreground);
`;

const _Title = styled.h1`
  ${flexCenter(`column nowrap`)}

  width: 100%;

  padding: var(--s-padding) 0;

  color: var(--tertiary-foreground);
`;

const _Input = styled.input`
  width: 100%;

  outline: none;
  border: none;

  padding: var(--s-padding);
  margin: var(--s-margin) 0;
  border-radius: 4px;

  font-size: var(--s-small-2);

  background: var(--secondary-foreground);
`;

const _DividerLabel = styled.span`
  font-size: var(--s-small-3);

  color: var(--tertiary-foreground);
`;

const _Submit = styled.button`
  width: var(--tertiary-width);
  height: var(--secondary-height);

  font-size: var(--s-small-3);
  font-weight: 600;

  margin: var(--s-margin) 0;
  border-radius: 4px;
  outline: none;
  border: none;

  background: var(--quaternary);
  color: var(--primary-foreground);
`;

export const Location = {
	layout: {
		Container: _Container,
	},
	with: {
		Title: _Title,
		Input: _Input,
		Label: _DividerLabel,
		Button: _Submit,
	},
};
