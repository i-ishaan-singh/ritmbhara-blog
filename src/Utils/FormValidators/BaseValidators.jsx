const Required = function(value, options){

    const {label} = options;

    const error = label + ' is required.';

    if(typeof value === 'string'){
        return value.trim() ? null : error;
    }else if(value === null || typeof value === 'undefined'){
            return error;
    }else if(Array.isArray(value)){
        return value.length ? null : error;
    }
    return null;
}


const Email = function(value){
    
    const error = 'Invalid Email.';

    if(value && typeof value === 'string'){
        return value.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g) ? null : error;
    }

    return null;
}

const PhoneNumber = function(value){
    const error = 'Invalid Phone Number.';

    if(value && typeof value === 'string'){
        return value.match(/^\d{10}$/g) ? null : error;
    }

    return null;
}

export { Required, Email, PhoneNumber}