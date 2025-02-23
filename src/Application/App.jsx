import { BrowserRouter as Router} from "react-router-dom";
import { ApplicationProvider } from 'src/Context/ApplicationContext';
import { AppLayout } from './Layout/AppLayout';
import { AppRoutes } from './Routes/AppRoutes';
import { ApplicationHelmet } from "./HelmetData";

function App() {
	return (<Router>
				<ApplicationHelmet/>
				<ApplicationProvider>
					<AppLayout>
						<AppRoutes/>
					</AppLayout>
				</ApplicationProvider>
			</Router>)

}

export default App