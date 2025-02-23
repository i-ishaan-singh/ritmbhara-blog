import { Typo } from "src/Components/Typography/Typography"
import { LayoutMiddleSection } from "../LayoutSections/LayoutMiddleSection"
import { Button } from "src/Components/Buttons/Buttons"


const CenterRightImage = function({ heading, imgSrc, title, description, subDescription, cta }){


    return (<LayoutMiddleSection className="py-33">
                <div className="fw cri-wrp">
                    <div className="pt-10 fc pr-30">
                        <Typo size="large" className="pb-16">{heading}</Typo>
                        <Typo accent={true} comp="h3" type="head" size="medium" className="pb-16">{title}</Typo>
                        <Typo className="pb-8">{description}</Typo>
                        <Typo className="pb-26">{subDescription}</Typo>
                        <Button size="large" className="w-13" >{cta}</Button>
                        
                    </div>
                    <div className="fw pl-30">
                        <div className="cri-image-container fh br img-c">
                            <img src={imgSrc} className="fw"/>
                        </div>
                    </div>
                </div>
            </LayoutMiddleSection>)


}

export {CenterRightImage}