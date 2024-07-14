import {CFooter} from "@coreui/react";

const AppFooter = () => {
    return (
        <CFooter className="px-4">
            <div>
                <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
                    Made using CoreUI
                </a>
                <span className="ms-1">&copy; 2024 Social Duck.</span>
            </div>
        </CFooter>
    );
};

export default AppFooter;
