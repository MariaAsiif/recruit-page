import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Testimonial1 from '../../../../assets/landingImages/Testimonial1.png';
import Testimonial2 from '../../../../assets/landingImages/Testimonial2.png';
import Testimonial3 from '../../../../assets/landingImages/Testimonial3.png';
import flag from '../../../../assets/landingImages/flag.svg';
import Slider from 'react-slick';
import { Testimonial, RecordingContainer } from './StyleTestimonial'
import WaveSurf from './WaveSurf/WaveSurf';
import TestimatePopup from '../TesitimatePopup/TestimatePopup';


// tesimational


function Testimonials() {

  const [IsShow, setIsShows] = useState(false)
  const [IsData, setIsData] = useState({})
  const imgs = [
    { name: 'Carrie M. Atkins', img: Testimonial1, subtitle: 'I was always afraid of marijuana and cannabis, especially after Ronald Reagan became president and further demonized the plant, sending hundreds of American citizens to jail for simple possession. I am a Type 1 diabetic. Furthermore, I also suffer from Glioblastoma cancer in my brain, and I am now experiencing chronic excruciating pain.  My doctor suggested I try, a cannabis Therapeutic medicine. I began using marijuana as a Therapeutic, I experienced immediate relief and my quality of life has drastically changed for the better.', audio: 'Audios/Kevin M. Russell.mp3' },
    { name: 'Kevin M. Russell', img: Testimonial2, subtitle: 'I suffer from chronic migraines and mood swings, at times, it is hard to control my mood, or even focus on where I am due to unbearable pain. Further complicating my medical condition, I suffer from complications of bipolar and schizophrenia. I used pharmaceutical preparations supplied by my doctor for years without any meaningful effect. As a last resort he recommended I try cannabis, I did, and the immediate effect was total calming of my body and focus such as I have never experienced before. I will never go back to taking prescribed pills, cannabis, and marijuana is the only treatment that gives me relief for the longest periods of time. ' },
    { name: 'Chazaty N. Johnson', img: Testimonial3, subtitle: "Since I was a teenager, I've suffered from Dysmenorrhea, a most excruciatingly painful minstrel cramp. I tried over the counter preparations available in North America and Canada, including preparations made in Mexico, to no effect. My grandmother, in chronic pain management herself, encouraged me to try a marijuana Therapeutic during one of my most painful episodes, and to my surprise the pain dissipated almost instantaneously. I also suffer from chronic arthritic condition as I use the computer for work, so my hands and joints would ache constantly. I began using marijuana is a therapeutic, all that pain went away like tears in rain.", audio: 'Audios/Chazaty N. Johnson.mp3' },
    { name: 'Carrie M. Atkins', img: Testimonial1, subtitle: 'I was always afraid of marijuana and cannabis, especially after Ronald Reagan became president and further demonized the plant, sending hundreds of American citizens to jail for simple possession. I am a Type 1 diabetic. Furthermore, I also suffer from Glioblastoma cancer in my brain, and I am now experiencing chronic excruciating pain.  My doctor suggested I try, a cannabis Therapeutic medicine. I began using marijuana as a Therapeutic, I experienced immediate relief and my quality of life has drastically changed for the better.', audio: 'Audios/Kevin M. Russell.mp3' },
    { name: 'Kevin M. Russell', img: Testimonial2, subtitle: 'I suffer from chronic migraines and mood swings, at times, it is hard to control my mood, or even focus on where I am due to unbearable pain. Further complicating my medical condition, I suffer from complications of bipolar and schizophrenia. I used pharmaceutical preparations supplied by my doctor for years without any meaningful effect. As a last resort he recommended I try cannabis, I did, and the immediate effect was total calming of my body and focus such as I have never experienced before. I will never go back to taking prescribed pills, cannabis, and marijuana is the only treatment that gives me relief for the longest periods of time. ' },
    { name: 'Chazaty N. Johnson', img: Testimonial3, subtitle: "Since I was a teenager, I've suffered from Dysmenorrhea, a most excruciatingly painful minstrel cramp. I tried over the counter preparations available in North America and Canada, including preparations made in Mexico, to no effect. My grandmother, in chronic pain management herself, encouraged me to try a marijuana Therapeutic during one of my most painful episodes, and to my surprise the pain dissipated almost instantaneously. I also suffer from chronic arthritic condition as I use the computer for work, so my hands and joints would ache constantly. I began using marijuana is a therapeutic, all that pain went away like tears in rain.", audio: 'Audios/Chazaty N. Johnson.mp3' }

  ]


  const handleData = (data) => {
    setIsShows(true)
    setIsData(data)
  }

  const handleClose = () => {
    setIsData('')
    setIsShows(false)
  }

  console.log("Data", IsData)

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <Testimonial>
      <h1 >Testimonials</h1>
      <p className='text-design'> Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. </p>
      <div className='bscontainer-fluid'>
        <Slider {...settings} className='responsive-slick'>
          {imgs.map((data, index) => {
            const { img, subtitle, name, audio } = data;
            return (<div key={index}>
              <Card className='Card'>
                <div className='text-center card-body'>
                  <img class src={img} alt="Testimonial " className='main-image mx-auto' />
                  <h3 className="nameHeading">{name}</h3>
                  <h6 className="profession">Marketing Agency</h6>
                  <img src={flag} alt="flag" className='flag mx-auto' />
                  <RecordingContainer className='pb-4 ' style={{ height: 136 }}>
                    {
                      audio && (
                        <WaveSurf audio={audio} />
                      )
                    }
                  </RecordingContainer>
                  {
                    subtitle && (
                      <div style={{
                        marginTop: '0 !important', whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }} className='lead'>{`"${subtitle}"`}</div>
                    )
                  }
                  <p className='btn-read' onClick={() => { handleData(data) }}>Read More</p>
                </div>
              </Card>
            </div>)
          }

          )
          }
        </Slider>
      </div>
      {IsShow && <TestimatePopup permition={IsShow} Info={IsData} Toggle={() => handleClose()} />}
    </Testimonial>
  );
}

export default Testimonials;