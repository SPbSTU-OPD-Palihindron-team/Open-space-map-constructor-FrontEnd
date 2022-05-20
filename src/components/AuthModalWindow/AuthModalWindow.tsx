import React from 'react';
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import CreateAccount from "./CreateAccount";
import LogIn from "./LogIn";
import './AuthModalWindow.css'
import {observer} from "mobx-react-lite";
import AuthModalWindowStore from "../../stores/AuthModalWindowStore";
import CheckIcon from '@mui/icons-material/Check';

import {useInput} from "../../hooks/useInput"
import {Input} from "@mui/material";

const AuthModalWindow: React.FC = observer(() => {
    const navigate = useNavigate();

    const email = useInput("",{isEmpty:true, isEmailError:""});

    const handleContinue = (event:any) => {
        AuthModalWindowStore.setEmail(email.value);
        event.preventDefault();
        navigate('/auth/create-acc');
    }


    const cancel = () => {
        navigate('/');
        AuthModalWindowStore.setEmail("");
        AuthModalWindowStore.handleActive();
    }

    const closeButton =()=> {
        return (
        <button onClick={cancel}> Close </button>
        )
    }


    return (
            <div className='auth-modal'>
                <div className='auth-modal-body'>

                    <ul>
                        <NavLink style={{textDecoration:"none", color:"#4682B4"}} to="/auth">Create account</NavLink>
                        /
                        <NavLink style={{textDecoration:"none", color:"#4682B4"}} to="/auth/log-in"> Log In</NavLink>

                    </ul>


                    {(email.wasInFieldInput && email.isEmailError) && <div style={{color:"red"}}> {email.isEmailError} </div>}

                    <div style={{display:'flex', justifyItems:"baseline", alignItems:"center"}}>
                        <Input
                            value={email.value}
                            onChange={e => email.onChange(e)}
                            onBlur={email.onBlur}
                            style={{color: "white", marginBottom:"20px"}}
                            error={false}
                            name='email'
                            type='text'
                            placeholder='Work email'
                        />

                        { (email.isEmailError==="") && <CheckIcon />}
                    </div>


                    <button
                        value={email.value}
                        disabled={!(email.isValid)}
                        type='button'
                        onClick={e => handleContinue(e)}
                        style={{marginRight:"1rem"}}
                    >
                        Continue
                    </button>


                    <Routes>
                        <Route path="/auth" element={<AuthModalWindow />}> </Route>
                        <Route path="/auth/create-acc" element={<CreateAccount />}> </Route>
                        <Route path="/auth/log-in" element={<LogIn />}> </Route>
                    </Routes>
                    {closeButton()}
                </div>
            </div>

        )
    }
)


export default AuthModalWindow;
