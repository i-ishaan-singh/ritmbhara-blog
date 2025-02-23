import { Typo } from "src/Components/Typography/Typography";
import { LayoutMiddleSection } from "../LayoutSections/LayoutMiddleSection";
import { Button } from "src/Components/Buttons/Buttons";


const H2DescriptionAction = function(props){

    const {header, description, cta, ctaHref} = props;

    return (<LayoutMiddleSection className="py-30 h2-desc">
                <div className="fw fc fg-12 ta-c px-80 ai-c">
                    <Typo comp="h2" type="head" size="large" accent={true}>{header}</Typo>
                    <Typo className="pb-8">
                        {description}
                    </Typo>
                    <Button href={ctaHref} className="w-13">{cta}</Button>
                </div>
            </LayoutMiddleSection>)

}

export {H2DescriptionAction}