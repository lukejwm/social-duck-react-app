import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TemplateViewer from "./components/templateViewer/TemplateViewer.tsx";
import SocialMediaIntegration from "./pages/SocialMediaIntegration.tsx";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/homePage/Home.tsx"));
const About = lazy(() => import("./pages/aboutPage/About.tsx"));
const Contact = lazy(() => import("./pages/contactPage/Contact.tsx"));
const Login = lazy(() => import("./pages/login/Login.tsx"));
const Register = lazy(() => import("./pages/registration/Register.tsx"));
const OnboardingWelcome = lazy(() => import("./components/onboarding/OnboardingWelcome.tsx"));
const OnboardingTextContent = lazy(() => import("./components/onboarding/OnboardingTextContent.tsx"));
const OnboardingMenu = lazy(() => import("./components/onboarding/OnboardingMenu.tsx"));
const OnboardingGallery = lazy(() => import("./components/onboarding/OnboardingGallery.tsx"));
const OnboardingSuccess = lazy(() => import("./components/onboarding/OnboardingSuccess.tsx"));

function App() {
    return (
        <HashRouter>
            <div className="SocialDuckApp">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="social-media" element={<SocialMediaIntegration />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="onboarding">
                            <Route index element={<OnboardingWelcome />} />
                            <Route path="1" element={<OnboardingTextContent />} />
                            <Route path="2" element={<OnboardingMenu />} />
                            <Route path="3" element={<OnboardingGallery />} />
                            <Route path="success" element={<OnboardingSuccess />} />
                        </Route>
                        <Route path="*" element={<div>404 Not Found</div>} />
                        <Route path="template" element={<TemplateViewer />} />
                    </Routes>
                </Suspense>
            </div>
        </HashRouter>
    );
}

export default App;
