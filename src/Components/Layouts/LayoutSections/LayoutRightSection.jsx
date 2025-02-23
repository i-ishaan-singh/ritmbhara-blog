import classNames from 'classnames';
import { useMemo } from 'react';

const LayoutRightSection = function(props){
    

    const { children, className } = props;

    const _className = useMemo(function(){
        return classNames('fw pl-180', className)
    },[className])

    return <div className={_className}>
                {children}
            </div>


}

export {LayoutRightSection}