import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const roomInRight = keyframes`
	from {
		opacity: .3;
		transform: translateX(100%) rotateY(-90deg);
	}
}
`;

export const roomOutRight = keyframes`
	to {
		opacity: .3;
		transform: translateX(100%) rotateY(-90deg);
	}
`;

export const _NavigationContainer = styled.div``;

const _NavigationBar = styled.div`
  display: flex;
  flex-flow: column;

  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;

  padding: var(--b-padding);
  box-shadow: 10px 0 20px 10px rgba(22, 22, 22, 0.3);

  background: var(--primary-foreground);

  font-size: var(--m-medium-2);

  transition: all 0.4s ease;

  > .s-navlink {
    margin-right: var(--m-margin);

    color: var(--tertiary-foreground);

    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-variant);
    }
  }

  &.disabled {
    display: none;
  }

  &.m-navbar__inactive {
    animation: ${roomOutRight} 1000ms both;
    z-index: 1;
  }

  &.m-navbar__active {
    animation: ${roomInRight} 1000ms both;
    z-index: 1;
  }

  @media (min-width: 55em) {
    display: none;
  }
  @media (max-width: 27.5em) {
    height: max-content;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

const _Divider = styled.div`
  height: 2px;
  width: 100%;

  margin: var(--s-margin) 0;

  background: var(--tertiary-foreground);
  opacity: 0.3;
`;

const _GetInApplication = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  > .s-signin {
    margin-top: var(--s-margin);
  }

  > .s-signin,
  .s-signup {
    width: 100%;

    border: none;
    outline: none;
    border-radius: 8px;
    padding: var(--t-padding);

    text-align: left;
    font-weight: bold;

    background: none;
    color: var(--tertiary-foreground);

    transition: all 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const NavBar = {
	with: {
		NavigationContainer: _NavigationContainer,
		NavigationBar: _NavigationBar,
		Divider: _Divider,
		GetInApplication: _GetInApplication,
	},
};
