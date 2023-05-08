import styled from "styled-components";
import headerImg from '../../../../assets/landingImages/banner.svg';

const StyledHero = styled.div`
  /* background-image: url(${headerImg});
  background-color: #cccccc;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover; */

.hero-video{
  width: 100%;
  height:125vh;
  object-fit: cover;
  position: relative;
  z-index: -1;
  margin-top: -9.8rem;
  @media screen and (max-width:1200px)and (min-width: 768px) {
    height: 115vh;
  }

  @media screen and (max-width: 600px){
    height: 123vh;
  }

}


// .slider_overly{
//   @media screen and (max-width: 600px){
//     height: 105vh !important;
//   }
// }


.home-main-header-sub-heading{
    color: #ffff;
    opacity: 0.8;
    font-weight: normal;
   font-size: 1.9rem;
   @media screen and (max-width: 600px){
    font-size: 1rem;
  }
 
}

.home-main-header-main-heading{
  @media screen and (max-width:768px)and (min-width: 300px) {
    padding-top:20rem
  }

  @media screen and (max-width:1200px)and (min-width: 768px) {
    padding-top:25rem
  }
}


.heroslider-videoOver:before {
  content: "";
  position: absolute;
  background: #000;
  opacity: .7;
  border-radius: 5px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 600px){
    border:1pt solid red;
  }
  @media screen and (max-width: 992px){
    width: 100%;
    height: 100%;
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
