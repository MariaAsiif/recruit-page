import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import UserInfo from '../AdminComponents/EditAppointment/userInfo';
import Category from '../AdminComponents/EditAppointment/Category';
import Schedule from '../AdminComponents/EditAppointment/Secdual';
import SurgicalHistory from '../AdminComponents/EditAppointment/SurgicalHistory';
import SocialHistory from '../AdminComponents/EditAppointment/SocialHistory';
import ConsultationType from '../AdminComponents/EditAppointment/ConsultationType';
import History from '../AdminComponents/EditAppointment/History';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { callApi } from '../../utils/CallApi';
const schema = yup.object({
    ssn: yup.string().required('Field is Required'),
    homeAddress: yup.string().required('homeAddress is Required'),
    homePhone: yup.string().required('homePhone is Required'),
    workPhone: yup.string().required('workPhone is Required'),
    occupation: yup.string().required('occupation is Required'),
    emergencyContantName: yup.string().required('emergencyContantName is Required'),
    emergencyContactRelation: yup.string().required('emergencyContactRelation is Required'),
    emergencyContactPhone: yup.string().required('emergencyContactPhone is Required'),
    familyDoctorName: yup.string().required('familyDoctorName is Required'),
    referringDoctorName: yup.string().required('referringDoctorName is Required'),
    doctorAddress: yup.string().required('doctorAddress is Required'),
    doctorPhone: yup.string().required('doctorPhone is Required'),
    doctorFax: yup.string().required('doctorFax is Required'),
    otherReferralSource: yup.string().required('otherReferralSource is Required'),
    requestCategory: yup.string().required('Request Category is Required'),
    reasonOfCurrentVisit: yup.string().required('Problem is Required'),
    disease: yup.string().required('Disease is Required'),
    description: yup.string().required('Description is Required'),
    doctorName: yup.string().required('Doctor Name is Required'),
    specialization: yup.string().required('Specialization is Required'),
    profileLink: yup.string().required('Profile link is Required'),
    consultationFee: yup.string().required('consultation Fee is Required'),
    communication: yup.string().required('communication  is Required'),
    familyDiseases: yup
        .array()
        .of(
            yup.object({
                description: yup.string().required(),

            })
        )
        .required(),
    operationType: yup
        .array()
        .of(
            yup.object({
                operationName: yup.string().required(),
                operationResult: yup.string().required(),
            })
        )
        .required(),
    medicationsSuppliments: yup
        .array()
        .of(
            yup.object({
                medicine: yup.string().required(),
                dosage: yup.string().required(),
                timesOfMedicine: yup.string().required(),
            })
        ),

    noOfChildrens: yup.string().required(),
    sexualOrientation: yup.string().required(),
    maritalStatus: yup.string().required(),
    deliveryMethod: yup.string().required(),
    addictions: yup
        .array()
        .of(
            yup.object({
                addictionName: yup.string().required(),
                howLongUsed: yup.string().required(),
                description: yup.string().required(),
                lastTimeUsed: yup.string().required(),
            })
        )
        .required(),

});





