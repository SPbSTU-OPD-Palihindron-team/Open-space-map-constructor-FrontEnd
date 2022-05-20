import React, {useEffect, useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue: string, validations:{}) => {
    const [value, setValue ] = useState<string>(initialValue);
    const [wasInFieldInput, setWasInFieldInput] = useState<boolean>(false);

    const valid = useValidation(value, validations);

    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        setWasInFieldInput(true);
    }

    return{
        value,
        onChange,
        onBlur,
        wasInFieldInput,
        ...valid
    }

}