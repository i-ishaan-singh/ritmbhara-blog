import { LayoutRightSection } from "../LayoutSections/LayoutRightSection";


const RightImageCard = function(props){

    const {imgSrc} = props;

    return <LayoutRightSection className="py-33 right-card-image">
                <div className="pl-80 ">
                    <div className="py-35 pl-80 palette-accent r-card-wrapper">
                        <div className="right-card-image-container br">
                            <img src={imgSrc} alt="Right Section Image" className="r-card-img"/>
                        </div>
                        <div className="fw fh ">
                            <div className="fh fw pl-60 pr-200 pb-30">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutRightSection>

}

export {RightImageCard}