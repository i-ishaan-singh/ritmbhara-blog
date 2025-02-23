import classNames from 'classnames';
import { useMemo } from 'react';
import { NavigationLink } from 'src/Utils/NavigationLink/NavigationLink';

const Button = function(props){

    const {className, size='medium', href }  = props;

    const _className = useMemo(function(){
            return classNames('rt-button palette-accent-hover',{
                'px-3 py-2': size === 'small',
                'px-12 py-4': size === 'medium',
                'px-6 py-6': size === 'large'
            }, className)
    },[className, size]);



    return <NavigationLink to={href} className={_className} role="button">{props.children}</NavigationLink>
}

export {Button}