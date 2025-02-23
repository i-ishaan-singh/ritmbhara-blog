import { createPortal } from "react-dom";

import logo from '../../assets/images/ritmbhara-logo.svg'
import { useEffect, useMemo, useState } from "react";
import { Close } from "src/Icons/Close";
import classNames from "classnames";
import { NavigationLink } from "src/Utils/NavigationLink/NavigationLink";
import { Typo } from "src/Components/Typography/Typography";

const SideNav = function(props){

    const {show, onClose} = props;

    const [internalShow, setInternalShow] = useState(show)

    useEffect(function(){
        
        let timeoutId;

        if(show){
            document.body.classList.add('prevent-scroll');
            setInternalShow(true)
        }else{
            timeoutId = setTimeout(function(){
                setInternalShow()
            },400);
        }

        return function(){
            document.body.classList.remove('prevent-scroll');
            clearTimeout(timeoutId);
        }
        
    },[show])

    const _classNames = useMemo(function(){
        return classNames("bars-nav px-10 py-30",{
            'display': internalShow,
            'transition': show
        })
    },[internalShow, show])


    return createPortal(<div className={_classNames}>
                <Close onClick={onClose} className="header-icon bars-cross-icon"/>
                <div className="bars-nav-logo fr ai-c jc-c">
                    <NavigationLink onClick={onClose} to="/">
                        <img src={logo} className="bars-logo" />
                    </NavigationLink>
                </div>
                <Typo comp="div" className="bars-nav-content fc ai-c fg-10 fh pt-20" type="head" size="small">
                    <NavigationLink onClick={onClose} to="/about" className="bars-link">About</NavigationLink>
                    <NavigationLink onClick={onClose} to="/contact" className="bars-link">Contact</NavigationLink>
                    <NavigationLink onClick={onClose} to="/events" className="bars-link">Events</NavigationLink>
                </Typo>
            </div>, document.body);
}

export {SideNav}