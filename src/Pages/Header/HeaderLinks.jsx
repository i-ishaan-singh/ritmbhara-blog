import { NavigationLink } from "src/Utils/NavigationLink/NavigationLink";
import PropTypes from 'prop-types';

const HeaderLinks = function(props) {

    const { link, children } = props;

    return (<NavigationLink to={link}>
                    {children}
            </NavigationLink>);
}


HeaderLinks.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node.isRequired
};

export { HeaderLinks };