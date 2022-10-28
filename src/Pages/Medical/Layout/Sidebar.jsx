import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaChartBar } from "react-icons/fa";
import Topbar from "./Topbar";
// import * from '../../../images/'
const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Doctors", src: "doctor" },
    { title: "My Appointments", src: "appointment" },
    { title: "Favourites", src: "fav" },
    { title: "Messages", src: "message" },
    { title: "Profile Settings", src: "setting" },
]
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <Topbar />
            <div className={`${open ? "w-60" : "w-20"} h-screen p-5 pt-8 relative bg-gray-300`}>
                {open ?
                    <FaArrowCircleLeft className="absolute cursor-pointer rounded-full -right-3 top-9 border-2" onClick={() => setOpen(!open)} /> :
                    <FaArrowCircleRight className="absolute cursor-pointer rounded-full -right-3 top-9 border-2" onClick={() => setOpen(!open)} />
                }
                <div className="flex gap-x-4 items-center">
                    <Avatar className={`cursor-pointer duration-500`} />
                    <h1 className={`text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Profile</h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <li key={index} className="text-black text-sm flex 
                        items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md
                        ">
                            <img src={require(`../../../assets/images/${menu.src}.png`)} alt="i" className={`${open ? "h-8 w-8" : "h-6 w-6"}`} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Sidebar;