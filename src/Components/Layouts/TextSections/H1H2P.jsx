import { Typo } from "src/Components/Typography/Typography";

const H1h2p = function(props){

    const {header, description, quote} = props;

    return <div className="fc ai-c jc-c fg-6 ta-c py-15">
                <Typo comp="h1">{header}</Typo>
                <Typo accent={true} type="head" size="large" comp="h2">{description}</Typo>
                <Typo size='medium' comp="p">{quote}</Typo>
            </div>
}

export {H1h2p}