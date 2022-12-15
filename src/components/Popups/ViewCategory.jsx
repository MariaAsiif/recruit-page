import React, { useRef, useState } from 'react'
import Transition from '../../utils/Transition';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useEffect } from 'react';
const ViewCategory = ({ id, modalOpen, onClose, data }) => {
    const modalContent = useRef(null);
    const [activeImage, setActiveImage] = useState("")
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setActiveImage(data.pictureLink1)
    }, [])
    console.log("data", activeImage)

    const ClosePopup = () => {
        onClose()
        setActiveImage("")
        setIndex(0)
    }
    return (
        <>
            <Transition
                className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
                show={modalOpen}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />
            {/* Modal dialog */}
            <Transition
                id={id}
                className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                show={modalOpen}
                enter="transition ease-in-out duration-200"
                enterStart="opacity-0 translate-y-4"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-200"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 translate-y-4"
            >
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-[550px]">
                    {/* Modal header */}
                    <div className="px-5 py-3 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-slate-800 text-[30px] ">View Product</div>
                            <button className="text-slate-400 hover:text-slate-500" onClick={ClosePopup}>
                                <div className="sr-only">Close</div>
                                <svg className="w-4 h-4 fill-current">
                                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='bscontainer'>
                        <div className="row">
                            <div className="col-lg-6">
                                {/* <img src={} className="object-cover w-[50%]" alt="cloth" /> */}
                                <InnerImageZoom src={activeImage || data?.pictureLink1} zoomType="hover" zoomSrc={activeImage || data?.pictureLink1} />
                                <div className='flex '>
                                    <img src={data?.pictureLink1} className={`${index === 0 && 'border border-red-500'} w-[20%]`} onClick={() => { return setActiveImage(data?.pictureLink1), setIndex(0) }} alt="product-images" />
                                    <img src={data?.pictureLink2} className={`${index === 1 && 'border border-red-500'} w-[20%]`} onClick={() => { return setActiveImage(data?.pictureLink2), setIndex(1) }} alt="product-images" />
                                    <img src={data?.pictureLink3} className={`${index === 2 && 'border border-red-500'} w-[20%]`} onClick={() => { return setActiveImage(data?.pictureLink3), setIndex(2) }} alt="product-images" />
                                    {/* <img src={ } alt="product-images" /> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='p-5'>
                                    <h2 className="text-[30px] font-bold ">{data?.nameofProduct}</h2>
                                    <p className='my-2'>{data?.titleofProduct}</p>
                                    <p className='my-2 font-semibold'>Category : <span className='font-medium'>{data?.category}</span></p>
                                    <p className='my-2 font-semibold'>SubCategory : <span className='font-medium'>{data?.subCategory}</span></p>
                                    <p className='my-2 font-semibold'>Price : <span className='font-medium'>{data?.price}</span></p>
                                    <p className='my-2 font-semibold'>Description:
                                        <br />
                                        <span className='font-medium my-2'>{data?.description}</span></p>
                                    <button className="border bg-[#24D29F] text-white px-6 py-3 rounded-md my-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Transition>
        </>
    )
}

export default ViewCategory