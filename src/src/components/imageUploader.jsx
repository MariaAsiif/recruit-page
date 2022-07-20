import React from 'react'
import { AiOutlineCloudDownload} from 'react-icons/ai'
const ImageUploader = () => {
    return (
        <>
            <div className="upload_wrapper">

                <div className="uploader_container">
                    <div className="icon">
                        <AiOutlineCloudDownload/>
                    </div>
                    <div className="upload_heading">
                        <h1>Drag & Drop </h1>
                        <h3>Your file type</h3>
                        <p>Or Select an option below</p>

                    </div>
                    <div className="upload_btn">
                        <button>Browse my files</button>
                        <br />
                        <span>Maximum Upload File Size:25MB</span>
                    </div>
                    <div className="upload_para">
                        <p>All files uploaded here will be scanned to ensure content is benign, contaminated files and threats will be rejected</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ImageUploader