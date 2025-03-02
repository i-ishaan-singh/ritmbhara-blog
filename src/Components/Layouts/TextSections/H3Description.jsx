import { Typo } from "src/Components/Typography/Typography";
import { LayoutMiddleSection } from "../LayoutSections/LayoutMiddleSection";
import { Button } from "src/Components/Buttons/Buttons";


const H3Description = function(props){

    const {header, description, cta, ctaHref} = props;

    return (<LayoutMiddleSection className="py-30 h2-desc">
                <div className="ai-c fw fc fg-12 ta-c px-80 ">
                    <Typo comp="h3" type="head" size="medium" accent={true}>{header}</Typo>
                    <Typo >
                        {description}
                    </Typo>
                    {cta && <div className="pt-8 fw ta-c"><Button href={ctaHref} className="w-13">{cta}</Button></div>}
                </div>
            </LayoutMiddleSection>)

}

export {H3Description}