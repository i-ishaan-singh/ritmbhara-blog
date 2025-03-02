import { Typo } from "../Typography/Typography";


const Loader = function(props){

    
    const {message="Loading . . ."} = props;
    
    return <div className="loading-container fw fh fc ai-c jc-c">
                <span className="loader">
                    <div className="loader-big-circle"/>
                    <div className="loader-small-circle"/>
                </span>
                <Typo type="head" size="small" accent="true">{message}</Typo>
            </div>
}

export {Loader}