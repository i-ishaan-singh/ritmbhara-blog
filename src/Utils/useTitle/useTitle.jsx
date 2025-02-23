import React from "react"

var timeoutId;

const useTitle = function(title){

    React.useEffect(function(){
        clearTimeout(timeoutId);
        document.title = title + ' | Ritmbhara Svasth Parivar';
        return function(){
            timeoutId = setTimeout(function(){
                document.title = 'Ritmbhara Svasth Parivar'
            },10);
        }
    },[title]);

}

export {useTitle}