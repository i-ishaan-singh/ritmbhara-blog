import { useMemo } from 'react';
import { ArrowRight } from 'react-feather';
import { Typo } from '../Typography/Typography';

const emptyArr = [];

const ArrowList = function(props){

    const {data=emptyArr} = props;

    const _items = useMemo(function(){
        return data.map(function(_i, idx){
            return <div key={idx} className="list-item fr fg-10">
                        
                        <ArrowRight size="2em"/>
                        <Typo comp="div" className="fw">
                            {_i}
                        </Typo>
                    </div>    
        })    
    } ,[data]);


    return <div className="fw fc fg-20">
                {_items}
            </div>


}

export {ArrowList}  