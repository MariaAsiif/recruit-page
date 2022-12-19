import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { callApi } from '../../utils/CallApi';
import { FcCheckmark } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import moment from "moment"
// import { FcCheckmark } from 'react-icons/fc'
import { toast, ToastContainer } from 'react-toastify';




const ViewEditInspire = ({ id, modalOpen, onClose, mode, data }) => {
    const modalContent = useRef(null);
    const [allcatagories, setallcatagories] = useState([])
    const [allstores, setallIStores] = useState([])
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange ', });
    const [file, setFile] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [image5, setImage5] = useState("");

        const handleFile = async (e) => {
            let file = e.target.files[0]
            let name = e.target.name
            const formData = new FormData()
            formData.append('file', file)
            let res = await callApi('/uploads/uploadProductImgs', "post", formData)
            if (res) {
              toast.success(res.message);
              if (name === "file1") {
                setImage1(res[0].url)
              }
              else if (name === "file2") {
                setImage2(res[0].url)
              }
              else if (name === "file3") {
                setImage3(res[0].url)
              }
              else if (name === "file4") {
                setImage4(res[0].url)
              }
              else {
                setImage5(res[0].url)
              }
        
            }
            else {
              toast.error(res.message);
        
            }
        

    }
    const onSubmit = async (values) => {
        let value = {
            "productsOfStoreid": data._id,
            "storeid": data.store,
            "nameofProduct": values.nameofProduct,
            "category": values.category || "shoe",
            "subCategory": values.subCategory,
            "productLink": values.productLink,
            "titleofProduct": values.titleofProduct,
            "price": values.price,
            "description": values.description,
            "pictureLink1":  image1 ? image1 : data.pictureLink1,
            "pictureLink2":  image2 ? image2 : data.pictureLink2,
            "pictureLink3":  image3 ? image3 : data.pictureLink3,
            "pictureLink4":  image4 ? image4 : data.pictureLink4,
            "pictureLink5":  image5 ? image5 : data.pictureLink5,
            active: true

        }
        const res = await callApi("/productsOfStore/updateProductsOfStore", "post", value)
        if (res.status === "Success") {
            console.log("Res", res)
            toast.success(res.message);
            onClose()
        }
        else {
            toast.error(res.message);

        }
    }

    useEffect(() => {
        (async () => {
          try {
            const payload = {
                "sortproperty": "createdAt",
                "sortorder": -1,
                "offset" : 0,
                "limit": 15,
                "query": {
                    "critarion": {"active" : true},
                    "addedby": "_id email first_name",
                    "lastModifiedBy": "_id email first_name"
                }
            }
    
            const payloadStore = {
              sortproperty: "created_at",
              sortorder: -1,
              offset: 0,
              limit: 50,
              query: {
                critarion: { active: true },
                addedby: "_id email first_name",
                lastModifiedBy: "_id email first_name"
              }
            }
            const responseCata = await callApi("/productcategories/getcategories", "post", payload)
            setallcatagories(responseCata?.data?.categories)
            const responseStore = await callApi("/stores/getStoresWithFullDetails", "post", payloadStore)
            setallIStores(responseStore?.data?.stores)
          } catch (error) {
            console.log(error);
          }
        })();
    
      }, [])

console.log("stor and cat" , allcatagories)

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            onClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });
    useEffect(() => {
        reset(data);

    }, [data, reset]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Modal backdrop */}
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
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-2/3">
                    {/* Modal header */}
                    <div className="px-5 py-3 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-slate-800">View Product</div>
                            <button className="text-slate-400 hover:text-slate-500" onClick={onClose}>
                                <div className="sr-only">Close</div>
                                <svg className="w-4 h-4 fill-current">
                                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='bscontainer'>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row p-5'>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> PRODUCT NAME</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.titleofProduct}</p>
                                        ) : (

                                            <input  {...register("nameofProduct", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.nameofProduct ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.nameofProduct && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> PRODUCT TITLE</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.titleofProduct}</p>
                                        ) : (

                                            <input  {...register("titleofProduct", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.titleofProduct ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.titleofProduct && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> PRODUCT TITLE</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.titleofProduct}</p>
                                        ) : (

                                            <input  {...register("titleofProduct", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.titleofProduct ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.titleofProduct && <span className='text-red-500'>This field is required</span>}
                                </div>

                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> CATEGORY </label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.category}</p>
                                        ) : (

                                            <select
                                                {...register('category')}
                                                // value={recruitModel.category}
                                                // onChange={handleChange}
                                                name="category"
                                                id="category"
                                                className={`border p-[10px] lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.category && 'border-red-500'}`}
                                            >
                                                <option value="">Select Category </option>
                                                {
                                                    allcatagories?.map((cat, index) => (
                                                        <option key={index} value={cat._id}>{cat.productCategoryTitle}</option>
                                                    ))
                                                }
                                            </select>
                                        )}
                                    {errors.category && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> STORE </label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.storeid}</p>
                                        ) : (

                                            <select
                                            {...register('storeid')}
                                            // value={recruitModel.store}
                                            // onChange={handleChange}
                                            name="storeid"
                                            id="store"
                                            className={`border p-[10px] lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.storeid && 'border-red-500'}`}
                                          >
                                            <option value="">Select Store </option>
                                            {allstores?.map((store) => (
                                              <option key={store._id} value={store._id}>{store.storeName}</option>
                                            ))}
                                          </select>
                                        )}
                                    {errors.category && <span className='text-red-500'>This field is required</span>}
                                </div>

                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> SUB CATEGORY</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.subCategory}</p>
                                        ) : (

                                            <input  {...register("subCategory", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.subCategory ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.subCategory && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> PRODUCT LINK </label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.productLink}</p>
                                        ) : (

                                            <input  {...register("productLink", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.productLink ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.productLink && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description"> PRICE</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.price}</p>
                                        ) : (

                                            <input  {...register("price", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.price ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.price && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">FIRST IMAGE</label>
                            {mode === "view" ?
                                (

                                    <img src={data?.pictureLink1} className="w-44  " alt="image_logo" />

                                ) : (
                                    <>
                                        <label htmlFor='logo'>
                                            {image1 ?
                                                <img src={image1} className="w-44"  alt="image_logo" />
                                                :
                                                <img src={data?.pictureLink1} className="w-44  " alt="image_logo" />
                                            }
                                        </label>

                                        <input id="logo" onChange={handleFile} type="file" name="file1" className='hidden pointer' />
                                    </>
                                )}
                            {errors.pictureLink1 && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-4 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">SECOND IMAGE</label>
                            {mode === "view" ?
                                (

                                    <img src={data?.pictureLink2} className="w-44  " alt="image_logo" />

                                ) : (
                                    <>
                                        <label htmlFor='logo'>
                                            {image2 ?
                                                <img src={image2} className="w-44" alt="image_logo" />
                                                :
                                                <img src={data?.pictureLink2} className="w-44  " alt="image_logo" />
                                            }
                                        </label>

                                        <input id="logo" onChange={handleFile} type="file" name="file2" className='hidden pointer' />
                                    </>
                                )}
                            {errors.pictureLink2 && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-4 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">THIRD IMAGE</label>
                            {mode === "view" ?
                                (

                                    <img src={data?.pictureLink3} className="w-44  " alt="image_logo" />

                                ) : (
                                    <>
                                        <label htmlFor='logo'>
                                            {image3 ?
                                                <img src={image3} className="w-44" alt="image_logo" />
                                                :
                                                <img src={data?.pictureLink3} className="w-44  " alt="image_logo" />
                                            }
                                        </label>

                                        <input id="logo" onChange={handleFile} type="file" name="file3" className='hidden pointer' />
                                    </>
                                )}
                            {errors.pictureLink3 && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-4 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">FORTH IMAGE</label>
                            {mode === "view" ?
                                (

                                    <img src={data?.pictureLink4} className="w-44  " alt="image_logo" />

                                ) : (
                                    <>
                                        <label htmlFor='logo'>
                                            {image4 ?
                                                <img src={image4} className="w-44" alt="image_logo" />
                                                :
                                                <img src={data?.pictureLink4} className="w-44  " alt="image_logo" />
                                            }
                                        </label>

                                        <input id="logo" onChange={handleFile} type="file" name="file4" className='hidden pointer' />
                                    </>
                                )}
                            {errors.pictureLink4 && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-4 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">FIFTH IMAGE</label>
                            {mode === "view" ?
                                (

                                    <img src={data?.pictureLink5} className="w-44  " alt="image_logo" />

                                ) : (
                                    <>
                                        <label htmlFor='logo'>
                                            {image5 ?
                                                <img src={image5} className="w-44" alt="image_logo" />
                                                :
                                                <img src={data?.pictureLink5} className="w-44  " alt="image_logo" />
                                            }
                                        </label>

                                        <input id="logo" onChange={handleFile} type="file" name="file5" className='hidden pointer' />
                                    </>
                                )}
                            {errors.pictureLink5 && <span className='text-red-500'>This field is required</span>}
                        </div>

                                {
                                    mode !== "view" ? (
                                        <div className='col-lg-12'>
                                            <button type='submit' className="p-2 bg-red-500 hover:bg-green-600 text-white" >Update Product</button>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </Transition>
        </>
    )
}

export default ViewEditInspire