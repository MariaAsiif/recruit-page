import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../../utils/CallApi';
import { Link } from 'react-router-dom';
import 'react-tagsinput/react-tagsinput.css'
const schema = yup.object({
  name: yup.string().required('Product Name is Required'),
  title: yup.string().required('Title is Required'),
  brand: yup.string().required('Sub Category is Required'),
  // category: yup.string().required('Category is Required'),
  rate: yup.string().required('Price is Required'),
  initialStock: yup.string().required('Product Link  is Required'),
  desc: yup.string().required('Description is Required'),
  store: yup.string().required('Store is Required'),
  // image: yup.mixed().test("required", 'Image is Required', value => {
  //   return value && value.length
  // })
});
const CreateProduct = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [allcatagories, setallcatagories] = useState([])
  const [allstores, setallIStores] = useState([])
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const handleFile = async (e) => {


    let file = e.target.files[0]
    let name = e.target.name
    const formData = new FormData()
    formData.append('file', file)
    let res = await callApi('/uploads/uploadProductImgs', "post", formData)
    if (res) {
      console.log("Res", res)
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



  const onSubmit = async (data) => {
    let payload = {
      "storeid": data.store,
      "nameofProduct": data.name,
      "category": data.category || "shoe",
      "subCategory": data.brand,
      "productLink": data.initialStock,
      "titleofProduct": data.title,
      "price": data.rate,
      "description": data.desc,
      "pictureLink1": image1,
      "pictureLink2": image2,
      "pictureLink3": image3,
      "pictureLink4": image4,
      "pictureLink5": image5,
    }

    const res = await callApi('/productsOfStore/createProductsOfStore', 'post', payload);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }

  };

  useEffect(() => {
    (async () => {
      try {
        let payload = {
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

  return (
    <div className='bscontainer-fluid'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row p-11'>
          <div className='col-12 mb-6'>
            <div className='mb-3'>
              <ul className='inline-flex flex-wrap text-sm font-medium'>
                <li className='flex items-center'>
                  <Link
                    to='/dashboard'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Dashboard{' '}
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>
                  <Link
                    to='/ecome/products'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Products
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>

                  Create Product
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Product</h2>
            </header>
          </div>



          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Product Name
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('name') ? (
                <FcCheckmark />
              ) : errors.name ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('name')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              type='text'
              placeholder='Product Name'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>


          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='title'>
              Product Title
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.title && watch('title') ? (
                <FcCheckmark />
              ) : errors.title ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('title')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.title && 'border-red-400'
                }`}
              name='title'
              id='title'
              type='text'
              placeholder='Product Title'
            />
            <span
              hidden={watch('title')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[130px]'
            >
              *
            </span>

            {errors.title && (
              <p className='text-red-500 text-sm'>{errors.title.message}</p>
            )}
          </div>


          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Category </label>
            <div className='absolute right-10 top-9'>
              {!errors.category ? <FcCheckmark /> : errors.category ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
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
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>




          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Sub Category </label>
            <div className='absolute right-10 top-9'>
              {!errors.brand && watch('brand') ? <FcCheckmark /> : errors.brand ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <input
              {...register('brand')}
              type="text"
              name="brand"
              placeholder='Sub Category'
              className={`border p-[10px] lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.brand && 'border-red-500'}`}
            />

            <span
              hidden={watch('brand')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[140px]'
            >
              *
            </span>
            {errors.brand && (
              <p className="text-red-500 text-sm">{errors.brand.message}</p>
            )}
          </div>



          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Rate
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.rate && watch('rate') ? (
                <FcCheckmark />
              ) : errors.rate ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('rate')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.rate && 'border-red-400'
                }`}
              name='rate'
              id='rate'
              type='text'
              placeholder='Rate'
            />
            <span
              hidden={watch('rate')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span>

            {errors.rate && (
              <p className='text-red-500 text-sm'>{errors.rate.message}</p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Product Link
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.initialStock && watch('initialStock') ? (
                <FcCheckmark />
              ) : errors.initialStock ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('initialStock')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.initialStock && 'border-red-400'
                }`}
              name='initialStock'
              id='initialStock'
              type='text'
              placeholder='Product Link'
            />
            <span
              hidden={watch('initialStock')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[130px]'
            >
              *
            </span>

            {errors.initialStock && (
              <p className='text-red-500 text-sm'>{errors.initialStock.message}</p>
            )}
          </div>





          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Store</label>
            <div className='absolute right-10 top-9'>
              {!errors.store ? <FcCheckmark /> : errors.store ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <select
              {...register('store')}
              // value={recruitModel.store}
              // onChange={handleChange}
              name="store"
              id="store"
              className={`border p-[10px] lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.store && 'border-red-500'}`}
            >
              <option value="">Select Store </option>
              {allstores?.map((store) => (
                <option key={store._id} value={store._id}>{store.storeName}</option>
              ))}
            </select>
            {errors.store && (
              <p className="text-red-500 text-sm">{errors.store.message}</p>
            )}
          </div>


          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Image One</label>
            <div className={`border p-1  focus:outline-blue-500 rounded-sm w-full   ${errors.image && 'border-red-500'}`}
            >
              <input type="file" onChange={(e) => handleFile(e)} name="file1" />
            </div >
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Image Two</label>
            <div className={`border p-1  focus:outline-blue-500 rounded-sm w-full   ${errors.image && 'border-red-500'}`}
            >
              <input type="file" onChange={(e) => handleFile(e)} name="file2" />
            </div >
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Image Three</label>
            <div className={`border p-1  focus:outline-blue-500 rounded-sm w-full   ${errors.image && 'border-red-500'}`}
            >
              <input type="file" onChange={(e) => handleFile(e)} name="file3" />
            </div >
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Image Forth</label>
            <div className={`border p-1  focus:outline-blue-500 rounded-sm w-full   ${errors.image && 'border-red-500'}`}
            >
              <input type="file" onChange={(e) => handleFile(e)} name="file4" />
            </div >
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Image Five</label>
            <div className={`border p-1  focus:outline-blue-500 rounded-sm w-full   ${errors.image && 'border-red-500'}`}
            >
              <input type="file" onChange={(e) => handleFile(e)} name="file5" />
            </div >
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Product Description
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.desc && watch('desc') ? (
                <FcCheckmark />
              ) : errors.desc ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('desc')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.desc && 'border-red-500'
                }`}
              name='desc'
              id='desc'
              placeholder='Description'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.desc && (
              <p className='text-red-500 text-sm'>{errors.desc.message}</p>
            )}
          </div>

          <div className='col-lg-12'>
            <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
