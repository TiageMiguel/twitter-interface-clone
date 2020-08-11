import React from 'react';

import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Tiago Miguel</strong>
          <span>270 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage
        name='Tiago Miguel'
        nickname='@tiage'
        avatar='https://github.com/TiageMiguel.png'
        banner='https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200'
        location='Portugal'
        followers={300}
        following={41}
        description={
          <p>
            aka tiage. <a href='https://gitlab.com/Tiage'>@Gitlab</a>
          </p>
        }
      />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
