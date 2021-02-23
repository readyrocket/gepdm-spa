import styled from '@emotion/styled';

export const IconTabler = styled.span`
  .icon-tabler {
    transition: all 0.3s ease;
    z-index: 2;
  }

  .icon-tabler.open {
    position: absolute;
    z-index: 2;
    transform: scale(1);
  }

  .icon-tabler.close {
    position: absolute;
    z-index: 2;
    transform: scale(0);
  }
`;
