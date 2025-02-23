import classNames from "classnames"

const Bars = function(props){

    const {onClick} = props

    const _classNames = classNames('rt-icon', props.className);

    return <svg onClick={onClick} tabIndex="0" xmlns="http://www.w3.org/2000/svg" className={_classNames} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
}

export { Bars }