import classNames from "classnames";
import { useMemo } from "react";


const TopSectionSeparator = function(props){

    const {
            className, 
            primaryContainer='contrast-base',
            transitionContainer='palette-light'
        } = props;

    const _classNames = useMemo(function(){
        return classNames('section-separator pt-20', className, primaryContainer)
    },[className, primaryContainer]);

    const _transitionClassNames = useMemo(function(){
        return classNames(transitionContainer, 'br-tr br-tl pb-30');
    },[ transitionContainer])


    return (<div className={_classNames}>
                <div className={_transitionClassNames}/>
            </div>)

}


const BottomSectionSeparator = function(props){

    const {
            className, 
            primaryContainer='palette-accent',
            transitionContainer='palette-light'
        } = props;

    const _classNames = useMemo(function(){
        return classNames('section-separator pb-20', className, primaryContainer)
    },[className, primaryContainer]);

    const _transitionClassNames = useMemo(function(){
        return classNames(transitionContainer, 'br-br br-bl pb-30');
    },[ transitionContainer])


    return (<div className={_classNames}>
                <div className={_transitionClassNames}/>
            </div>)

}



export {BottomSectionSeparator, TopSectionSeparator}