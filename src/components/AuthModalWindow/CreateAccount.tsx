import React from 'react';
import './AuthModalWindow.css'
import {useNavigate} from "react-router-dom";
import AuthModalWindowStore from "../../stores/AuthModalWindowStore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useInput} from "../../hooks/useInput";
import {Input} from "@mui/material";


const inputStyle = {
    color:"white",
    backgroundColor: "transparent",
    border:"none",
    marginBottom:"1rem"
}



const CreateAccount = ()  => {
    const navigate = useNavigate();

    const handleClose = ()=>{
        navigate('/');
        AuthModalWindowStore.handleActive();
        AuthModalWindowStore.setEmail("");

    }

    const userName = useInput("",{isEmpry:true});
    const userSurname = useInput("",{isEmpry:true})

    const password = useInput("",{isEmpry:true, isPasswordValid:false});

    const handleCreateAcc = () => {
        navigate('/');
        AuthModalWindowStore.handleActive();
        AuthModalWindowStore.setPassword(password.value);
        AuthModalWindowStore.addUser();
        console.log(AuthModalWindowStore.getListOfUsers);
    }


    return (
        <div className="auth-modal">
            <div className="auth-modal-body">
                <ArrowBackIosIcon onClick={()=> navigate('/auth')}/>
                <form style={{display:"flex", flexDirection:"column"}}>
                    <input style={inputStyle} disabled name='email' type='text' placeholder={AuthModalWindowStore.getEmail} />
                    <h1> Registration </h1>
                    <Input
                        defaultValue={userName.value}
                        onChange={e=> userName.onChange(e)}
                        style={inputStyle}
                        name='name'
                        type='text'
                        placeholder='Name'
                    />
                    <Input
                        defaultValue={userSurname.value}
                        onChange={e=> userSurname.onChange(e)}
                        style={inputStyle}
                        name='surname'
                        type='text'
                        placeholder='Surname'
                    />
                    <Input
                        defaultValue={password.value}
                        onChange={e=> password.onChange(e)}
                        onBlur={password.onBlur}
                        style={inputStyle}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </form>
                <button
                    disabled={!(password.isPasswordValid)}
                    onClick={handleCreateAcc}
                    style={{marginRight:"1rem"}}
                    type='submit'>
                    Create account
                </button>
                <button  type='button' onClick={handleClose}> Close </button>
            </div>
        </div>

    )
};

export default CreateAccount;
