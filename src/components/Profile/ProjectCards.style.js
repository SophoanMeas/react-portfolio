import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.pBgColor};
  min-height: 100vh;

  @media screen and (max-width: 760px) {
    height: 1100px;
  }

  @media screen and(max-width: 480px) {
    height: 1000px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #ffff;
  margin: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h1`
  color: #5620c3;
  font-size: 1rem;
  margin-top: .5rem;
  text-decoration: none;

  :hover {
    color: #00c9a7;
    transition: .1s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
