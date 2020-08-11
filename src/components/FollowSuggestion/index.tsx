import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface FollowSuggestionProps {
  name: string;
  nickname: string;
  avatar: string;
}

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({
  name,
  nickname,
  avatar,
}) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt={name} />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
