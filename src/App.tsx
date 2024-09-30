import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TemplateViewer from "./components/templateViewer/TemplateViewer.tsx";
import SocialMediaIntegration from "./pages/socialMediaPage/SocialMediaIntegration.tsx";
import WebBuilderPage from "./pages/webBuilderPage/WebBuilderPage.tsx";
import WaitlistPage from "./pages/waitlistPage/WaitlistPage.tsx";
import BannerSection from "./pages/webBuilderPage/page-sections/BannerSection.tsx";
import BusinessDetailsSection from "./pages/webBuilderPage/page-sections/BusinessDetailsSection.tsx";
import AboutSection from "./pages/webBuilderPage/page-sections/AboutSection.tsx";
import EventsSection from "./pages/webBuilderPage/page-sections/EventsSection.tsx";
import MenuSection from "./pages/webBuilderPage/page-sections/MenuSection.tsx";
import GallerySection from "./pages/webBuilderPage/page-sections/GallerySection.tsx";
import ContactSection from "./pages/webBuilderPage/page-sections/ContactSection.tsx";
import WebsiteStylingSection from "./pages/webBuilderPage/page-sections/WebsiteStylingSection.tsx";

// Lazy load pages for code splitting
const HomePage  = lazy(() => import("./pages/homePage/HomePage.tsx"));
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
                            <Route index element={<HomePage />} />
                            <Route path="web-builder" element={<WebBuilderPage />}>
                                <Route path="wb-business-details" element={<BusinessDetailsSection />} />
                                <Route path="wb-banner" element={<BannerSection />} />
                                <Route path="wb-about" element={<AboutSection />} />
                                <Route path="wb-events" element={<EventsSection />} />
                                <Route path="wb-menu" element={<MenuSection />} />
                                <Route path="wb-gallery" element={<GallerySection />} />
                                <Route path="wb-contact" element={<ContactSection />} />
                                <Route path="wb-site-styling" element={<WebsiteStylingSection />} />
                            </Route>
                            <Route path="social-media" element={<SocialMediaIntegration />} />
                            <Route path="waitlist" element={<WaitlistPage />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/onboarding">
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
