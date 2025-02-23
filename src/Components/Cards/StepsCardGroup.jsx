import { useMemo } from "react";
import { LayoutMiddleSection } from "../Layouts/LayoutSections/LayoutMiddleSection"
import { Typo } from "../Typography/Typography"
import { StepCard } from "./StepCards";


const StepsCardGroup = function(props){

    const { header, description, cards } = props;

    const _cards = useMemo(function(){
        if(!cards){
            return;   
        }

        return cards.map(function(card){
            return <StepCard
                        {...card}
                        key={card.id}
                    />
        });
    },[cards])


    return (<LayoutMiddleSection className="py-33 ta-c">
                <div className="ta-c pb-12">
                    <Typo size="large" className=" pb-15">{header}</Typo>
                    <Typo type="head" size="medium" comp="h3" className=" pb-35" accent={true}>{description}</Typo>
                </div>
                <div className="fr fg-8 px-30 step-cards-wrapper">
                    {_cards}
                </div>
            </LayoutMiddleSection>)
}

export {StepsCardGroup}