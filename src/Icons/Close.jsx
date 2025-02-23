import classNames from "classnames"

const Close = function(props){

    const {onClick} = props

    const _classNames = classNames('rt-icon', props.className);

    return <svg tabIndex="0" className={_classNames} onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
  
}

export { Close }