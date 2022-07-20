import React from 'react'

const Forms = () => {
    return (
        <>
            <div className="form_wrapper">
                <form>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className='input_wrapper'>
                                <select className='select_option'>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                    <option>hello</option>
                                </select>
                                <input type="text" className='select_input form-control' placeholder={`Name `} />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                        <div className="col-md-6">
                            <div className="info_city">
                                <input type="text" placeholder='City *' />
                                
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                        <div className="col-md-6">
                            <div className="info_city">
                                <input type="text" placeholder='City *' />
                                
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <input type="text" placeholder='Name *' />
                        </div>
                        <div className="col-md-6">
                            <div className="info_city">
                                <input type="text" placeholder='City *' />
                                <input type="text" className='' placeholder='Country *' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-12">
                            <div className="info_button">
                                <label>Manadatory</label>
                                <button>Submit</button>
                            </div>
                        </div>

                    </div>

                </form>
            </div>

        </>
    )
}

export default Forms