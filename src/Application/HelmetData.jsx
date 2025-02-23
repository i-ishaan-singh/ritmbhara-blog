import { useMemo } from "react";
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"


const routes = {
    '/': {
        description: "Ritambhara Svasth Parivar: Rediscover your true self through healing, guided meditation, and spiritual empowerment. Join our community for transformative workshops, personalized guidance, and holistic wellness.",
        keywords: "spiritual awakening, healing, meditation, holistic wellness, ritambhara svasth parivar",
        title: ''
    }

}


const ApplicationHelmet = function(){

    const location = useLocation();

    const data = useMemo(function(){

        const _data = routes[location.pathname] || routes['/']
        

        return {
            ..._data,
            title: (_data.title)?(_data.title + '| Ritambhara Svasth Parivar'):'Ritambhara Svasth Parivar'
        }

    },[location])



    return (<Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.keywords} />
            </Helmet>)

}

export {ApplicationHelmet}