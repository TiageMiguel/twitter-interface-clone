import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  Followage,
} from './styles';

interface ProfilePageProps {
  name: string;
  nickname: string;
  description: React.ReactNode;
  location: string;
  followers: number;
  following: number;
  avatar: string;
  banner: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  nickname,
  description,
  followers,
  following,
  location,
  avatar,
  banner,
}) => {
  return (
    <Container>
      <Banner url={banner}>
        <Avatar src={avatar} alt={name} />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>{name}</h1>
        <h2>{nickname}</h2>
        {description}
        <ul>
          {location && (
            <li>
              <LocationIcon />
              {location}
            </li>
          )}
        </ul>
        <Followage>
          <span>
            seguindo <strong>{followers}</strong>
          </span>
          <span>
            <strong>{following}</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
