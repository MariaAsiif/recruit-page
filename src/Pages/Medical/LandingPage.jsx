import { Card, CardContent, TextField } from '@material-ui/core';
import { useState } from 'react';
import MedicalLogin from './MedicalLogin';
import MedicalSignUp from './MedicalSignup';
import bgImage from '../../images/medicalbg.png'

const MedicalLandingPage = () => {
    const [newAccount, setNewAccount] = useState(false);
    const handleSignUp = () => {
        setNewAccount(!newAccount);
    }
    return (
        <div className='h-screen p-0 bscontainer-fluid'>
            <div className='lg:h-full row g-0'>
                <div className='h-40 bg-bottom bg-no-repeat bg-cover lg:h-auto col-lg-7 bg-login-img '>
                    <div style={{
                        marginTop: "40%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{ fontSize: "40px", color: "white" }}>
                            <label htmlFor="welcome">Welcome to <span style={{ fontWeight: "bold", color: "green" }}>HPO</span><span style={{ fontWeight: "bold", color: "orange" }}>R<sub>x</sub></span></label>
                        </div>
                        <div style={{ color: "white" }}>
                            <p>Enter your details and start journey with us.</p>
                        </div>
                        <br />
                        <div>
                            <button style={{
                                border: "1px solid white",
                                height: "40px",
                                width: "90px",
                                textAlign: "center",
                                borderRadius: "5px",
                            }} onClick={() => handleSignUp()} >{!newAccount ? "Sing Up" : "Login"}</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div style={{
                        width: "100%",
                        height: "100vh",
                        color: "#312727",
                    }}>

                        {newAccount ? <MedicalSignUp /> : <MedicalLogin />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MedicalLandingPage;