import React, { useState } from 'react'
import styles from "./GooglePlaceSidebar.module.css"
const GooglePlaceSidebar = (props) => {
    const [photos, setphotos] = useState([])


    return (
        <div className={`${styles.sidebarWrapper} ${props.showSidebar ? styles.open_sidebar : ""} `}  > 
        
        </div >
    )
}

export default GooglePlaceSidebar