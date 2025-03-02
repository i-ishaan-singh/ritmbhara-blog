import classNames from "classnames";
import { useMemo } from "react";


const TextArea = function(props){

    const {className, value='', ...extProps} = props;

    const _className = useMemo(function(){
            return classNames('rt-textarea', className);
    },[className])

    const _wrapperClassName = useMemo(function(){
        return classNames('rt-textarea-wr br-3x px-5 py-3 fw', className);
    },[className])


    return  <div className={_wrapperClassName}>
                <textarea className={_className} value={value} {...extProps} />
            </div>


}

export {TextArea}