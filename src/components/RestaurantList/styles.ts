import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RestaurandCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 10rem;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;

  background: var(--primary-background-secondary);
  box-shadow: 0 0 10px 3px rgba(222, 222, 222, 0.3);

  & + & {
    margin: 2rem 0 0 0;
  }

  &:last-child {
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70px;
    max-width: 70px;
    max-height: 70px;
    border-radius: 50%;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const RestaurantCardDescriptionWrapper = styled.div`
  padding: 0 0 0 20px;
  line-height: 1.3;
  width: 100%;

  a {
    font-size: clamp(18px, 2vw, 2rem);
    color: var(--color-primary);
    font-weight: bold;
    transition: color 0.4s ease;
    &:hover {
      color: var(--color-primary-hover);
    }
  }
  p {
    margin-top: 8px;
    font-size: clamp(15px, 2vw, 1.5rem);
    color: #222222;
  }
  @media screen and (min-width: 720px){
    line-height: 1.5;
  }
`;

export const RestaurandCardItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const RestaurantLink = styled(Link)`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  color: var(--color-text-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;

  &:hover {
    background: var(--primary-background-tertiary);
    color: var(--color-text-secondary);
  }
`;

export const RestaurantInformaions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 16px;

  div span {
    font-size: clamp(12px, 2vw, 1.2rem);
    color: var(--color-four);
    font-weight: 600;
  }

  @media screen and (max-width: 1010px){
    flex-flow: column wrap;
    align-items: flex-start;

    div span {
      display: block;
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export const StarIcon = styled.div``;


export const NumberStars = styled.span`
  font-size: clamp(12px, 1.8vw, 1.2rem);
  padding-right: 8px;
  margin-top: 2px;
  font-weight: 700;
`;
