import { useState, useEffect } from 'react';
import axios from 'axios';
import { Country, State, City } from 'country-state-city';

const useFormJob = (callback, validate) => {

  const [values, setValues] = useState({
    expiryDate: "",
    job_title: "",
    salary: "",
    description: "",
    jobtype: "",
    jobstatus: "",
    jobclass: "",
    employer: "",
    job_image_url: "/uploads/dp/default.png",
    jobCategory: ["62fa17bbdd8f3425747ee221", "62fa188bdd8f3425747ee222"],
    physicalLocation: {
      country: "Lahore",
      state: "Lahore",
      province: "Lahore",
      city: "Lahore"
    },
    location: {
      type: "Point",
      coordinates: [
        74.28911285869138,
        31.624888273644956
      ]
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleExpiryDateChange = (date) => {

    setValues(values => ({ ...values, expiryDate: date[0] }));

  }


  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    handleExpiryDateChange,
    values,
    errors,
    isSubmitting,
  }
};


const useFormCandidate = (callback, validate,) => {

  const [values, setValues] = useState({
    surname: "Mr",
    fullname: "",
    firstFname: '',
    secondFname: '',
    thirdFname: '',
    email: "",
    reEmail: "",
    city: "",
    state: "",
    industry: "",
    country: "",
    position: "",
    mobile: "",
    cv: '',
    age: "",
    dateofbth: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };



  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleExpiryDateChange = (date) => {

    setValues(values => ({ ...values, expiryDate: date[0] }));

  }



  useEffect(() => {
    console.log("useEffect 1 run");
    try {
      (async () => {
        const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
        const currentCountryCode = response.data.location.country.code
        const currentCountryName = response.data.location.country.name

        const CurrentStates = State.getStatesOfCountry(currentCountryCode)
        const CurrentCities = City.getCitiesOfState(currentCountryCode, CurrentStates[0].isoCode)
        console.log("CurrentStates", CurrentStates)
        console.log("CurrentCities", CurrentCities)
        setValues((prevmodel) => ({
          ...prevmodel,
          country: currentCountryName,
          state: CurrentStates.length > 0 ? CurrentStates[0].name : "",
          city: CurrentCities.length > 0 ? CurrentCities[0].name : ""
        }))
        // setall_States(CurrentStates)
        // setall_Cities(CurrentCities)

      })();
    } catch (error) {
      console.log(error);
    }

  }, [])

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleExpiryDateChange,
    isSubmitting,
  }
};

export { useFormJob, useFormCandidate }; 