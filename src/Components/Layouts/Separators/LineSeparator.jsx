
import { LayoutMiddleSection } from "../LayoutSections/LayoutMiddleSection";

const LineSeparator = function(props) {
    
    const {className} = props;

    return (
        <LayoutMiddleSection className={className}>
            <div className="line-separator palette-accent-dark"/> 
        </LayoutMiddleSection>
    );
}

export {LineSeparator}