import { useEffect, useMemo, useState } from "react";



const breakpoints = [
    480,
    768,
    1024,
    1440,
    1688,
    1920,
    2560,
    3840,
    3841,
];

function getBreakpoint(width) {
    const zoomLevel = window.devicePixelRatio;
    const adjustedWidth = width / zoomLevel;

    const breakpointKeys = Object.keys(breakpoints);
    for (let i = 0; i < breakpointKeys.length; i++) {
      
        if (adjustedWidth < breakpoints[i]) {
            return i;
        }
    }
    return 6;
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
    });

    useEffect(() => {
        function handleResize() {
        setWindowSize({
            width: window.innerWidth
        });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return useMemo(function(){
        return getBreakpoint(windowSize.width);    
    },[windowSize]);
}


export {useWindowSize}