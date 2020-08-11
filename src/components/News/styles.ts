import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  > span {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 3px;
  }
`;
