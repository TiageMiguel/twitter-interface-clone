import React from 'react';

import Tweet from '../Tweet';
import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        <Tweet
          retweet
          name='Elon Musk'
          nickname='@elonmusk'
          avatar='https://pbs.twimg.com/profile_images/1289966861333835776/LVnVeLln_400x400.jpg'
          comments={1000}
          likes={423000}
          retweets={21000}
          description='lmaoo code goes brr-r'
          time='7 de ago'
        />
        <Tweet
          name='Tiago Miguel'
          nickname='@tiage'
          avatar='https://github.com/TiageMiguel.png'
          comments={10}
          likes={10}
          retweets={10}
          description='new repo!'
          time='28 de jul'
          image='https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png'
        />
      </Tweets>
    </Container>
  );
};

export default Feed;
