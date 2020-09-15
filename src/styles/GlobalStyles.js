import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 3px;
    transition: all 0.50s linear;
  }

  input, button {
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 14px;
    outline: none;
    border-radius: 8px;
  }

  input {
    padding: 8px;
    border: 1px solid #999;
  }

  button {
    width: fit-content;
    max-width: 120px;
    height: 28px;
    border: none;
    cursor: pointer;

    &:hover {
      background: navy;
    }
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
`