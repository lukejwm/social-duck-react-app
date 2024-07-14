import BannerSection from "./BannerSection.tsx";
import AboutSection from "./AboutSection.tsx";
import GallerySection from "./GallerySection.tsx";
import ContactSection from "./ContactSection.tsx";
import SaveAndPreviewButtons from "../../components/saveAndPreviousButtons/SaveAndPreviousButtons.tsx";

function Home() {

    return (
        <>
            <SaveAndPreviewButtons />
           <BannerSection />
            <AboutSection />
            <GallerySection />
            <ContactSection />
        </>
    )
}

export default Home
