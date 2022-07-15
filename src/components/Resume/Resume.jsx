import React, { useState } from 'react';
import {
  Container,
  CardContainer,
  CardWrapper,
  Card,
  CardIcon,
  HeaderH1,
  Text,
} from './Resume.style';
import AboutMe from '../../assets/images/svg/about-me.svg';
import Exp from '../../assets/images/svg/experiences.svg';

export default function Resume() {

  const [data] = useState([
    {
      heading: 'About Me',
      icon: AboutMe,
      text: 'Technical Skills: C/C++, Java, OOP, Data Structure, Process Architecture, Interfacing, Software Design and Testing, SQL, MYSQL, PostgresSQL, Angular, CSS, HTML, RESTful APIs, JavaScript, Network Programming, Unix/Linux, Web Enterprise, .NET, embedded programming, real-time, loT, MQTT Cloud, Circuit logic design, UI web application',
    },
    {
      heading: 'Experiences',
      icon: Exp,
      text: 'Knowledge in Java/C/C++/OOP design patterns, data structure and algorithm\nExperiences in developing web apps, Full-Stack Mern Developer\nRESTFul API/JavaScript/Graphql\n/MySQL/NOSQL/React/MongoDB, GIT version control\nDeveloped and understand of embedded platforms, RT application, multi-processor, RT program in C running on Linux OS/QNX, compile in C\nUnderstanding of networking and the different layer protocols\nBusiness Intelligence and Data Analytics',
    },
  ]);

  return (
    <>
      <Container>
        <CardContainer>
          <CardWrapper>
            {data.map((items) => (
              <Card>
                <CardIcon src={items.icon}>
                </CardIcon>
                <HeaderH1>{items.heading}</HeaderH1>
                <br></br>
                <Text>{items.text}</Text>
              </Card>
            ))}
          </CardWrapper>
        </CardContainer>
      </Container>
    </>
  );
}
