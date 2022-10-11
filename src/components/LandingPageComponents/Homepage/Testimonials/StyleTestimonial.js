import styled from "styled-components";
import TestimonialBackground from '../../../../assets/landingImages/TestimonialBackground.png';

export const Testimonial = styled.div`
margin-top: 6rem;
.testimonial-slider{
    .slick-prev{
        left: -25px;
    } 
    .slick-next {
        right: 6px;
    }
}


#testimonial-slider{
    padding: 50px 20px 35px 20px;
    background: #fff;
    text-align: center;
    box-shadow: 0 0 115px 19px rgba(236, 236, 236, 1);
}
.testimonial .description{
    font-size: 14px;
    color: #777;
    line-height: 26px;
    text-indent: 30px;
    position: relative;
}
.testimonial .description:before{
    content: "\f10d";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    top: 0;
    left: -15px;
}
.testimonial .title{
    font-size: 24px;
    font-weight: bold;
    color: #363636;
    text-transform: capitalize;
    margin: 0;
}
.testimonial .post{
    display: block;
    font-size: 15px;
    color: #363636;
}



.background{
    background-image: 
    url(${TestimonialBackground});
    width: 144rem;
    height: 72.9rem;
}
h1{
    text-align: center;
    font-weight: 500;
    font-size: 3rem;
    @media screen and (max-width:600px) {
        font-size:2rem;
      }
      @media screen and (max-width:992px) {
        font-size:2.5rem;
      }
}
.text-design{
    font-weight: 500;
    font-size: 1rem;
    line-height: 2.4rem;
    text-align: center;
    color: #828282;
}
.main-image{
    height: 12.7rem;
    width: 12.7rem;
    margin-bottom: 2.1rem;
    margin-top: 5.8rem;
}
.Card{
    margin-right: 1rem;
    height: 50rem;    
    max-width: 45rem;
    @media screen and (min-width:320px) {
        
    }
}

.nameHeading{
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 3.6rem;
    color: #242424;
}
.profession{
    font-weight: normal;
    font-size: 1rem;
    line-height: 2.4rem;
    color: #828282;
}
.flag{
    width: 2.25rem; 
    height :1.4rem;
    margin-top: 1.85rem;
}
 .lead{
    font-size: 1rem;
    line-height: 2.4rem;
    color: #828282;
    margin:2rem 0;
    padding:0 3rem; 
    margin-top: 5px;

 }   
 .btn-read{
    font-weight: normal;
    font-size: 1.2rem;
   color: #E84025;
 }
`
export const RecordingContainer=styled.div`
padding:2rem ;
`