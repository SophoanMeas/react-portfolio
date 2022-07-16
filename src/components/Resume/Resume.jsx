import React from 'react';
import {
  Container,
  CardContainer,
  CardWrapper,
  Card,
  CardIcon,
  HeaderH1,
  Text,
} from './Resume.style';

export default function Resume({ data }) {
  return (
    <>
      <Container>
        <CardContainer>
          <CardWrapper>
            {data.map((items) => (
              <Card>
                <CardIcon src={items.icon}></CardIcon>
                <HeaderH1>{items.heading}</HeaderH1>
                <br></br>
                <Text>{items.description}</Text>
              </Card>
            ))}
          </CardWrapper>
        </CardContainer>
      </Container>
    </>
  );
}
