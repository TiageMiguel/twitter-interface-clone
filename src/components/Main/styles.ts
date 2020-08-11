import styled, { css } from 'styled-components';

import {
  ArrowLeft,
  Home,
  Search,
  Email,
  Notifications,
} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid ${props => props.theme.colors.gray};
    border-right: 1px solid ${props => props.theme.colors.gray};
  }
`;

export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.primary};
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid ${props => props.theme.colors.outline};
  z-index: 100;

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.twitterDarkHover};
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.colors.twitter};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
  }
`;

const iconStyle = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: ${props => props.theme.colors.gray};

  &:hover,
  &.active {
    fill: ${props => props.theme.colors.twitter};
  }
`;

export const BottomMenu = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.gray};
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconStyle}
`;

export const SearchIcon = styled(Search)`
  ${iconStyle}
`;

export const BellIcon = styled(Notifications)`
  ${iconStyle}
`;

export const EmailIcon = styled(Email)`
  ${iconStyle}
`;
