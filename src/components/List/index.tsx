import React from 'react';

import { Container, Item, Title } from './styles';

interface ListProps {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<ListProps> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
