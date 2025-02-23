import { useMemo } from "react";
import { Button } from "../Buttons/Buttons";
import { Typo } from "../Typography/Typography";
import { LayoutRightSection } from "./LayoutSections/LayoutRightSection";
import classNames from "classnames";

const LandingPageImage = function(props){
    
    const { className, header, description, imgSrc, cta } = props;

    const classes = useMemo(function(){
        return classNames("contrast-base py-33",className);
    },[className]);

    return <LayoutRightSection className={classes}>
                <div className="r-section pl-16 ai-c lp-wrp ">
                    <div className="fs0 fc fg-8 pr-18 py-30">
                        <Typo size='medium' comp="h1">{header}</Typo>
                        <Typo accent={true} type="head" size="large" className="pb-6" comp="h2">{description}</Typo>
                        
                        <Typo size='large' comp="div">
                            <Button size="large" className="w-16" >{cta}</Button>
                        </Typo>
                        
                    </div>
                    <div className="fh">
                        <div className="lp-img-w ov-h br-tl br-bl fw fh">
                            <img
                                src={imgSrc}
                                className="lp-img fw"
                            />
                        </div>
                    </div>
                    
                </div>
            </LayoutRightSection>
}

export {LandingPageImage}