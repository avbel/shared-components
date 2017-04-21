import styled, { css } from 'styled-components';

export default styled.label`
  font-size: ${({ theme }) => theme.label.fontSize};
  letter-spacing: ${({ theme }) => theme.label.letterSpacing};
  font-weight: ${({ theme }) => theme.label.fontWeight};
  font-family: ${({ theme }) => theme.label.fontFamily};
  margin: ${({ theme }) => theme.label.margin};
  padding: ${({ theme }) => theme.label.padding};
  color: ${({ theme }) => theme.label.fg};
  background: ${({ theme }) => theme.label.bg};

  ${({ required, theme }) =>
    required ?
      css`
        &::after {
          content: '*';
          color: ${theme.label.requiredMarkFG};
          padding-left: 0.3em;
        }
      ` :
      ''
  }
`;