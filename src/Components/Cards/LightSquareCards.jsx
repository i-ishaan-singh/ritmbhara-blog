import { Button } from "../Buttons/Buttons";
import { Typo } from "../Typography/Typography"


const LightSquareCards = function(props){
 
    const {header, description, cta} = props;

    return (<li className="light-square-cards palette-light ta-c px-30 py-20">
                <Typo
                    comp="h2"
                    accent={true} type="head" size="small"
                    className="pb-10"
                >
                    {header}
                </Typo>
                <Typo size="small" className="pb-35">
                    {description}
                </Typo>
                <div className="lsc-button fw ta-c">
                    <Button >                    
                        {cta}
                    </Button>
                </div>
                
            </li>)
}

export {LightSquareCards}