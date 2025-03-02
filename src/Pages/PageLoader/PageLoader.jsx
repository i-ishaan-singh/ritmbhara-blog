import { TopSectionSeparator } from "src/Components/Layouts/Separators/SectionSeparator";
import { Loader } from "src/Components/LoadingIcon/LoadingIcon";

const PageLoader = function(props){

    const {message} = props;

    return (<div className="fw fh fr fg-3 page-loader">
                <TopSectionSeparator/>
                <Loader message={message}/>
                
            </div>)
}

export {PageLoader}