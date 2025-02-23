import { useCallback, useContext, useMemo, useState } from 'react'
import logo from '../../assets/images/ritmbhara-logo.svg'
import { ApplicationContext } from 'src/Context/ApplicationContext';
import classNames from 'classnames';
import { Typo } from 'src/Components/Typography/Typography';
import { NavigationLink } from 'src/Utils/NavigationLink/NavigationLink';
import { HeaderLinks } from './HeaderLinks';
import { Button } from 'src/Components/Buttons/Buttons';
import { Bars } from 'src/Icons/Bars';
import { SideNav } from './SideNav';

const Header = function(){

    const {responsiveBreakpoint} = useContext(ApplicationContext);

    const [sidenavShow, setSidenavShow] = useState(false);

    const _classNames = useMemo(function(){
        
            return classNames('page-header contrast-base fr pb-4',{
                'pt-20 px-30': responsiveBreakpoint >= 5,
                'pt-10 px-16': responsiveBreakpoint < 5,
            });
    },[responsiveBreakpoint]);

    const toggleSideNav = useCallback(function(){
        setSidenavShow(function(prev){
            return !prev;
        })
    },[]);


    return (<div 
                role="banner"
                className={_classNames}
            >
                <NavigationLink to="/" className='fr ai-c'>
                    <img 
                        src={logo} 
                        className="header-image" 
                        alt="Ritmbhara Svasth Parivar Header Image"
                    />
                    <div className="fc pl-4 ta-r">
                        <Typo type="head" size="medium" comp="h1" className="main-header-text">Ritmbhara</Typo>
                        <Typo type="head" size="xsmall" comp="h2" className="main-header-text">Svasth Parivar</Typo>
                    </div>
                </NavigationLink>
                <div className='fw fr header-links-wrapper  jc-e'>
                    <Typo comp="div" className="header-links fr ai-c fg-20" size="large">
                        <HeaderLinks link="/about">About</HeaderLinks>
                        <HeaderLinks link="/contact">Contact</HeaderLinks>
                        <HeaderLinks link="/events">Events</HeaderLinks>
                        <Button>Learn More</Button>
                    </Typo>
                </div>
                <div className='fw fr header-bars jc-e'>
                    <Bars onClick={toggleSideNav} className="header-icon"/>
                </div>
                <SideNav show={sidenavShow} onClose={toggleSideNav}/>
            </div>)
}

export {Header}