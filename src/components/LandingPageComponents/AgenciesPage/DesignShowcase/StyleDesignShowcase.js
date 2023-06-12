import styled from 'styled-components';
import styles from 'styled-components';

const StyleDesignShowcase=styled.div`
margin-top: 9rem;
h3{
font-size: 3.6rem;
font-style: normal;
font-weight: 500;
line-height: 5.4rem;
letter-spacing: 0em;
color: #333333;
text-align: center;
}
.swiper-slide{
    background-position: center;
    background-size: 100%;
    /* width: 0rem; */
    /* height: 50rem; */

}
.swiper-slide img{
    display: block;
    width: 100%;
    height: 100%;
    //object-fit: cover;
}
.swiper-slide-next{
    transform: translate3d(0px, 0px, -440px) rotateX(0deg) rotateY(-59deg) scale(1) !important;
}
.swiper-slide-prev{
    transform: translate3d(0px, 0px, -440px) rotateX(0deg) rotateY(59deg) scale(1) !important;
}
.swiper-slide-active{
    /* width: 100% !important; */
    margin: 0 auto !important;
}
/* slide-inner {
 // position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  background-position: center;
 
} */


`

export default StyleDesignShowcase;
export const StyleDesignInner=styled.div`
margin-top: 6rem;
`