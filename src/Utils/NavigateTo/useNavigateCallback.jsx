import React from 'react';
import { useNavigate } from 'react-router-dom'

const useNaviagatonCallback = function(options){
    
    const {url, isExternal} = options;
    const navigate = useNavigate();

    return React.useCallback(function(){
        
        if(isExternal){
            window.open(url, '_blank');
            return;
        }
        
        if(url){
            navigate(url);
            document.getElementById('main-app').scrollTop=0
        }
    },[url, navigate, isExternal]);
}

export {useNaviagatonCallback}