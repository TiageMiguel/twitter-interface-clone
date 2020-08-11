import styled from 'styled-components';

import { Search } from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  width: min(399px, 100%);
  max-height: 57px;
  background: ${props => props.theme.colors.primary};
  z-index: 2;
  padding: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: ${props => props.theme.colors.search};
  outline: 0;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.twitter};

    ~ svg {
      fill: ${props => props.theme.colors.twitter};
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: ${props => props.theme.colors.gray};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  position: sticky;
  top: 0;
`;
