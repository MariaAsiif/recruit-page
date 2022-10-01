import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/hporx_logo.png";
import AuthImage from "../images/signin.jpg";
import AuthDecoration from "../images/auth-decoration.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Country, State, City } from "country-state-city";
import * as yup from "yup";
import { callApi } from "../utils/CallApi";
import { FcCheckmark } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import PhoneInput from "react-phone-input-2";


const schema = yup.object({
  first_name: yup.string().required(),
  first_family_name: yup.string().required(),
  second_family_name: yup.string().optional(),
  third_family_name: yup.string().optional(),
  email: yup.string().email("Invalid email format").required(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),
});

function Signup() {
  let navigate = useNavigate();
  const [formdata, setformdata] = useState({
    first_name: "",
    first_family_name: "",
    second_family_name: "",
    third_family_name: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    is_verified: false,
    approved: false,
    active: true,
    roles: "",
    location: ""
    // latitude:"",
    // longitude:""
  });

  // console.warn("Here is the final ",formdata.latitude)
  const [all_Countries, setall_Countries] = useState([]);
  const [all_States, setall_States] = useState([]);
  const [all_Cities, setall_Cities] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [roles, setallroles] = useState([]);

  // option 1
  // const [latitude, setlatitude] = useState("");
  // const [longitude, setlongitude] = useState("");

  // const location = {
  //   "type": "Points",
  //   "coordinates": [
  //     latitude,
  //     longitude
  //   ]
  // }

  // option 2
  const [location, setlocation] = useState("")
  // console.warn("location ==========", location)

  // console.warn("location", location)

  // const [location, setLocation] = useState({
  //   type: "Point",
  //   coordinates: cordinates,
  // });
  // console.warn(location)



  const [roleId, setRoleId] = useState("");
  const [roleName, setRoleName] = useState();
  const [error, setError] = useState({
    userError: "",
    roleError: "",
  });
  //   "location": {
  //     "type": "Point",
  //     "coordinates": [
  //         74.28911285869138,
  //         31.624888273644956
  //     ]
  // }

  // const [first, setfirst] = useState(latitude)


  const filteredRole = roles.filter((i) => { return i.roleName !== "superadmin" })


  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });


  const handleChangeRole = (e) => {
    let findRole = roles.find((f) => f._id === e.target.value);
    setRoleId(findRole._id);
    setRoleName(findRole.roleName);
  };

  const handleChangeCountry = (e) => {
    let { value } = e.target;
    // console.log("value ", value);
    let countryCode = all_Countries.find(
      (country) => country.name === value
    ).isoCode;
    const updatedStates = State.getStatesOfCountry(countryCode);
    setCountryCode(countryCode);
    setall_States(updatedStates);
    setformdata((prevmodel) => ({
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
    setformdata((prevmodel) => ({
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

    // console.warn(latitudeCode)
    // console.warn(longitudeCode)

    setformdata((prevmodel) => ({
      ...prevmodel,
      city: value,
      // latitude:latitudeCode,
      // longitude:longitudeCode,
      // latitude:
    }));
    // setlongitude(longitudeCode)
    // setlatitude(latitudeCode)
    setlocation(locationCoordinates)



  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (
      name === "first_family_name" ||
      name === "second_family_name" ||
      name === "third_family_name"
    ) {
      value = e.target.value.toUpperCase().replace(/[^a-z]/gi, "");
      setformdata((prevdata) => ({
        ...prevdata,
        [name]: value,
      }));
    } else {
      setformdata((prevdata) => ({
        ...prevdata,
        [name]: value,
      }));
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      active: true,
      approved: false,
      is_verified: false,
      country: formdata.country,
      state: formdata.state,
      city: formdata.city,
      roles: roleName,
      location: location,
    };
    // console.warn(newData)

    console.log(`Final =====`, newData);
    try {
      if (!newData.roles) {
        toast.warning(`Please Select One Role`);
        return;
      }
      let response = await callApi("/users/signup", "post", newData);
      if (response.status === "Success") {
        toast.success(`User signup successfully`);
        setTimeout(() => {
          navigate("/signin");
        }, 5000);
      } else {
        console.log(`Error reponse message ========`, response.message);

        toast.error(response.message);
      }
    } catch (error) {
      console.log(`error ============`, error);
    }
  };



  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios(
          "https://api.ipregistry.co/?key=m7irmmf8ey12rx7o"
        );
        const currentCountryCode = response.data.location.country.code;

        let id = response.data.location.country.tld;
        let removeDot = id.replace(".", "");
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
  useEffect(() => {
    (async () => {
      try {
        const roles = {
          sortproperty: "createdAt",
          sortorder: -1,
          offset: 0,
          limit: 50,
          query: {
            critarion: { active: true },
            fields: "_id roleName",
          },
        };
        const resRole = await callApi("/roles/getRolesList", "post", roles);
        setallroles(resRole.data.roles);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="bg-white">
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
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <img src={logo} alt="Logo" className=" w-36" />
                </Link>
              </div>
            </div>

            <div className="max-w-lg mx-auto px-4 py-4">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Create your Account
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-0">
                  <div className="row">
                    <div className="col-lg-6 mb-1 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Full Name
                        <span className="text-rose-500 absolute left-[95px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <input
                        {...register("first_name")}
                        name="first_name"
                        value={formdata.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        id="first_name"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.first_name && "border-red-500"
                          }`}
                        type="text"
                      />

                      {errors.first_name && (
                        <p className="text-red-500 text-sm ">
                          {`first name is a required`}
                        </p>
                      )}
                      <div className="absolute right-5 top-10">
                        {!errors.first_name ? (
                          <FcCheckmark />
                        ) : errors.first_name ? (
                          <div className=" text-red-500">
                            <MdClose />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4 relative ">
                      <label
                        className="flex items-center text-sm font-medium mb-1"
                        htmlFor="first_family_name"
                      >
                        First Family Name
                        <span className="text-rose-500 absolute right-[95px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <input
                        {...register("first_family_name")}
                        name="first_family_name"
                        value={formdata.first_family_name}
                        onChange={handleChange}
                        placeholder="Family Name"
                        id="first_family_name"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.first_family_name && "border-red-500"
                          }`}
                        type="text"
                      />
                      {errors.first_family_name && (
                        <p className="text-red-500 text-sm">
                          {`first family name is a required`}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="second_family_name"
                      >
                        Second Family Name
                      </label>
                      <input
                        {...register("second_family_name")}
                        name="second_family_name"
                        value={formdata.second_family_name}
                        onChange={handleChange}
                        id="second_family_name"
                        placeholder="Second Family Name"
                        className='border p-2 focus:outline-blue-500 rounded-sm w-full'
                        type="text"
                      />
                      {errors.second_family_name && (
                        <p className="text-red-500 text-sm">
                          {`second family name is a required`}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="third_family_name"
                      >
                        Third Family Name
                      </label>
                      <input
                        {...register("third_family_name")}
                        name="third_family_name"
                        value={formdata.third_family_name}
                        onChange={handleChange}
                        id="third_family_name"
                        placeholder="Third Family Name"
                        className='border p-2 focus:outline-blue-500 rounded-sm w-full'
                        type="text"
                      />
                      {errors.third_family_name && (
                        <p className="text-red-500 text-sm">
                          {errors.third_family_name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                        <span className="text-rose-500 absolute left-[60px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <input
                        {...register("email")}
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        id="email"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.email && "border-red-500"
                          }`}
                        placeholder="Email "
                        type="text"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="Password"
                      >
                        Password
                        <span className="text-rose-500 absolute left-[85px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <input
                        {...register("password")}
                        name="password"
                        value={formdata.password}
                        onChange={handleChange}
                        placeholder="Password "
                        id="password"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.password && "border-red-500"
                          }`}
                        type="password"
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="country"
                      >
                        Country
                        <span className="text-rose-500 absolute left-[75px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <select
                        value={formdata.country}
                        onChange={handleChangeCountry}
                        name="country"
                        id="country"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.country && "border-red-500"
                          }`}
                      >
                        <option value="">Select Country </option>
                        {all_Countries.map((country) => (
                          // console.log(`country =======`, country),
                          <option key={country.isoCode}  >{country.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="state"
                      >
                        State
                        <span className="text-rose-500 absolute left-[60px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <select
                        value={formdata.state}
                        onChange={handleChangeState}
                        name="state"
                        id="state"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.state && "border-red-500"
                          }`}
                      >
                        <option value="">Select State </option>
                        {all_States.map((state) => (
                          // console.warn(state),
                          <option key={state.isoCode} >{state.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="city"
                      >
                        City
                        <span className="text-rose-500 absolute left-[50px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <select
                        // {...register('city')}
                        value={formdata.city}

                        onChange={handleChangeCity}
                        name="city"
                        id="city"
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.city && "border-red-500"
                          }`}
                      >
                        <option>Select city </option>
                        {all_Cities.map((city) => {
                          return <option key={city.latitude}  >{city.name}</option>

                        })}
                      </select>
                    </div>
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="phoneNumber"
                      >
                        Phone
                        <span className="text-rose-500 absolute left-[65px] top-[3px] ">
                          *
                        </span>
                      </label>
                      <div className="w-full ">
                        <Controller
                          name="phoneNumber"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <PhoneInput
                              value={value}
                              enableSearch
                              disableSearchIcon
                              country={countryCode}
                              onChange={onChange}
                              placeholder="000 000 000"
                              // countryCodeEditable={false}
                              className={` ${errors.phoneNumber && "error_form"
                                }`}
                              dropdownClass={"custom-dropdown"}
                            />
                          )}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">
                          {`phone number is a required`}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-6 mb-4 relative">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="businessName"
                      >
                        Roles
                        <span className="text-rose-500 absolute left-[60px] top-[3px] ">
                          *
                        </span>
                      </label>

                      <div className="absolute right-5 top-10">
                        {!error.roleError ? (
                          <FcCheckmark className="mr-5" />
                        ) : error.roleError ? (
                          <div className=" text-red-500">
                            <MdClose className="mr-5" />
                          </div>
                        ) : null}
                      </div>
                      <select
                        onChange={handleChangeRole}
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${error.roleError ? "border-red-400" : "border-gray-400"
                          }`}
                      >
                        <option>Select Role</option>

                        {/* {(roles.filter((element)=>{   element.roleName!=="superadmin" &&   <div>   <option key={element._id} value={element._id}>
                            <span>{element.roleName}</span>
                          </option></div>  }))}
                         */}




                        {filteredRole.map((business) => (
                          // console.warn(business.roleName.slice(1))

                          <option key={business._id} value={business._id}>
                            {business.roleName}
                          </option>
                        ))}
                      </select>

                      {error.roleError && (
                        <p className="text-red-500 text-sm">
                          {error.roleError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-6">
                  <button
                    type="submit"
                    className="p-2 bg-red-500 hover:bg-green-600 text-white ml-3 whitespace-nowrap"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account?{" "}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/adminsignin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
          <img
            className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
            src={AuthDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
