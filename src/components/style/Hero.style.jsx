import styled from "styled-components";
import HeroBackground from '../../assets/images/hero-sky.jpg'

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 25rem 0;
    /* background: url(${HeroBackground}); */
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%, #000 80%), url(${HeroBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;

`;
