import styled from '@emotion/styled';

import { textGradient } from '../../styles/mixins';

const _Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-flow: column;
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

  font-size: var(--m-medium-3);
  font-weight: 900;

  ${textGradient(`#281ac8`, `#fd749b`)};

  @media (min-width: 45em) {
    font-size: var(--b-big-1);
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
  border-radius: 20px;

  background-color: var(--primary-foreground);

  transition: 0.1s ease;
`;

const _FormInput = styled.input`
  width: 100%;
  padding: var(--s-padding);
  border: none;
  border-radius: 4px;
  outline: none;

  font-size: var(--s-small-2);

  background: var(--secondary-foreground);

  &:focus {
  }

  @media (min-width: 720px) {
    padding: var(--s-padding);
  }
`;

const _FormLabel = styled.p`
  align-self: flex-start;

  margin-top: var(--s-margin);

  font-size: var(--s-small-2);
  font-weight: 600;

  color: var(---tertiary-foreground);

  @media (min-width: 720px) {
    margint-top: var(--s-padding);
  }
`;

const _ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;

  width: 70%;
  margin-top: var(--s-margin);

  @media (min-width: 510px) {
    flex-flow: row;
  }
`;

const _FormButton = styled.button`
  width: var(--tertiary-width);
  height: var(--secondary-height);

  border: none;
  border-radius: var(--radius);

  padding: var(--button-padding) 0;

  margin: 0 auto;

  font-size: var(--m-medium-1);
  font-weight: 800;
  text-align: center;

  background: var(--quaternary);

  span {
    color: var(--primary-foreground);
  }

  transition: all 0.6s ease;
  cursor: pointer;
`;

const _ErrorMessage = styled.p`
  color: var(--tertiary);
  padding-top: var(--t-padding);

  position: absolute;
  right: 0;

  font-size: var(--s-small-1);
  font-weight: 500;
`;

const _InputSection = styled.section`
  position: relative;
  width: 100%;
`;

const _PrivacyTerms = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: row nowrap;

  position: relative;

  width: 100%;
  padding: var(--m-padding) 0 var(--s-padding) 0;

  > input[type="checkbox"] {
    display: block;
    align-self: center;
    min-width: 15px;
    min-height: 15px;
  }

  > .s-description {
    align-self: center;

    padding: 0 var(--s-small-1) 0 var(--s-small-1);
    margin: 0;

    font-size: var(--s-small-2);
    font-weight: 500;
  }

  > .s-description .s-privacy__link {
    padding-left: 4px;

    font-weight: 600;

    transition: all 0.4s ease;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const _PrivacyTermsErrorMessage = styled.p`
  color: var(--tertiary);
  margin-top: var(--t-padding);

  position: absolute;
  top: 45px;
  left: 0;

  font-size: var(--s-small-1);
  font-weight: 500;
`;

const _Input = styled.input`
  font-size: 2rem;
  color: var(--primary);

  width: 1em;
  height: 1em;

	cursor: pointer;
`;

export const Screen = {
	layout: {
		Base: _Wrapper,
		Header: _Header,
		Content: _Content,
		Footer: ``,
	},
	with: {
		Title: _Title,
		Description: _Description,
		Form: _Form,
		FormInput: _FormInput,
		FormLabel: _FormLabel,
		ButtonContainer: _ButtonContainer,
		FormButton: _FormButton,
		ErrorMessage: _ErrorMessage,
		InputContainer: _InputSection,
		PrivacyTerms: _PrivacyTerms,
		PrivacyError: _PrivacyTermsErrorMessage,
		Input: _Input,
	},
};
