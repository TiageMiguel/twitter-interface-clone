import styled, { css } from 'styled-components';

import {
  Email,
  Favorite,
  ExitToApp,
  Twitter,
  Person,
  Notifications,
  Home,
} from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;
  margin-bottom: 20px;

  > path {
    fill: ${props => props.theme.colors.twitter};
  }
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 0;
  outline: 0;
  cursor: pointer;
  border-radius: 25px;

  > span {
    display: none;
  }

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    width: 40px;
    height: 40px;
    margin-top: 33px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  &:hover {
    background: ${props => props.theme.colors.twitterDarkHover};
  }

  &:hover,
  &.active {
    span,
    svg {
      color: ${props => props.theme.colors.twitter};
      fill: ${props => props.theme.colors.twitter};
    }
  }

  @media (min-width: 1280px) {
    padding-right: 15px;

    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
  }
`;

const iconStyles = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: ${props => props.theme.colors.white};
`;

export const HomeIcon = styled(Home)`
  ${iconStyles}
`;

export const BellIcon = styled(Notifications)`
  ${iconStyles}
`;

export const EmailIcon = styled(Email)`
  ${iconStyles}
`;

export const FavoriteIcon = styled(Favorite)`
  ${iconStyles}
`;

export const ProfileIcon = styled(Person)`
  ${iconStyles}
`;

export const Botside = styled.div`
  display: flex;
  align-items: center;
  margin-top: 29px;
`;

export const Avatar = styled.img`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${props => props.theme.colors.gray};
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    > span {
      color: ${props => props.theme.colors.gray};
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-left: 30px;
    cursor: pointer;
    color: ${props => props.theme.colors.white};

    &:hover {
      > path {
        color: ${props => props.theme.colors.like};
      }
    }
  }
`;
