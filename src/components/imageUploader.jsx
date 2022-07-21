import React, { useState } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
const ImageUploader = () => {
    const [url, setUrl] = useState('')


    const _handleChangeFile = (e) => {
        let file = e.target.files[0]
        let makeurl = URL.createObjectURL(file)
        setUrl(makeurl)
    }

    console.log("url", url)
    return (
        <>
            <div className="upload_wrapper">

                <div className="uploader_container">
                    {url ?
                        <div className='url'>
                            <img src={url} alt="userimg" />
                        </div>
                        :
                        <>
                            <div className="icon">
                                <AiOutlineCloudDownload />
                            </div>
                            <div className="upload_heading">
                                <h1>Drag & Drop </h1>
                                <h3>Your file type</h3>
                                <p>Or Select an option below</p>

                            </div>
                            <div className="upload_btn">
                                <label htmlFor='image' className="upload_label">
                                    Browse my files
                                </label>
                                <input type="file" id="image" onChange={_handleChangeFile} style={{ display: 'none' }} />
                                <br />
                                <span>Maximum Upload File Size:25MB</span>
                            </div>
                            <div className="upload_para">
                                <p>All files uploaded here will be scanned to ensure content is benign, contaminated files and threats will be rejected</p>
                            </div>
                        </>
                    }
                </div>

            </div>
        </>
    )
}

export default ImageUploader