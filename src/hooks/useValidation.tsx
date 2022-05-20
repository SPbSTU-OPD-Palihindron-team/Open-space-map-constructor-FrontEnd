import React, {useEffect, useState} from 'react';

export const useValidation = (value:any, validations:{}) => {
    const [isEmailError, setIsEmailError]= useState<string>("Email can't be empty");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false);
    const [isSurnameEmpty, setIsSurnameEmpty] = useState<boolean>(false);

    const [isValid, setIsValid] = useState<boolean>(false);

    const validateEmailError = (value:any) => {
        const valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!valid.test(value)) {
            setIsEmailError("Invalid email");
        }
        else{
            setIsEmailError("");
        }
    }

    const validatePasswordLength = (value:any) => {
        ( value.length < 5) ? setIsPasswordValid(false):setIsPasswordValid(true);
    }


    useEffect(() => {
            validateEmailError(value);
            if(value){
                setIsEmailEmpty(false)
            }
            else{
                setIsEmailEmpty(true);
                setIsEmailError("Empty email");
            }
        },[value]
    )

    useEffect(() => {
        validatePasswordLength(value);
    })


    useEffect(()=>{
        if(isEmailEmpty || isEmailError ){
            setIsValid(false);
        }
        else{
            setIsValid(true);
        }
    },[isEmailError,isEmailEmpty]);

    return{
        validateEmailError,
        isEmailEmpty,
        isEmailError,
        isPasswordValid,
        isNameEmpty,
        isSurnameEmpty,
        isValid
    }
};

