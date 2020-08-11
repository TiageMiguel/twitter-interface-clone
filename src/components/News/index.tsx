import React from 'react';

import { Container } from './styles';

interface NewsProps {
  title: string;
  description: string;
}

const News: React.FC<NewsProps> = ({ title, description }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{description}</strong>
    </Container>
  );
};

export default News;
