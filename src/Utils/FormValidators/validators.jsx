import { useMemo, useCallback } from "react";
import { Required, Email, PhoneNumber } from "./BaseValidators";


const validators = {
    required: Required,
    email: Email,
    'phone': PhoneNumber
}

const useValidations = (arr) => {


    const _validators = useMemo(function(){
        return arr.map(function(v){
            return validators[v];
        }).filter(Boolean)
    },[arr]);


    const validate = useCallback(function(value, options){
        return _validators.reduce(function(acc, validator){
            return acc || validator(value, options);
        }, null)
    },[_validators]);


    return validate;

}

export {useValidations}