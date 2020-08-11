import React from 'react';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';
import {
  Container,
  SearchIcon,
  SearchWrapper,
  SearchInput,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Procurar no Twitter' />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <List
          title='Talvez você goste'
          elements={[
            <FollowSuggestion
              name='Elon Musk'
              nickname='@elonmusk'
              avatar='https://pbs.twimg.com/profile_images/1289966861333835776/LVnVeLln_400x400.jpg'
            />,
            <FollowSuggestion
              name='NASA'
              nickname='@NASA'
              avatar='https://pbs.twimg.com/profile_images/1091070803184177153/TI2qItoi_400x400.jpg'
            />,
            <FollowSuggestion
              name='Marques Brownlee'
              nickname='@MKBHD'
              avatar='https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg'
            />,
          ]}
        />
        <List
          title='Assuntos para você'
          elements={[
            <News
              title='Assunto do Momento em Portugal'
              description='Github'
            />,
            <News title='Futebol · Assunto do Momento' description='Benfica' />,
            <News title='Futebol · Assunto do Momento' description='Porto' />,
            <News
              title='Tecnologia · Assunto do Momento'
              description='Apple'
            />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default Sidebar;
