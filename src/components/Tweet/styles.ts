import styled, { css } from 'styled-components';

import { Chat, Favorite, SwitchHorizontal } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.outline};
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${props => props.theme.colors.gray};
`;

export const HeaderRetweetIcon = styled(SwitchHorizontal)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;

  > path {
    color: ${props => props.theme.colors.gray};
  }
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  margin-top: 3px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${props => props.theme.colors.gray};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: ${props => props.theme.colors.gray};
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: ${props => props.theme.colors.gray};
  height: 2px;
  width: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.img`
  width: 100%;
  height: min(285px, max(175px, 41vw));
  margin-top: 12px;
  background: ${props => props.theme.colors.outline};
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    svg path {
      color: ${props => props.theme.colors.gray};
    }
  }

  &:nth-child(2) {
    color: ${props => props.theme.colors.retweet};

    svg,
    path {
      color: ${props => props.theme.colors.retweet};
    }
  }

  &:nth-child(3) {
    color: ${props => props.theme.colors.like};

    svg {
      fill: ${props => props.theme.colors.like};
    }
  }
`;

const iconStyles = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconStyles}
`;

export const RetweetIcon = styled(SwitchHorizontal)`
  ${iconStyles}
`;

export const LikeIcon = styled(Favorite)`
  ${iconStyles}
`;
