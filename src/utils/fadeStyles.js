import { css } from 'styled-components';

const fadeStyles = css`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(22px)')};
  transition: opacity 0.65s ease ${({ $delay = 0 }) => $delay}ms,
              transform 0.65s ease ${({ $delay = 0 }) => $delay}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export default fadeStyles;
