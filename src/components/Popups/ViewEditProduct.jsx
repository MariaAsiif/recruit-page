import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Transition from '../../utils/Transition';
import { Country, State, City } from 'country-state-city';
import moment from 'moment';
import { callApi } from '../../utils/CallApi';
import PhoneInput from 'react-phone-input-2';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
const schema = yup.object({
  productTitle: yup.string().required(),
  productCategories: yup.string().required(),
  brand: yup.string().optional(),
  third_family_name: yup.string().optional(),
  email: yup.string().email('Invalid email format').required(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),
});



const ViewEditProduct = (props) => {
  const [tags, setTags] = useState([])


  const handleAreaofInterest = (tags) => {
    setTags(tags)
  }
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onChange ', resolver: yupResolver(schema) });

  const [isActive, setIsActive] = useState(true);
  const [approved, setApproved] = useState(true);
  const [verified, setVerified] = useState(true);
  const [roles, setallroles] = useState([]);
  const [role, setRole] = useState('');
  const [error, setError] = useState({
    userError: '',
    roleError: '',
  });

  // ROle Handler
  const [all_Countries, setall_Countries] = useState([]);
  const [all_States, setall_States] = useState([]);
  const [all_Cities, setall_Cities] = useState([]);
  const [countryCode, setCountryCode] = useState('');
  const modalContent = useRef(null);

  const [recruitModel, setrecruitModel] = useState({
    surname: 'Mr',
    fullname: '',
    first_family_name: '',
    second_family_name: '',
    third_family_name: '',
    email: '',
    reEmail: '',
    country: props.data.Country,
    state: props.data.state,
    city: props.data.city,
    industry: '',
    position: '',
    mobile: '',
    age: '',
  });


  const [location, setlocation] = useState("")


  const handleIsActive = () => setIsActive(!isActive);
  const handleApproved = () => setApproved(!approved);
  const handleVerified = () => setVerified(!verified);

  // ROle Set
  const handleChangeRole = (e) => {
    let findRole = roles.find((f) => f._id === e.target.value);
    setRole(findRole._id);
  };

  const handleChangeCountry = (e) => {
    let { value } = e.target;
    let countryCode = all_Countries.find(
      (country) => country.name === value
    ).isoCode;
    const updatedStates = State.getStatesOfCountry(countryCode);
    setCountryCode(countryCode);
    setall_States(updatedStates);
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      country: value,
    }));
  };

  const handleChangeState = (e) => {
    let { value } = e.target;
    let stateCode = all_States.find((state) => state.name === value).isoCode;
    const updatedCities = City.getCitiesOfState(
      countryCode.toUpperCase(),
      stateCode
    );
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      state: value,
    }));
    setall_Cities(updatedCities);
  };

  const handleChangeCity = (e) => {
    let { value } = e.target;
    let latitudeCode = all_Cities.find((city) => city.name === value).latitude;
    let longitudeCode = all_Cities.find((city) => city.name === value).longitude;
    let locationCoordinates = {
      type: "Point",
      coordinates: [
        latitudeCode,
        longitudeCode
      ]
    }
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      city: value,
    }));
    setlocation(locationCoordinates)

  };

  const onSubmit = async (values) => {
    const { created_at } = values;
    const formattedDate = moment(created_at).format('YYYY-MM-DD');
    const payload = {
      ...values,
      country: recruitModel.country,
      state: recruitModel.state,
      city: recruitModel.city,
      created_at: formattedDate,
      location: location
    };
    try {
      let response = await callApi('/users/updateuser', 'post', payload);
      if (response.status === 'Success') {
        console.log(`response message ========`, response.message);
        toast.success(`User updated successfully`);
        props.onClose();
      } else {
        console.log(`Error reponse message ========`, response.message);
        toast.error(response.message);
      }
    } catch (error) {
      console.log(`error ============`, error);
    }
  };

  useEffect(() => {
    reset(props.data);
  }, [props.data, reset]);

  // Geo

  useEffect(() => {
    console.log("run run ")
    try {
      const fetchData = async () => {
        const response = await axios(
          'https://api.ipregistry.co/?key=m7irmmf8ey12rx7o'
        );
        const currentCountryCode = response.data.location.country.code;
        let id = response.data.location.country.tld;
        let removeDot = id.replace('.', '');
        setCountryCode(removeDot);
        const get_countris = Country.getAllCountries();
        const CurrentStates = State.getStatesOfCountry(currentCountryCode);
        const CurrentCities = City.getCitiesOfState(
          currentCountryCode,
          CurrentStates[0].isoCode
        );
        setall_Countries(get_countris);
        setall_States(CurrentStates);
        setall_Cities(CurrentCities);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // ROle Set
  useEffect(() => {
    (async () => {
      try {
        const roles = {
          sortproperty: 'createdAt',
          sortorder: -1,
          offset: 0,
          limit: 50,
          query: {
            critarion: { active: true },
            fields: '_id roleName',
          },
        };

        const resRole = await callApi('/roles/getRolesList', 'post', roles);
        setallroles(resRole.data.roles);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
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
      {/* Modal backdrop */}
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={props.modalOpen}
        enter='transition ease-out duration-200'
        enterStart='opacity-0'
        enterEnd='opacity-100'
        leave='transition ease-out duration-100'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
        aria-hidden='true'
      />
      {/* Modal dialog */}
      <Transition
        id={props.id}
        className='fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6'
        role='dialog'
        aria-modal='true'
        show={props.modalOpen}
        enter='transition ease-in-out duration-200'
        enterStart='opacity-0 translate-y-4'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-in-out duration-200'
        leaveStart='opacity-100 translate-y-0'
        leaveEnd='opacity-0 translate-y-4'
      >
        <div
          ref={modalContent}
          className='bg-white rounded shadow-lg overflow-auto w-3/4 h-2/3'
        >
          {/* Modal header */}
          <div className='px-5 py-3 border-b border-slate-200'>
            <div className='flex justify-between items-center'>
              <div className='font-semibold text-slate-800'>{props.mode === "view" ? "View Product" : "Edit Product"}</div>
              <button
                className='text-slate-400 hover:text-slate-500'
                onClick={props.onClose}
              >
                <div className='sr-only'>Close</div>
                <svg className='w-4 h-4 fill-current'>
                  <path d='M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='bscontainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row p-5'>
                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Product Title
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.productTitle}</p>
                  ) : (
                    <input
                      {...register('productTitle', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.productTitle
                        ? 'border-red-500'
                        : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.productTitle && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Category
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.productCategories}</p>
                  ) : (
                    <select
                      {...register('productCategories')}
                      // value={recruitModel.productCategories}
                      // onChange={handleChange}
                      name="productCategories"
                      id="productCategories"
                      className={`border p-[10px] lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.productCategories && 'border-red-500'}`}
                    >
                      <option value="">Select Category </option>
                      {/* {
                        allcatagories.map((cat, index) => (
                          <option key={index} value={cat._id}>{cat.productCategoryTitle}</option>
                        ))
                      } */}
                    </select>
                  )}
                  {errors.productCategories && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='created_at'
                  >
                    Show In Store Front
                  </label>
                  {props.mode === 'view' ? (
                    <p> {approved ? 'Approved' : 'DisApproved'}</p>
                  ) : (
                    <div className='flex items-center'>

                      <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                          id="default-toggle" className="sr-only peer"
                          checked={approved}
                          onChange={handleApproved}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <div className='text-sm text-slate-400 italic ml-2'>
                          {approved ? 'Approved' : 'DisApproved'}
                        </div>
                      </label>



                    </div>
                  )}
                  {errors.approved && (
                    <span className='text-red-500'>
                      This field is required
                    </span>
                  )}
                </div>



                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Tages
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.first_family_name}</p>
                  ) : (
                    <TagsInput
                      maxTags={5}
                      className={"custom-react-tagsinput"}
                      inputProps={{
                        className: 'custom-react-tagsinput-input',
                        placeholder: 'Tages'
                      }}
                      value={tags}
                      onChange={handleAreaofInterest} />
                  )}
                  {errors.first_family_name && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Brand
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.brand}</p>
                  ) : (
                    <input
                      {...register('brand', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.brand
                        ? 'border-red-500'
                        : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.brand && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='created_at'
                  >
                    Is Return Able
                  </label>
                  {props.mode === 'view' ? (
                    <p> {approved ? 'Approved' : 'DisApproved'}</p>
                  ) : (
                    <div className='flex items-center'>

                      <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                          id="default-toggle" className="sr-only peer"
                          checked={approved}
                          onChange={handleApproved}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <div className='text-sm text-slate-400 italic ml-2'>
                          {approved ? 'Approved' : 'DisApproved'}
                        </div>
                      </label>



                    </div>
                  )}
                  {errors.approved && (
                    <span className='text-red-500'>
                      This field is required
                    </span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='created_at'
                  >
                    Is Featured
                  </label>
                  {props.mode === 'view' ? (
                    <p> {approved ? 'Approved' : 'DisApproved'}</p>
                  ) : (
                    <div className='flex items-center'>

                      <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                          id="default-toggle" className="sr-only peer"
                          checked={approved}
                          onChange={handleApproved}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <div className='text-sm text-slate-400 italic ml-2'>
                          {approved ? 'Approved' : 'DisApproved'}
                        </div>
                      </label>



                    </div>
                  )}
                  {errors.approved && (
                    <span className='text-red-500'>
                      This field is required
                    </span>
                  )}
                </div>



                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Rate
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.rate}</p>
                  ) : (
                    <input
                      {...register('rate', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.rate
                        ? 'border-red-500'
                        : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.rate && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Initail Stock
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.initialStock}</p>
                  ) : (
                    <input
                      {...register('initialStock', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.initialStock ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.initialStock && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Low Stock Limit
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.initialStock}</p>
                  ) : (
                    <input
                      {...register('initialStock', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.initialStock ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.initialStock && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Height
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.height}</p>
                  ) : (
                    <input
                      {...register('height', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.height ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.height && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Weight
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.weight}</p>
                  ) : (
                    <input
                      {...register('weight', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.weight ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.weight && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Width
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.width}</p>
                  ) : (
                    <input
                      {...register('width', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.width ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.width && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    sku
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.mpn}</p>
                  ) : (
                    <input
                      {...register('length', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.length ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.length && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    SKU
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.sku}</p>
                  ) : (
                    <input
                      {...register('sku', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.sku ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.sku && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    EAN
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.ean}</p>
                  ) : (
                    <input
                      {...register('ean', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.ean ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.ean && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    UPC
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.upc}</p>
                  ) : (
                    <input
                      {...register('upc', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.upc ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.upc && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    MPN
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.mpn}</p>
                  ) : (
                    <input
                      {...register('mpn', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.mpn ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.mpn && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    ISBN
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.isbn}</p>
                  ) : (
                    <input
                      {...register('isbn', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.isbn ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.isbn && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Sale Price
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.saleprice}</p>
                  ) : (
                    <input
                      {...register('saleprice', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.saleprice ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.saleprice && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='created_at'
                  >
                    Is On Sale
                  </label>
                  {props.mode === 'view' ? (
                    <p> {approved ? 'Approved' : 'DisApproved'}</p>
                  ) : (
                    <div className='flex items-center'>

                      <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                          id="default-toggle" className="sr-only peer"
                          checked={approved}
                          onChange={handleApproved}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <div className='text-sm text-slate-400 italic ml-2'>
                          {approved ? 'Approved' : 'DisApproved'}
                        </div>
                      </label>



                    </div>
                  )}
                  {errors.approved && (
                    <span className='text-red-500'>
                      This field is required
                    </span>
                  )}
                </div>
                <div className='col-lg-2 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='created_at'
                  >
                    Active/DeActive
                  </label>
                  {props.mode === 'view' ? (
                    <p> {approved ? 'Approved' : 'DisApproved'}</p>
                  ) : (
                    <div className='flex items-center'>

                      <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                          id="default-toggle" className="sr-only peer"
                          checked={approved}
                          onChange={handleApproved}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <div className='text-sm text-slate-400 italic ml-2'>
                          {approved ? 'Approved' : 'DisApproved'}
                        </div>
                      </label>



                    </div>
                  )}
                  {errors.approved && (
                    <span className='text-red-500'>
                      This field is required
                    </span>
                  )}
                </div>

                <div className='col-lg-6 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Store
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.store}</p>
                  ) : (
                    <select
                      {...register('store', { required: true })}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.store ? 'border-red-500' : 'border-green-500'
                        }`}
                    >
                      <option>Slect Store</option>
                    </select>
                  )}
                  {errors.store && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>

                <div className='col-lg-6 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Image
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.productImagesURLs}</p>
                  ) : (
                    <input
                      {...register('productImagesURLs', { required: true })}
                      type="file"
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.productImagesURLs ? 'border-red-500' : 'border-green-500'
                        }`}
                    />
                  )}
                  {errors.productImagesURLs && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>
                <div className='col-lg-12 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Product Description
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props.data.productDescritpion}</p>
                  ) : (

                    <textarea
                      {...register('productDescritpion')}
                      autoComplete='off'
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.desc && 'border-red-500'
                        }`}
                      name='productDescritpion'
                      id='desc'
                      placeholder='Description'
                      cols='20'
                    ></textarea>
                    // <teatarea
                    //   {...register('productDescritpion', { required: true })}
                    //   cols='20'
                    //   className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.productDescritpion ? 'border-red-500' : 'border-green-500'
                    //     }`}
                    // ></teatarea>
                  )}
                  {errors.productDescritpion && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div>





                {props.mode !== 'view' ? (
                  <div className='col-lg-12'>
                    <button
                      type='submit'
                      className='p-2 bg-red-500 hover:bg-green-600 text-white'
                    >
                      Update User
                    </button>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default ViewEditProduct;
