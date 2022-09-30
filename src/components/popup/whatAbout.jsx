import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Whatabout = ({ permition, Toggle, }) => {

  const handleClose = (e) => {
    Toggle(false)
  }

  return (
    <>

      <div className='form_popup'>
        <Modal open={permition}  onClose={handleClose} center  >
          <div className='bscontainer max-h-[500px] overflow-y-auto'>
            <div className='row'>
              <div className='col-lg-12  text-center'>
                <h1 className='font-bold text-[25px]  mb-5'>What is Beta ?</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, adipisci? Omnis, esse alias. Animi, voluptatem maxime eaque dolorum molestias nesciunt iste."</p>
              </div>

              <div className='col-lg-6 mt-4 text-justify '>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  About the Public Beta
                </h2>
                <span >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, molestiae tenetur! Odio eveniet qui, atque optio vero minima reprehenderit voluptas voluptatibus, sunt itaque architecto saepe adipisci id cum! Ipsum, odio.</span>
              </div>
              <div className='col-lg-6 mt-4 text-justify'>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  About the Public Beta
                </h2>
                <span >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, molestiae tenetur! Odio eveniet qui, atque optio vero minima reprehenderit voluptas voluptatibus, sunt itaque architecto saepe adipisci id cum! Ipsum, odio.</span>
              </div>

              <div className='col-lg-6 mt-5 text-justify '>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  About the Public Beta
                </h2>
                <span >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, molestiae tenetur! Odio eveniet qui, atque optio vero minima reprehenderit voluptas voluptatibus, sunt itaque architecto saepe adipisci id cum! Ipsum, odio.</span>
              </div>
              <div className='col-lg-6 mt-5 text-justify'>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  About the Public Beta
                </h2>
                <span >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, molestiae tenetur! Odio eveniet qui, atque optio vero minima reprehenderit voluptas voluptatibus, sunt itaque architecto saepe adipisci id cum! Ipsum, odio.</span>
              </div>
            

              <div className='col-lg-12 mt-[30px]  text-center'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, adipisci? Omnis"</p>
                <br/>
                <span className='mt-[30px]'>"Lorem ipsum dolor sit amet, consectetur adipisicing "</span>
              
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Whatabout