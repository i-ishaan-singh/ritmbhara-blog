import classNames from "classnames";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { Typo } from "../Typography/Typography";
import { FormContext } from "./Form";
import { useValidations } from "src/Utils/FormValidators/validators";

const emptyArr = [];

const FormItem = function(props){

    const {
        component:Component,
        name,
        label,
        formClassName, 
        validators=emptyArr,
        onBlur,
        required,
        ...extProps
    } = props; 

    const {value, onChange, invalids, onValidationChange, visited, onVisit} = useContext(FormContext);

    const componentValue = value[name];
    const invalid = invalids[name];
    const _visited = visited[name];

    const _handleChange = useCallback(function(e){
        onVisit(name, false);
        onChange(e, name);
    },[onVisit, name, onChange]);

    const _validationFn = useValidations(validators);

    useEffect(function(){

        const err = _validationFn(componentValue,{label});
        onValidationChange(name, err);

    },[_validationFn, componentValue, label, name, onValidationChange]);

    const _required = useMemo(function(){
        if(!required) return null;

        return <Typo comp={'span'} size="large" className="rt-form-asterik t-red">*</Typo>
    },[required]);

    const _label = useMemo(function(){
        if(!label) return null;

        return <Typo size="large" className="px-2 pb-2 fw rt-form-item-label">{_required}{label}</Typo>
    },[label, _required]);

    const _error = useMemo(function(){
        if(!(invalid && _visited)) return null;

        return <Typo size="xsmall"  className="rt-form-item-error t-red">{invalid}</Typo>
    },[_visited, invalid]);

    const _handleVisit = useCallback(function(e){
        onVisit(name);
        onBlur && onBlur(e);
    },[onVisit, name, onBlur]);

   


    const _className = useMemo(function(){
        return classNames('rt-form-item fc pb-8', formClassName,{
            'rt-invalid': _error
        });
    },[formClassName, _error]);

    return <div className={_className}>
                {_label}
                <Component 
                    {...extProps}
                    onBlur={_handleVisit}
                    name={name}
                    value={componentValue}
                    onChange={_handleChange}
                />
                {_error}
            </div>




}

export { FormItem }