import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const ImageViewerPopup = (props) => {
    return (
        <Modal open={props.open} onClose={props.onClose} center  >
            <div className='bscontainer'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={props.imageUrl} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ImageViewerPopup