import styled from "styled-components";
import { PrimaryHeading, TertiaryHeading } from "../../Globals/Globals";

export const AgricultureMainContainer = styled.div`
margin-top: 15rem;
text-align: center;
font-style: normal;

    
`
export const AgricultureSlickContainer = styled.div`
background-color: red;
`
export const AgricultureTertiaryHeading = styled(TertiaryHeading)`
// margin-top: 2px;
`

export const AgricultureImg = styled.img`
width:100%;
object-fit: cover;

`

export const AgricultureImg1 = styled.img`
height: 40.3rem;
object-fit: cover;

`

export const AgricultureMiniImg = styled.img`
// padding-right: 2rem;
width:100%;
height:100%;

`
export const AgriculteImgsSection = styled.div`
margin-top:2rem;
display: block;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const AgricultureImgContainer = styled.div`
height: 38.3rem;
`
export const SlickMainContainer = styled.div`
display: none;
margin-top:5.2rem;
@media screen and (max-width: 768px) {
    display: block;
}
`
export const AgriculteContainer = styled.div`
position: relative;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    h3{
        margin-top: 1rem;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 3.6rem;
letter-spacing: 0em;
color: #FFFFFF;
    }
    p{
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
text-align: center;
color: rgba(255, 255, 255, 0.8);
margin-top: 0.6rem;
padding: 0 0.4rem;
    }
   
}
&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }


`
export const AgriculteContainer1 = styled.div`
position: relative;
  text-align: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    opacity: 0;
    height: 95%;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    h3{
        margin-top: 1rem;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 3.6rem;
letter-spacing: 0em;
color: #FFFFFF;
    }
    p{
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
text-align: center;
color: rgba(255, 255, 255, 0.8);
margin-top: 0.6rem;
padding: 0 0.3rem;

    }
   
}
&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }


`
export const AgricultureImgContainer1 = styled.div`

text-align: center;
position:relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    opacity: 0;
    width: 95%;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    h3{
        margin-top: 1rem;
font-size: 2.4rem;
font-style: normal;
font-weight: 600;
line-height: 3.6rem;
letter-spacing: 0em;
color: #FFFFFF;
    }
    p{
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
text-align: center;
color: rgba(255, 255, 255, 0.8);
margin-top: 0.6rem;
padding: 0 0.3rem;

    }
   
}
&:hover,&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }

`
export const AgriHeading = styled(PrimaryHeading)`
text-transform: capitalize;
font-size: 3rem;
`