import classNames from 'classnames';
import { useMemo } from 'react';

const Typo = function(props){

    const {
            children, 
            className, 
            id, 
            comp:Comp='p', 
            accent, 
            size='small',
            type="body"
        } = props;

    const _classNames = useMemo(function(){
        return classNames('rt-typo',className, size, type,{
            'accent-text': accent
        })
    },[accent, className, size, type])

    return (<Comp 
                id={id} 
                className={_classNames}>
                    {children}
            </Comp>)
}

export {Typo};