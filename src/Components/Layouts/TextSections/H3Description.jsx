import { Typo } from "src/Components/Typography/Typography";
import { LayoutMiddleSection } from "../LayoutSections/LayoutMiddleSection";


const H3Description = function(props){

    const {header, description} = props;

    return (<LayoutMiddleSection className="py-30 h2-desc">
                <div className="fw fc fg-12 ta-c px-80 ">
                    <Typo comp="h3" type="head" size="medium" accent={true}>{header}</Typo>
                    <Typo >
                        {description}
                    </Typo>
                </div>
            </LayoutMiddleSection>)

}

export {H3Description}