import { Route, Routes } from "react-router-dom";
import { HomePage } from "src/Pages/HomePage/HomePage";

const AppRoutes = function(){

    return (<Routes>
                <Route path={'/'} element={<HomePage/>} />
            </Routes>)

}

export {AppRoutes}