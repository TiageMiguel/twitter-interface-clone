import styled from 'styled-components';

import { LocationOn } from '../../styles/icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface BannerProps {
  url: string;
}

export const Banner = styled.div<BannerProps>`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: ${props => props.theme.colors.twitter};
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Avatar = styled.img`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.gray};
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: ${props => props.theme.colors.twitter};
    }
  }

  > ul {
    list-style: none;
    margin: 10px 0;

    > li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: ${props => props.theme.colors.gray};

      > svg {
        fill: ${props => props.theme.colors.gray};
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const LocationIcon = styled(LocationOn)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.gray};
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: ${props => props.theme.colors.gray};

    & + span {
      margin-left: 20px;
    }
  }
`;
