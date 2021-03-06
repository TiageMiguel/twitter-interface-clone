import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
