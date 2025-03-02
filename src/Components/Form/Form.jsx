import { createContext, useCallback, useState } from "react";

const emptyObj = {};

const FormContext = createContext({});

const Form = function(props){


    const {
            value, 
            onChange,
            invalids=emptyObj,
            onValidationChange, 
            children
        } = props;

    
    const [visited, setVisited] = useState({});

    const _handleVisited = useCallback(function(name, value=true){
        setVisited(function(oGvisited){
            return {
                ...oGvisited,
                [name]: value
            }
        });
    },[]);

    const _handleChange = useCallback(function(e, name){
        onChange(function(oGvalue){ 
            return {
                ...oGvalue,
                [name]: e.target.value
            }
        });
    },[onChange]);

    const _handleValidate = useCallback(function(name, value){
        if(!onValidationChange) return;

        onValidationChange(function(oGinvalids){

            const newValue = {
                ...oGinvalids
            }

            if(!value){
                delete newValue[name];
            }else{
                newValue[name] = value;
            }

            return newValue;
        });

    },[onValidationChange]);


    return <FormContext.Provider value={{visited, onVisit: _handleVisited, value, onChange: _handleChange, invalids, onValidationChange: _handleValidate}}>
                {children}
            </FormContext.Provider>

}

export { Form, FormContext }