import styled from "styled-components";
import headerImg from '../../../../assets/landingImages/banner.svg';

const StyledHero = styled.div`
  /* background-image: url(${headerImg});
  background-color: #cccccc;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover; */

.hero-video{
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
  margin-top: -9.8rem;
  @media screen and (max-width: 992px){
    height: 70vh;
  }

  @media screen and (max-width: 600px){
    height: 80vh;
  }
}
.home-main-header-sub-heading{
    color: #ffff;
    opacity: 0.8;
    font-weight: normal;
   font-size: 1.9rem;
   @media screen and (max-width: 600px){
    font-size: 1rem;
  }
  @media screen and (max-width: 992px){
    font-size: 2rem;
  }
}




`
const HeroHeading = styled.h3`
margin-top: 20rem;
 font-size: 6rem;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 992px){
    font-size: 4rem;
  }
  @media screen and (max-width: 600px){
    font-size: 2rem;
    text-align: center;
  }
`



const HeroButton = styled.button`
  margin-top: 4rem;
   border-color: #fff;
  padding: 0.7rem 3rem;
  border-radius: 15px;
  border: 1px solid white;
  background: transparent;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #E84025;
    color: white;
    border: 1px solid #E84025; 
  }
  `
const HomePlayButtonContainer = styled.div`
background-color: white;
width: 54px;
height: 54px;
border-radius: 50%;
display: flex;
position:absolute;
left:47%;
top:40%;
justify-content: center;
align-items: center;

`
const HeroPlayIcon = styled.img` 
  height: 6.2rem;
  cursor: pointer;
  width:  15.26px;
  height :  16.43px
  `
export const VideoModalMain=styled.div`
video{
  width: 100%;
  height: auto;
}
.btn-close{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 5rem;
    border: .1rem solid #fff;
    background-color: #fff;
    position: absolute;
    top: -4rem;
    right: -2rem;
    opacity:.5;
    &:hover{
        color: #000;
        text-decoration: none;
       opacity: .75
    }
    z-index: 100;
}
`
export { StyledHero, HeroHeading, HeroButton, HeroPlayIcon, HomePlayButtonContainer }
