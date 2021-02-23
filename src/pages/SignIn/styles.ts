import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { textGradient } from '../../styles/mixins';


export const _Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  position: relative;
`;

const _Header = styled.header`
	display: flex;
	align-items: center;
	flex-flow: column nowrap;

	width: 100%;
`;

const _Title = styled.h1`
  padding: 0;
  margin: 0;

  font-size: var(--m-medium-1);
  font-weight: 800;

  ${textGradient(`#281ac8`, `#fd749b`)};

  @media (min-width: 400px) {
    font-size: var(--m-medium-4);
  }
`;

const _Description = styled.span`
  padding-top: var(--t-padding);

  font-weight: 500;
  font-size: var(--s-small-2);
  text-align: center;
`;

const _Content = styled.main`
  width: 100%;
`;

const _Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  width: 100%;

  background-color: var(--o-quaternary);

  transition: 0.1s ease;
`;

const _FormInput = styled.input`
  width: 100%;
  padding: var(--s-padding);
  outline: none;
  border: none;
	border-radius: 4px;

  font-size: var(--s-small-2);

  background: var(--secondary-foreground);
`;

const _FormLabelText = styled.p`
  align-self: flex-start;

  font-size: var(--s-small-2);
  font-weight: 600;

  margin-top: var(--m-margin);

  color: var(--elements-2);

  // --------- @media queries ---------
  @media (min-width: 720px) {
    margint-top: var(--b-margin);
  }
`;

const _ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;

  width: 100%;
  margin-top: var(--mb-padding);

  @media (min-width: 510px) {
    flex-flow: row;
  }
`;

const _FormButton = styled.button`
  width: 100%;
  height: var(--secondary-height);
  border: none;
  border-radius: var(--radius);

  background: var(--quaternary);
  color: var(--primary-foreground);

  font-size: var(--m-medium-1);
  font-weight: 800;

  transition: 0.6s ease;
  cursor: pointer;

  // -------- @media queries --------
  @media (min-width: 510px) {
    width: 45%;
    height: var(--secondary-height);
  }
`;

const _FormSignUpButton = styled.button`
  width: 100%;
  height: var(--secondary-height);
  margin-top: var(--m-margin);
  border-radius: var(--radius);
  border: none;

  font-size: var(--m-medium-1);
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  background: var(--primary);
  color: var(--primary-foreground);

  transition: 0.3s ease-in;
  cursor: pointer;

  @media (min-width: 510px) {
    width: 45%;
    height: var(--secondary-height);
    margin-top: 0;
  }
  @media (min-width: 550px) {
    font-size: var(--m-medium-1);
  }
`;

const _FormRecoveryPassword = styled(Link)`
  justify-content: center;

  text-align: center;

  margin-top: var(--mb-margin);
`;

const _FormRecoveryPasswordTitle = styled.h4`
  font-size: var(--s-small-2);
  font-weight: 700;

  color: var(--tertiary);
`;

const _ErrorMessage = styled.h3`
  padding-top: var(--t-padding);

  position: absolute;
  z-index: 10;
  right: 0;

  color: var(--tertiary);

  font-size: var(--s-small-1);
  font-weight: 500;
`;

const _InputSection = styled.section`
  position: relative;
  width: 100%;
`;

export const Screen = {
	layout: {
		Base: _Container,
		Header: _Header,
		Content: _Content,
		Footer: ``,
	},
	with: {
		Title: _Title,
		Description: _Description,
		Form: _Form,
		FormInput: _FormInput,
		FormLabel: _FormLabelText,
		ButtonContainer: _ButtonGroup,
		FormButton: _FormButton,
		SignUp: _FormSignUpButton,
		RecoveryPassword: _FormRecoveryPassword,
		RecoveryPasswordTitle: _FormRecoveryPasswordTitle,
		ErrorMessage: _ErrorMessage,
		InputContainer: _InputSection,
	},
};
