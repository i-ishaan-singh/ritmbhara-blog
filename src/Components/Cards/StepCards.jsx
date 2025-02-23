import { Typo } from "../Typography/Typography"


const StepCard = function(props){


    return <div className="step-card br pt-30 px-22 pb-20 palette-accent-lighter">
                <Typo  type="head" size="medium" className="step-name palette-accent" accent={true} >
                    {props.stepName}
                </Typo>
                <Typo type="head" size="small" accent={true} comp="h4" className="pb-12 step-card-header">{props.header}</Typo> 
                <Typo>{props.description}</Typo>   
            </div>
}

export {StepCard}