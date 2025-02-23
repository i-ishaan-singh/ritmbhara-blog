import { BottomSectionSeparator } from "src/Components/Layouts/Separators/SectionSeparator";
import { Footer } from "src/Pages/Footer/Footer";
import { Header } from "src/Pages/Header/Header";

const AppLayout = function(props){

    const {children} = props;

    return <div className="rt-application">
                            <Header/>
                            <div className="rt-content">
                                {children}
                            </div>
                            
                            <BottomSectionSeparator/>
                            <Footer/>
                        </div>;
}

export {AppLayout}