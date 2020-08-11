import styled from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

export default styled.button<ButtonProps>`
  background: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.twitter};
  color: ${props =>
    props.outlined ? props.theme.colors.twitter : props.theme.colors.white};
  border: ${props =>
    props.outlined
      ? `1px solid ${props.theme.colors.twitter}`
      : props.theme.colors.twitter};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${props =>
      props.outlined
        ? props.theme.colors.twitterDarkHover
        : props.theme.colors.twitter};
  }
`;