const ViewEditAppointment = ({ id, modalOpen, onClose, mode, data }) => {
    const modalContent = useRef(null);
    const [categoryDate, setCategoryDate] = useState("")
    const [history, setHistory] = useState('')
    const [seduleFiles, setSeduleFiles] = useState({ file: "", report: "" })
    const [seduledate, setSeduleDate] = useState({})
    // dates -> surgical
    const [dates, setDates] = useState([]);

    const [imagefile, setImageFile] = useState([]);
    const [picturs, setPicturs] = useState('');
    const [videos, setVideos] = useState('');
    // startDate -> addictions
    const [startDate, setStartDate] = useState({ start: "", end: "", last: "" });
    const [surDate, setSurDate] = useState([]);
    const [error, setError] = useState("");

    let d = {
        categoryDate,
        history,
        seduleFiles,
        seduledate,
        dates,
        picturs,
        videos,
        startDate,
        surDate
    }



    const {
        register,
        watch,
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange', resolver: yupResolver(schema),
        defaultValues: {
            familyDiseases: [{ description: "" }],
            operationType: [{ operationName: "", operationResult: "", operationDate: "" }],
            medicationsSuppliments: [{ medicine: "", dosage: "", takingNow: true, timesOfMedicine: "", prescriptionFile: "" }],
            addictions: [{ addictionName: "", everUsed: false, howLongUsed: "", whenStarted: "", whenQuited: "", description: "", lastTimeUsed: "" }]
        }
    });


    const onSubmit = async (values) => {
        console.log("values", values)
        if (history == "") {
            setError("File is required")
        }
        else {
            try {
                let payload = {
                    "appointmentRequestid": data._id,
                    "customer": data?.customer?._id,
                    customerfields: {
                        "ssn": data?.ssn,
                        "homeAddress": data?.homeAddress,
                        "homePhone": data?.workPhone,
                        "workPhone": data?.workPhone,
                        "occupation": data?.occupation,
                        "emergencyContantName": data?.emergencyContantName,
                        "emergencyContactRelation": data?.emergencyContactRelation,
                        "emergencyContactPhone": data?.emergencyContactPhone,
                        "familyDoctorName": data?.familyDoctorName,
                        "referringDoctorName": data?.referringDoctorName,
                        "doctorAddress": data?.doctorAddress,
                        "doctorPhone": data?.doctorPhone,
                        "doctorFax": data?.doctorFax,
                        "otherReferralSource": data?.otherReferralSource,
                    },
                    "reasonOfCurrentVisit": data?.reasonOfCurrentVisit,
                    "requestCategory": data?.requestCategory,
                    // "status": "pendding",
                    "requestDate": data?.requestDate,
                    "medicalHistory": [{
                        "description": data?.description,
                    }],
                    "pastConsultants": [{
                        "doctorName": data?.doctorName,
                        "specialization": data?.specialization,
                        "lastCheckupDate": data?.lastCheckupDate,
                        "profileLink": data?.profileLink,
                        "drPrescription": data?.file,
                        "medicalReports": data?.report,
                    }],
                    "familyDiseases": data?.familyDiseases,
                    "surgicalHistory": {
                        "isSurgeyDone": data?.isSurgeyDone,
                        "operationType": data?.operationType
                    },
                    "socialHistory": {
                        "addictions": data?.addictions,
                        "maritalStatus": data?.maritalStatus,
                        "sexualOrientation": data?.sexualOrientation,
                        "everHurt": data?.hurt,
                        "needCarrier": data?.carrier,
                        "exercise": data?.excise,
                        "pregnant": data?.pregnet,
                        "breastFeeding": data?.feeding,
                        "lastMenstrualDate": data?.lastMenstrualDate,
                        "noOfChildrens": data?.children,
                        "deliveryMethod": data?.deliveryMethod,
                        "deliveryInjury": data?.injury,
                    },
                    "allergies": data?.allergies,
                    "medicationsSuppliments": data?.medicationsSuppliments,
                    "symptoms": data?.symptoms,
                    "consultationType": [{
                        "consultationFee": data?.consultationFee,
                        "communication": data?.communication
                    }],

                    "pictures": data?.pictures,
                    "videos": data?.videos
                }
                console.log("pay", payload)
                let res = await callApi('/appointmentrequests/createAppointmentRequest', 'post', payload)
                if (res.status === "Success") {
                    toast.success(res.message)
                    onClose();
                }
            } catch (error) {

            }
        }
    }



    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            onClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });


    console.log("Data from update", data)

    useEffect(() => {

        let sm = []
        let al = []

        for (let index = 0; index < data?.symptoms?.length; index++) {
            const element = data.symptoms[index];
            let ob = { "name": element }
            sm.push(ob)
        }

        for (let index = 0; index < data?.allergies?.length; index++) {
            const element = data.allergies[index];
            let ob = { "name": element }
            al.push(ob)
        }



        let d = {
            "ssn": data?.customer?.ssn,
            "homeAddress": data?.customer?.homeAddress,
            "homePhone": data?.customer?.workPhone,
            "workPhone": data?.customer?.workPhone,
            "occupation": data?.customer?.occupation,
            "emergencyContantName": data?.customer?.emergencyContantName,
            "emergencyContactRelation": data?.customer?.emergencyContactRelation,
            "emergencyContactPhone": data?.customer?.emergencyContactPhone,
            "familyDoctorName": data?.customer?.familyDoctorName,
            "referringDoctorName": data?.customer?.referringDoctorName,
            "doctorAddress": data?.customer?.doctorAddress,
            "doctorPhone": data?.customer?.doctorPhone,
            "doctorFax": data?.customer?.doctorFax,
            "otherReferralSource": data?.customer?.otherReferralSource,
            "reasonOfCurrentVisit": data.reasonOfCurrentVisit,
            "requestCategory": data.requestCategory,
            "status": "approved",
            "requestDate": data.requestDate,
            "description": data?.medicalHistory?.description,
            "doctorName": data.pastConsultants ? data?.pastConsultants[0]?.doctorName : null,
            "specialization": data.pastConsultants ? data?.pastConsultants[0]?.specialization : null,
            "lastCheckupDate": data.pastConsultants ? data?.pastConsultants[0]?.lastCheckupDate : null,
            "profileLink": data.pastConsultants ? data?.pastConsultants[0]?.profileLink : null,
            "drPrescription": data.pastConsultants ? data?.pastConsultants[0]?.drPrescription : null,
            "medicalReports": data.pastConsultants ? data?.pastConsultants[0]?.medicalReports : null,
            "familyDiseases": data.familyDiseases,
            "isSurgeyDone": data?.surgicalHistory?.isSurgeyDone,
            "operationType": data?.surgicalHistory?.operationType,

            "addictions": data?.socialHistory?.addictions,

            "maritalStatus": data?.socialHistory?.maritalStatus,
            "sexualOrientation": data?.socialHistory?.sexualOrientation,
            "everHurt": data?.socialHistory?.everHurt,
            "needCarrier": data?.socialHistory?.needCarrier,
            "exercise": data?.socialHistory?.exercise,
            "pregnant": data?.socialHistory?.pregnant,
            "breastFeeding": data?.socialHistory?.breastFeeding,
            "lastMenstrualDate": data?.socialHistory?.lastMenstrualDate,
            "noOfChildrens": data?.socialHistory?.noOfChildrens,
            "deliveryMethod": data?.socialHistory?.deliveryMethod,
            "deliveryInjury": data?.socialHistory?.deliveryInjury,

            "allergies": al,
            "medicationsSuppliments": data.medicationsSuppliments,
            "symptoms": sm,
            "consultationFee": data.consultationType ? data?.consultationType[0]?.consultationFee : null,
            "communication": data.consultationType ? data?.consultationType[0]?.communication : null,
            "pictures": data.pictures,
            "videos": data.videos
        }

        console.log("data", d)

        reset(d)
    }, [reset, data])






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
                            <div className="font-semibold text-slate-800">View Inspire</div>
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
                            <UserInfo  {...{ control, register, watch, errors, mode, data }} />
                            <Category  {...{ control, register, watch, reset, errors, mode, data, setCategoryDate }} />
                            <History  {...{ control, register, watch, errors, mode, data, setHistory, error }} />
                            <Schedule  {...{ control, register, watch, errors, mode, data, setSeduleFiles, setSeduleDate }} />
                            <SurgicalHistory  {...{ control, register, watch, errors, mode, data, setDates, imagefile, setSurDate, setImageFile }} />
                            <SocialHistory  {...{ control, register, watch, errors, mode, setStartDate }} />
                            <ConsultationType  {...{ control, register, watch, reset, errors, mode, data, setPicturs, setVideos }} />
                            {mode !== "view" &&
                                <button type="submit" className='p-2 ml-9 mb-7 bg-red-500 hover:bg-green-600 text-white'>Update </button>
                            }
                        </form>
                    </div>
                </div>
            </Transition>
        </>
    )
}

export default ViewEditAppointment