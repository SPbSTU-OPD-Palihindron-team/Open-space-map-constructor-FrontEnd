import React from 'react';
import './AuthModalWindow.css'
import {useNavigate} from "react-router-dom";
import AuthModalWindowStore from "../../stores/AuthModalWindowStore";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Input} from "@mui/material";

const inputStyle =  {
    color: "white",
    backgroundColor: "transparent",
    marginBottom:"5px"
}

const LogIn = () => {
    const navigate = useNavigate();
    const handleClose = ()=>{
        navigate('/');
        AuthModalWindowStore.handleActive();
        AuthModalWindowStore.setEmail("");

    }
    return (
        <div className="auth-modal">
            <div className="auth-modal-body">
                <ArrowBackIosIcon onClick={()=> navigate('/auth')}/>
                <form style={{display:"flex", flexDirection:"column", marginBottom:"20px"}}>
                    <h1 style={{color: "white"}}> Log In </h1>
                    <Input style={inputStyle} name='email' type='text' placeholder='Email' />
                    <Input style={inputStyle} name='password' type='password' placeholder='Password' />
                </form>
                <button type='submit' style={{marginRight:"1rem"}}> Sing In </button>
                <button onClick={handleClose}> Close  </button>
            </div>
        </div>
    );
};

export default LogIn;
