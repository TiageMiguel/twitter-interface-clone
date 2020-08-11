import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  HeaderRetweetIcon,
} from './styles';

interface TweetProps {
  name: string;
  nickname: string;
  avatar: string;
  time: string;
  description: string;
  retweet?: boolean;
  comments: number;
  retweets: number;
  likes: number;
  image?: string;
}

const Tweet: React.FC<TweetProps> = ({
  name,
  avatar,
  comments,
  description,
  likes,
  nickname,
  retweets,
  time,
  image,
  retweet,
}) => {
  return (
    <Container>
      {retweet && (
        <Retweeted>
          <HeaderRetweetIcon />
          Você retweetou
        </Retweeted>
      )}
      <Body>
        <Avatar src={avatar} alt={name} />
        <Content>
          <Header>
            <strong>{name}</strong>
            <strong>{nickname}</strong>
            <Dot />
            <time>{time}</time>
          </Header>
          <Description>{description}</Description>
          {image && <ImageContent src={image} alt={name} />}
          <Icons>
            <Status>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweets}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
