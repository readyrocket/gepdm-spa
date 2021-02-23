import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

import { mediaQuery } from '../../styles/breakpoints';

export const ToastfyContainer = styled(ToastContainer)`
  .Toastify__toast--success {
    border-radius: 4px;
    color: #222;
  }
  .Toastify__toast-container {
    position: absolute;
    z-index: 999;
  }
  .Toastify__toast {
    font-size: var(--s-small-1);
    font-weight: 500;
    color: var(--primary-foreground);

    @media ${mediaQuery.regular} {
      font-size: var(--s-small-2);
    }
  }
`;
