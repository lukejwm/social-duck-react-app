import { Outlet } from "react-router-dom";
// import AppHeader from "./AppHeader.tsx";
import AppFooter from "./AppFooter.tsx";
import AppHeader from "./AppHeader.tsx";

const Layout = () => {
    return (
        <>
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1">
                    <Outlet/>
                </div>
                <AppFooter/>
            </div>

            {/*<div className="header">*/}
            {/*    <AppHeader />*/}
            {/*</div>*/}

            {/*<div className="app-content">*/}
            {/*    <Outlet />*/}
            {/*</div>*/}

        </>
    );
};

export default Layout;
