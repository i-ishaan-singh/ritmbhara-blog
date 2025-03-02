import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import { PageLoader } from "src/Pages/PageLoader/PageLoader";

const ContactUs = lazy(() => import("src/Pages/ContactUs/ContactUs"));
const HomePage = lazy(() => import("src/Pages/HomePage/HomePage"));

const _loading = <PageLoader/>;

const AppRoutes = function(){

    return (<Suspense fallback={_loading}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>} />
                    <Route path={'/contact-us'} element={<ContactUs/>} />
                </Routes>
            </Suspense>)

}

export {AppRoutes}