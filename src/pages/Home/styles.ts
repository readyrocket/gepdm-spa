import styled from '@emotion/styled';

const _Container = styled.div`
  display: grid;
  grid-template-columns:
    calc(50vw - calc(var(--width) / 2))
    repeat(2, 1fr)
    calc(50vw - calc(var(--width) / 2));
  grid-template-rows: 7rem 1fr auto;
  margin: 0 auto;
  height: 100vh;
  min-height: 100vh;
  gap: 0;
  position: relative;

  background: var(--primary-foreground);

  @media screen and (min-width: 920px){
    grid-template-rows: 7rem 1fr;
    gap: 0 10px;
  }
`;

const _Header = styled.header`
  grid-area: 1 / 1 / 2 / 4;

  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: all 0.4s ease;
  background: transparent;

  &.nav-fixed {
    background: var(--secondary-foreground);
    box-shadow: 10px 0 3px 8px rgba(2, 2, 2, 0.02);
    position: sticky;
    top: 0;
    z-index: 2;
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 10px;

    h1 {
      font-size: clamp(24px, 3vw, 3rem);
      font-weight: bolder;
      color: --primary;
    }

    > .nav-items {
      display: flex;
      flex-flow: row wrap;

      a {
        margin: 0 10px;
        font-size: clamp(16px, 3vw, 1.8rem);
        color: var(--tertiary-foreground);
        text-decoration: none;
        -webkit-transition: color 0.2s ease;
        -o-transition: color 0.2s ease;
        transition: color 0.2s ease;
        position: relative;
        display: inline-block;

        &:hover {
          color: var(-hover);
        }
        &:hover::after,
        &:hover::before {
          width: 100%;
          left: 0;
        }
        &::after,
        &::before {
          content: "";
          position: absolute;
          top: calc(100% + 5px);
          width: 0;
          right: 0;
          height: 3px;
        }
        &::before {
          -webkit-transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
          -o-transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
          transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
          background: var(--color-primary);
        }
        &::after {
          -webkit-transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
          -o-transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
          transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
          background: var(--tertiary-foreground);
        }
        &.active:after {
          background: var(--tertiary-foreground);
          width: 100%;
          left: 0;
        }
        &.active:before {
          z-index: 2;
        }
      }

      @media screen and (max-width: 460px) {
        display: none;
      }
    }
  }
  @media screen and (min-width: 940px) {
    grid-area: 1 / 1 / 2 / 7;
  }
`;

const _Content = styled.main`
  grid-area: 2 / 1 / 3 / 5;
  transition: padding 0.5s ease;

  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  gap: 2rem 0;
  padding: 2rem 20px 20px 20px;

  position: relative;

  div {
    grid-row: span / 2;
  }

  div h1 {
    font-size: clamp(28px, 3.5vw, 3.5rem);
    line-height: 1.3;
  }
  div h1 span {
    box-shadow: inset 0 -10px 0 rgba(23, 223, 163, 0.3);
  }

  p {
    width: 90%;
    max-width: 30rem;
    font-size: clamp(18px, 2.5vw, 1.8rem);
    line-height: 1.5;
    margin-top: 16px;
    color: #131416;
    span {
      color: var(--tertiary-foreground);
    }
    @media screen and (min-width: 521px) {
      width: 85%;
      margin-top: 32px;
    }
  }

  @media screen and (min-width: 940px) {
    grid-area: 2 / 2 / 3 / 3;
  }
  @media screen and (min-width: 1059px) {
    padding: 2rem 0 10rem 20px;
  }
`;

const _Form = styled.form`
  grid-row: 2 / 3;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  input {
    width: 100%;
    height: clamp(5.5rem, 10vw, 6rem);
    max-width: 23rem;
    padding: 1rem 2rem;
    font-size: clamp(14px, 2.5vw, 1.5rem);
    border: none;
    outline: none;
    background: var(--secondary-foreground);
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    caret-color: --primary;
  }
  button {
    width: 100%;
    max-width: 14rem;
    height: clamp(5.5rem, 10vw, 6rem);
    padding: 1rem;
    border: none;
    outline: none;
    background: --primary;
    color: var(--primary-foreground);
    cursor: pointer;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    transition: background 0.5s ease;
    font-size: clamp(16px, 2vw, 1.2rem);
    font-weight: bold;
    &:hover {
      background: var(-hover);
    }
    &:focus-visible {
      outline: 2px solid var(-hover);
    }
  }
`;

const _RestaurantList = styled.div`
  grid-area: 3 / 1 / 4 / 5;
  background: inherit;
  padding: 20px 10px 0 10px;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-flow: column;
  > h1 {
    font-size: clamp(28px, 3.5vw, 1.8rem);
    color: var(--tertiary-foreground);
  }
  @media screen and (min-width: 940px) {
    grid-area: 1 / 3 / 3 / 4;
  }
`;

const _Restaurant = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  max-width: 60rem;
  margin-top: 3rem;
`;


export const Screen = {
	layout: {
		Container: _Container,
		Header: _Header,
		Content: _Content,
		Form: _Form,
		RestaurantList: _RestaurantList,
		Footer: ``,
	},
	with: {
		Restaurant: _Restaurant,
	},
};
