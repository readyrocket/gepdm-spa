import styled from '@emotion/styled';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  height: 100vh;

  background: var(--secondary-foreground);

  > .s-loadin-spin {
    color: var(--primary);
  }
`;
