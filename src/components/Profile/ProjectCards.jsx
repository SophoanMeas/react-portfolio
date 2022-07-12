import React from 'react'
import { ProjectContainer, ProjectWrapper, ProjectCard, ProjectH1, ProjectH2, ProjectIcon } from './ProjectCards.style'
import Icon1 from '../../assets/images/svg/coding1.svg'
import Icon2 from '../../assets/images/svg/coding2.svg'
import Icon3 from '../../assets/images/svg/coding3.svg'

export default function ProjectCards() {
  return (
    <div>
      <ProjectContainer id="projects">
        <ProjectH1>My Projects</ProjectH1>
    <ProjectWrapper>

        <ProjectCard>
            <ProjectIcon src={Icon1}/>
            <ProjectH2>Movies</ProjectH2>
        </ProjectCard>
        <ProjectCard>
            <ProjectIcon src={Icon2}/>
            <ProjectH2>Movies</ProjectH2>
        </ProjectCard>
        <ProjectCard>
            <ProjectIcon src={Icon3}/>
            <ProjectH2>Movies</ProjectH2>
        </ProjectCard>
    </ProjectWrapper>

    </ProjectContainer>
    </div>
  )
}
