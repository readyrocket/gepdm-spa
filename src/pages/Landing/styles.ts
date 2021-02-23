/* eslint-disable max-len */
import styled from '@emotion/styled';

import { mediaQuery } from '../../styles/breakpoints';

const _Container = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;

  background: var(--tertiary-foreground);
`;

const _Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: static;

  width: 100%;
  height: 12.058rem;
  padding: 0 calc((var(--s-padding) * 62.2) / 100);

  background: var(--primary-foreground);

  transition: padding 0.2s ease;

  @media ${mediaQuery.regular} {
    padding: 0 calc((var(--b-padding) * 62.2) / 100);
    z-index: 1;
  }
`;

const _Title = styled.h1`
  font-size: var(--b-big-2);
  font-weight: bold;
  color: var(--tertiary-foreground);
  margin: 0;
`;

const _NavigationTopBar = styled.nav`
  display: none;
  transition: all 0.2s ease-in-out;

  > .s-navlink {
    padding: 0 var(--s-padding);

    font-weight: 600;
    font-style: normal;
    font-size: var(--s-small-3);
    text-decoration: none;

    color: var(--tertiary-foreground);

    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-variant);
    }
  }

  @media (min-width: 55em) {
    display: flex;
    justify-content: space-between;

    font-size: var(--s-small-2);
  }
`;

const _GetInApplication = styled.section`
  display: none;
  transition: all 0.2s ease;

  @media (min-width: 55em) {
    display: flex;
    justify-content: space-between;

    font-size: var(--s-small-3);
  }
`;

const _SignInButton = styled.button`
  margin: 0 var(--s-margin) 0 0;
  border-radius: var(--radius);
  border: none;

  height: var(--primary-height);
  width: var(--primary-width);

  font-weight: 800;

  background: var(--primary);
  color: var(--primary-foreground);

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--primary-variant);
  }
`;

const _ButtonMenuMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;
  position: absolute;
  right: 30px;
  top: 0;

  border: none;
  outline: none;
  cursor: pointer;

  background: none;
  overflow: hidden;

  @media (min-width: 55em) {
    display: none;
  }
`;

const _Content = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  place-content: center center;
  place-items: start;
  gap: 5rem 0;

  position: relative;
  min-height: 90vh;

  @media (min-width: 70em) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 2rem;
  }
`;

const _Welcome = styled.section`
  display: flex;
  place-content: center;
  place-items: center;
  flex-flow: column wrap;

  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;

  h1,
  h2,
  h3 {
    color: var(--primary-foreground);
    text-align: center;
  }

  .bold {
    font-weight: 800;
    color: var(--primary-variant);
  }

  @media (min-width: 70em) {
    place-content: center;
    place-items: start;

    h1,
    h2,
    h3 {
      text-align: start;
    }
  }
`;

const _WelcomeTitle = styled.h1`
  font-size: var(--b-big-1);

  @media (min-width: 70em) {
    font-size: var(--b-big-4);
    max-width: 60rem;
  }
`;

const _WelcomeDescription = styled.h2`
  font-size: var(--m-medium-3);

  @media (min-width: 70em) {
    font-size: var(--b-big-2);
  }
`;

const _WelcomeImage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const _Hamburger = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--g-card);
  width: 70%;
  height: 80%;
  border-radius: 8px;

  > img {
    width: 100%;
    max-width: 750px;
    min-width: 220px;
  }

  @media (min-width: 70em) {
    width: 80%;
    height: 50%;
  }
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
		TopNavBar: _NavigationTopBar,
		GetInApplication: _GetInApplication,
		SignInButton: _SignInButton,
		SmallMenu: _ButtonMenuMobile,
		Welcome: _Welcome,
		WelcomeTitle: _WelcomeTitle,
		WelcomeDescription: _WelcomeDescription,
		WelcomeImage: _WelcomeImage,
		Hamburger: _Hamburger,
	},
};
