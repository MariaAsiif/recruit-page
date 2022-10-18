import React, { useState } from 'react'

const Orders = () => {
    const [activetab, setactivetab] = useState("tab_requirements")
    const onChangeTab = (tabname) => {
        setactivetab(tabname)
    }
    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[84vh] overflow-y-auto p-5 bg-white rounded-2xl'>
            <div>
                <ul className="flex flex-wrap mb-4" id="orders-tab" role="tablist">
                    <li onClick={() => setactivetab("tab_activity")} className={` lg:px-4 px-2 `}>
                        <span className={`text-[#707070] font-medium uppercase cursor-pointer ${activetab === "tab_activity" ? "text-[#4DA676] font-semibold underline" : ""}`}>Activity</span>
                    </li>
                    <li onClick={() => setactivetab("tab_detail")} className={` lg:px-4 px-2 `}>
                        <span className={`text-[#707070] font-medium uppercase cursor-pointer ${activetab === "tab_detail" ? "text-[#4DA676] font-semibold underline" : ""}`}>Details</span>
                    </li>
                    <li onClick={() => setactivetab("tab_requirements")} className={`lg:px-4 px-2`}>
                        <span className={`text-[#707070] font-medium uppercase cursor-pointer ${activetab === "tab_requirements" ? "text-[#4DA676] font-semibold underline" : ""}`}>Requirements</span>
                    </li>
                </ul>
                <div className="tab-content" id="tabs-tabContent">
                    <div className={`tab-pane fade ${activetab === "tab_activity" ? "show active" : ""} `} >
                        Tab 1 content
                    </div>
                    <div className={`tab-pane fade ${activetab === "tab_detail" ? "show active" : ""} `} >
                        <div className='pb-4 mb-2 border-b row g-0'>
                            <div className='col-lg-8 '>
                                <h1 className='text-[#626973] font-semibold mb-3'> I will manage your social media</h1>
                                <h1 className='text-[10px] text-[#4DA676] font-semibold'>Buyer: icedrgy (view history)|Date ordered 5 Sept, 1:30</h1>

                            </div>
                            <div className='text-right col-lg-4 '>
                                <h1 className='font-medium text-[#626973] mb-1 '>TOTAL PRICE</h1>
                                <h1 className='font-semibold text-[#626973] '>US$350</h1>
                            </div>
                        </div>
                        <p className='text-[#707070] text-xs font-light italic'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                        <div className='row g-0 bg-[#F2F2F2]'>
                            <div className='col-lg-6'>kkkk</div>
                            <div className='col-lg-3'>kkkk</div><div className='col-lg-3'>kkkk</div>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activetab === "tab_requirements" ? "show active" : ""} `}  >
                        <div>
                            <h1 className='text-[#707070] text-lg font-semibold mb-3'>Please Explain your requirement or if you want my help let me know.</h1>
                            <p className='text-[#3F3F44] font-light text-sm leading-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
                            <p className='text-[#3F3F44] font-light text-sm leading-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Orders