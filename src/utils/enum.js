import { AiOutlineAppstore , AiFillProject } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { RiFolderUserFill , RiProfileLine } from 'react-icons/ri'
export const surnames = [
    "Mr.",
    "Mrs.",
    "Miss.",
    "Ms.",
    "SR.",
    "Dr.",
    "Dra.",
    "Esq",
    "Prof.",
    "Don.",
    "Dona",
    "Chica",
    "Chico",
    "Sr.Don",
    "Adv.",
    "Sol.",
    "B.L.",
    "Rph",
    "Sci",
    "Bot.",
    "Ad",
    "Mkt",

]


export const sidebarItems = [
    {
        label: "Dashboard",
        link: "/dashboard",
        icon : <AiOutlineAppstore  className='text-[1.5rem] ml-3 '/>
    },
    {
        label: "Apply New Job",
        link: "/dashboard",
        icon : <BiSearch className='text-[1.5rem] ml-3 '/>

    },

    {
        label: "Recent Applied Job ",
        link: "/dashboard",
        icon : <RiFolderUserFill className='text-[1.5rem] ml-3 '/>

    },

    {
        label: "Job History",
        link: "/dashboard",
        icon : <AiFillProject className='text-[1.5rem] ml-3 '/>

    },
    {
        label: "Profile History",
        link: "/dashboard",
        icon : <RiProfileLine className='text-[1.5rem] ml-3 '/>

    },


]