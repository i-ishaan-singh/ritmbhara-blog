import classNames from 'classnames';
import { useMemo } from 'react';

const LayoutMiddleSection = function(props){
    

    const { children, className } = props;

    const _className = useMemo(function(){
        return classNames('pl-180 pr-200', className)
    },[className])

    return <div className={_className}>
                {children}
            </div>


}

export {LayoutMiddleSection}