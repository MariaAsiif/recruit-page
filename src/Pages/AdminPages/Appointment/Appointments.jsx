import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import EditViewAppointment from '../../../components/Popups/ViewEditAppointment'
import { callApi } from '../../../utils/CallApi'

const Appointments = () => {

  const [allInspires, setallInspires] = useState([])
  const [inspirePopup, setinspirePopup] = useState(false)
  const [delPopup, setDelPopup] = useState(false)
  const [delId, setDelId] = useState('')
  const [inspireMode, setinspireMode] = useState("view")
  const [inspireRow, setinspireRow] = useState({})
  const openInspirePopup = (e, mode, data) => {
    e.stopPropagation()
    setinspirePopup(true)
    setinspireMode(mode)
    setinspireRow(data)
}

const deletePopToggle = (id) => {
    setDelId(id)
    setDelPopup(true)
}

const deleteInspire = async () => {
    let value = {
        id: delId
    }
    try {
        const res = await callApi("/quotes/removeQuote", "post", value)
        if (res.status === "Success") {
            toast.success(res.message);
            setDelPopup(false)
            let oldinspires = allInspires
            const updatedInspires = oldinspires.filter((inspire) => inspire._id !== res.data._id)
            setallInspires(updatedInspires)
        }
        else {
            toast.error(res.message);

        }
    } catch (error) {

    }
}
useEffect(() => {
    console.log("useeffect run")
    if (!inspirePopup) {
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
                const response = await callApi("/quotes/getQuotesWithFullDetails", "post", payload)

                setallInspires(response.data.quotes)
            } catch (error) {
                console.log(error);
            }
        })();
    }

}, [])



  return (
    <div>
      <EditViewAppointment id="job-modal" data={inspireRow} mode={inspireMode} modalOpen={inspirePopup} onClose={() => setinspirePopup(false)} />
      <button onClick={(e) => openInspirePopup(e, "edit", "date afhasdfkdj")}>Edit</button>
    </div>
  )
}

export default Appointments