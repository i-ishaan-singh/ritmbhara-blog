
import { NavigationLink } from 'src/Utils/NavigationLink/NavigationLink'
import logo from '../../assets/images/ritmbhara-logo.svg'
import { Facebook, Instagram, Mail, Youtube } from 'react-feather'

const Footer = function(){


    return <div className="palette-accent px-80 py-20 fr jc-c">
                <div className="fw"></div>
                <div className="center-section fw fc jc-c ai-c fg-10">
                    <img src={logo} className="footer-logo"/>
                    <div className="footer-links fr fg-10">
                        <NavigationLink to="http://www.facebook.com" className="footer-link ai-c jc-c">
                            <Facebook size="2em"/>
                        </NavigationLink>

                        <NavigationLink href="http://www.instagram.com" className="footer-link ai-c jc-c">
                            <Instagram size="2em"/>
                        </NavigationLink>

                        
                        <NavigationLink target="_blank" to="http://www.youtube.com" className="footer-link ai-c jc-c">
                            <Youtube size="2em"/>
                        </NavigationLink>
                        
                        <NavigationLink to="mailto:rt.parivaar@gmail.com" className="footer-link ai-c jc-c">
                            <Mail size="2em"/>
                        </NavigationLink>

                    </div>
                </div>
                <div className="fw"></div>

            </div>

}

export {Footer}