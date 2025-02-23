import { useCallback, useContext, useMemo, useState } from "react";
import { Typo } from "../Typography/Typography"
import { LightSquareCards } from "./LightSquareCards";
import { ArrowLeft, ArrowRight } from "react-feather";
import { ApplicationContext } from "src/Context/ApplicationContext";


const LightSquareCardGroup = function({ header, cards }){


    const {responsiveBreakpoint} = useContext(ApplicationContext);
    
    
    const rendering = useMemo(function(){
        if(responsiveBreakpoint >= 4){
            return 3;
        }else if(responsiveBreakpoint >= 2){
            return 2;
        }
        return 1;
    },[responsiveBreakpoint]);

    const [idx, setIdx] = useState(0);

    const _cards = useMemo(function(){
        if(!cards){
            return;   
        }

        return cards.map(function(card){
            return <LightSquareCards
                        {...card}
                        key={card.id}
                    />
        });


    },[cards]);

    const viewingIndex = useMemo(function(){
        const length = _cards.length;

        const arr = []

        for(let i = 0; i < rendering; i++){
            arr.push(_cards[(idx+i)%length]);
        }

        return arr;

    },[_cards, idx, rendering]);

    const _moveNext = useCallback(function(){
        setIdx(function(prev){
            return (prev+1)%_cards.length;
        });
    },[_cards.length]);

    const _movePrev = useCallback(function(){
        setIdx(function(prev){ 

            prev = prev-1;
            if(prev <0){
                prev = _cards.length-1;
            }
            return prev;
        });
    },[_cards.length]);

    return <div className="pt-28 pb-42 px-40 lsc">
                <div className="lsc-lft-arr palette-accent-lighter" onClick={_movePrev}>
                    <ArrowLeft/>
                </div>
                <div className="ta-c pb-22">
                    <Typo type="head" size="large" accent={true}>{header}</Typo>
                </div>
                <ul className="fr fg-20">
                    {viewingIndex}
                </ul>
                <div className="lsc-rt-arr  palette-accent-lighter" onClick={_moveNext}>
                    <ArrowRight/>
                </div>
            </div>


}

export {LightSquareCardGroup}