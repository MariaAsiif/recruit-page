import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../../utils/CallApi';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
const schema = yup.object({
  name: yup.string().required('Category Name is Required'),
  brand: yup.string().required('Brand is Required'),
  // ssn: yup.string().required('Ssn is Required'),
  category: yup.string().required('Category is Required'),
  rate: yup.string().required('Rate is Required'),
  initialStock: yup.string().required('initialStock is Required'),
  lowStockLimit: yup.string().required('lowStockLimit is Required'),
  height: yup.string().required('height is Required'),
  weight: yup.string().required('weight is Required'),
  width: yup.string().required('width is Required'),
  lengh: yup.string().required('length is Required'),
  sku: yup.string().required('sku is Required'),
  ean: yup.string().required('ean is Required'),
  upc: yup.string().required('upc is Required'),
  mpn: yup.string().required('mpn is Required'),
  isbn: yup.string().required('isbn is Required'),
  salePrice: yup.string().required('salePrice is Required'),
  desc: yup.string().required('Description is Required'),
  store: yup.string().required('Store is Required'),
  image: yup.mixed().test("required" ,'Image is Required' , value => {
    return value && value.length
  } )
});
const CreateProduct = () => {
  const [tags, setTags] = useState([])
  const [showInStoreFront, setshowInStoreFront] = useState(true);
  const [isReturnable, setisReturnable] = useState(true);
  const [isFeatured, setisFeatured] = useState(true);
  const [isOnSale, setisOnSale] = useState(true);
  const [active, setactive] = useState(true);
  const [image, setImage] = useState("");
  const [tagError, setTagError] = useState("");
  const [allcatagories, setallcatagories] = useState([])
  const [allstores , setallIStores ] = useState([])
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const handleAreaofInterest = (tags) => {
    if (tags?.length > 0) {
      setTags(tags)
    }
    else {
      setTagError("Tags is Required")
    }
  }

  console.log("tagerror", tagError)

  const onSubmit = async (data) => {


    let value = {
      productTitle: data.name,
      productCategories: data.category,
      productDescritpion: data.desc,
      showInStoreFront: showInStoreFront,
      tags: tags,
      brand: data.brand,
      isReturnable: isReturnable,
      isFeatured: isFeatured,
      rate: data.rate,
      initialStock: data.initialStock,
      lowStockLimit: data.lowStockLimit,
      packageDetails: {
        "height": `${data.height}cm`,
        "weight": `${data.weight}kg`,
        "width": `${data.width}cm`,
        "length": `${data.lengh}cm`
      },
      sku: data.sku,
      ean: data.ean,
      upc: data.upc,
      mpn: data.mpn,
      isbn: data.isbn,
      productImagesURLs: data.image[0],
      salePrice: data.salePrice,
      isOnSale: isOnSale,
      active: active,
      store: "632da8fd612c3f4220c623b5"
    }
    if (tags?.length > 0) {
      const res = await callApi('/products/createProduct', 'post', value);
      if (res.status === 'Success') {
        toast.success(res.message);
        reset();
      } else {
        toast.error(res.message);
      }
    }
    else {
      setTagError("Tags is Required")
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const payload = {
          sortproperty: "created_at",
          sortorder: -1,
          offset: 0,
          limit: 50,
          query: {
            critarion: { active: true, "quoteColor": "Red" },
            addedby: "_id email first_name",
            lastModifiedBy: "_id email first_name"
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
        setallcatagories(responseCata.data.categories)
        const responseStore = await callApi("/stores/getStoresWithFullDetails", "post", payloadStore)
        setallIStores(responseStore.data.stores)
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
              Product Title
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
              placeholder='Product Title'
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
                allcatagories.map((cat, index) => (
                  <option key={index} value={cat._id}>{cat.productCategoryTitle}</option>
                ))
              }
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Show In Store Front
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={showInStoreFront}
                    onChange={() => setshowInStoreFront(!showInStoreFront)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {showInStoreFront ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Tages </label>
            <div className={`border ${tags?.length > 0 ? 'p-1' : 'p-[10px]'}`}>

              <TagsInput
                maxTags={5}
                className={"custom-react-tagsinput"}
                inputProps={{
                  className: 'custom-react-tagsinput-input',
                  placeholder: 'add a tag'
                }}
                value={tags}
                onChange={handleAreaofInterest}
              />
            </div>

          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Brand </label>
            <div className='absolute right-10 top-9'>
              {!errors.brand && watch('brand') ? <FcCheckmark /> : errors.brand ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <input
              {...register('brand')}
              type="text"
              name="brand"
              placeholder='Brand'
              className={`border p-[10px] lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.brand && 'border-red-500'}`}
            />

            {errors.brand && (
              <p className="text-red-500 text-sm">{errors.brand.message}</p>
            )}
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Is Return Able
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={isReturnable}
                    onChange={() => setisReturnable(!isReturnable)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {isReturnable ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Is Featured
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={isFeatured}
                    onChange={() => setisFeatured(!isFeatured)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {isFeatured ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
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

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.rate.message}</p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Initial Stock
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
              type='number'
              placeholder='Initial Stock'
            />
            {/* <span
              hidden={watch('initialStock')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.lowStockLimit && (
              <p className='text-red-500 text-sm'>{errors.lowStockLimit.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Low Stock Limit
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.lowStockLimit && watch('lowStockLimit') ? (
                <FcCheckmark />
              ) : errors.lowStockLimit ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('lowStockLimit')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.lowStockLimit && 'border-red-400'
                }`}
              name='lowStockLimit'
              id='lowStockLimit'
              type='number'
              placeholder='Low Stock Limit'
            />
            {/* <span
              hidden={watch('lowStockLimit')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.lowStockLimit && (
              <p className='text-red-500 text-sm'>{errors.lowStockLimit.message}</p>
            )}
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Height
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.height && watch('height') ? (
                <FcCheckmark />
              ) : errors.height ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('height')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.height && 'border-red-400'
                }`}
              name='height'
              id='height'
              type='number'
              placeholder='Height'
            />
            {/* <span
              hidden={watch('height')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.height && (
              <p className='text-red-500 text-sm'>{errors.height.message}</p>
            )}
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Weight
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.weight && watch('weight') ? (
                <FcCheckmark />
              ) : errors.weight ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('weight')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.weight && 'border-red-400'
                }`}
              name='weight'
              id='weight'
              type='number'
              placeholder='Weight'
            />
            {/* <span
              hidden={watch('weight')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.weight && (
              <p className='text-red-500 text-sm'>{errors.weight.message}</p>
            )}
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Width
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.width && watch('width') ? (
                <FcCheckmark />
              ) : errors.width ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('width')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.width && 'border-red-400'
                }`}
              name='width'
              id='width'
              type='number'
              placeholder='Width'
            />
            {/* <span
              hidden={watch('width')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.width && (
              <p className='text-red-500 text-sm'>{errors.width.message}</p>
            )}
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Length
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.lengh && watch('lengh') ? (
                <FcCheckmark />
              ) : errors.lengh ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('lengh')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.lengh && 'border-red-400'
                }`}
              name='lengh'
              id='lengh'
              type='number'
              placeholder='Length'
            />
            {/* <span
              hidden={watch('lengh')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.lengh && (
              <p className='text-red-500 text-sm'>{errors.lengh.message}</p>
            )}
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              SKU
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.sku && watch('sku') ? (
                <FcCheckmark />
              ) : errors.sku ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('sku')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.sku && 'border-red-400'
                }`}
              name='sku'
              id='sku'
              type='number'
              placeholder='Sku'
            />
            {/* <span
              hidden={watch('sku')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.sku && (
              <p className='text-red-500 text-sm'>{errors.sku.message}</p>
            )}
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              EAN
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.ean && watch('ean') ? (
                <FcCheckmark />
              ) : errors.ean ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('ean')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.ean && 'border-red-400'
                }`}
              name='ean'
              id='ean'
              type='number'
              placeholder='Ean'
            />
            {/* <span
              hidden={watch('sku')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.ean && (
              <p className='text-red-500 text-sm'>{errors.ean.message}</p>
            )}
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              UPC
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.upc && watch('upc') ? (
                <FcCheckmark />
              ) : errors.upc ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('upc')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.upc && 'border-red-400'
                }`}
              name='upc'
              id='upc'
              type='number'
              placeholder='upc'
            />
            {/* <span
              hidden={watch('upc')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.upc && (
              <p className='text-red-500 text-sm'>{errors.upc.message}</p>
            )}
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              MPN
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.mpn && watch('mpn') ? (
                <FcCheckmark />
              ) : errors.mpn ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('mpn')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.mpn && 'border-red-400'
                }`}
              name='mpn'
              id='mpn'
              type='number'
              placeholder='mpn'
            />
            {/* <span
              hidden={watch('mpn')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.mpn && (
              <p className='text-red-500 text-sm'>{errors.mpn.message}</p>
            )}
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              ISBN
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.isbn && watch('isbn') ? (
                <FcCheckmark />
              ) : errors.isbn ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('isbn')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.isbn && 'border-red-400'
                }`}
              name='isbn'
              id='isbn'
              type='number'
              placeholder='isbn'
            />
            {/* <span
              hidden={watch('isbn')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.isbn && (
              <p className='text-red-500 text-sm'>{errors.isbn.message}</p>
            )}
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Sale Price
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.salePrice && watch('salePrice') ? (
                <FcCheckmark />
              ) : errors.salePrice ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('salePrice')}
              autoComplete='off'
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.salePrice && 'border-red-400'
                }`}
              name='salePrice'
              id='salePrice'
              type='number'
              placeholder='salePrice'
            />
            {/* <span
              hidden={watch('salePrice')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[60px]'
            >
              *
            </span> */}

            {errors.salePrice && (
              <p className='text-red-500 text-sm'>{errors.salePrice.message}</p>
            )}
          </div>



          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Is On Sale
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={isOnSale}
                    onChange={() => setisOnSale(!isOnSale)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {isOnSale ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Active/DeActive
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={active}
                    onChange={() => setactive(!active)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {active ? 'Active' : 'DeActive'}
                  </div>
                </label>



              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-4 relative'>
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
              {allstores.map((store ) =>(
                <option key={store._id} value={store._id}>{store.storeName}</option>
              ))}
            </select>
            {errors.store && (
              <p className="text-red-500 text-sm">{errors.store.message}</p>
            )}
          </div>


          <div className='col-lg-6 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Image</label>
            <div className={`border p-1  focus:outline-blue-500 rounded-sm w-full   ${errors.image && 'border-red-500'}`}
>
              <input type="file" {...register('image')} name="image" />
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
