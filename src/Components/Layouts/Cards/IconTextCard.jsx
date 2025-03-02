import { Typo } from "src/Components/Typography/Typography";


const IconTextCard = function(props){

    const {icon, heading, description} = props;

    return (<div className="it-card fc ai-c jc-c p-10 fg-3 br-2x palette-accent-lighter">
                <div className="icon-container">
                    {icon}
                </div>
                <Typo comp="h3" type="head" size="xsmall" accent={true}>{heading}</Typo>
                <Typo comp="p" >{description}</Typo>
            </div>)

}


export {IconTextCard}