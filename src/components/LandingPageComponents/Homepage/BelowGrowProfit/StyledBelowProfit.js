import styled from "styled-components";
import controlEnvironment from '../../../../assets/landingImages/controlEnvironment.png'

export const BelowGrowProfitMainContainer = styled.div`

/* margin-top:10rem; */
padding-top: 10rem ;
padding-bottom: 5rem;
text-align: center;
display: flex;
align-items:center;

h2{
font-size: 3rem;
font-style: normal;
font-weight: 500;
line-height: 5.6rem;
letter-spacing: 0em;
color: #242424;
opacity: 0.8;
padding: 0 3rem;
margin-top: 8.9rem;

@media screen and (max-width : 775px){
  font-size: 2.4rem;
line-height: 3.6rem;

}
}
`
export const BelowGrowProfitImgContainer = styled.div`
position: relative;

.play-img{
  transition: all 0.8s;
  cursor: pointer;
        &:hover{
          transform: scale(1.3);
        }
}
.inner-overlay{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 1;
 
  }
   
margin-top: 5.6rem;
background-image: url(${controlEnvironment}) ;

  background-repeat: no-repeat;
  background-size: cover;
`
export const BelowGrowProfitImg = styled.img`
 height: 61.5rem;
 
  
 
`