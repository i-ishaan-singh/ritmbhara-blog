

const RightLeftImageSection = function(props){

    const {leftImage, rightImage, children} = props;

    return (<div className="rl-img contrast-base py-33 fr">
                <div className="img-c fw br-tr br-br rl-i-l">
                    <img src={leftImage}/>
                </div>
                <div className="rl-image-content px-20">
                    {children}
                </div>
                <div className="img-c fw br-tl br-bl  rl-i-r">
                    <img src={rightImage}/>
                </div>
            </div>)


}

export {RightLeftImageSection}