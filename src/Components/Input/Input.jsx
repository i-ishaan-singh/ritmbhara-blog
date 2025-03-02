import classNames from "classnames";
import { useMemo } from "react";


const Input = function(props){

    const {className, value='', ...extProps} = props;

    const _className = useMemo(function(){
            return classNames('rt-input br-3x px-5 py-3', className);
    },[className])

    return <input className={_className} value={value} {...extProps} />


}

export {Input}