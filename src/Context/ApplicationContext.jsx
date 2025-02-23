import { createContext, useEffect } from "react";
import { useWindowSize } from "src/Utils/adaptiveUtils.jsx";
import PropTypes from 'prop-types';


const ApplicationContext = createContext({});

const ApplicationProvider = function(props){

    const responsiveBreakpoint = useWindowSize();

    useEffect(function(){

            const size = 'rt-adap-'+responsiveBreakpoint;
            window.document.body.classList.add(size);

            return function(){
                window.document.body.classList.remove(size);
            }

    },[responsiveBreakpoint])

    return <ApplicationContext.Provider
                value={{
                    responsiveBreakpoint: responsiveBreakpoint
                }}
            >
                {props.children}
            </ApplicationContext.Provider>
}

ApplicationProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {ApplicationProvider, ApplicationContext}