import {Layout} from "../../layout/layout.jsx";
import {HeroSection} from "./sections/hero.jsx";
import {InfoSection} from "./sections/info.jsx";
import {SliderSection} from "./sections/slider.jsx";
import {AboutSection} from "./sections/about.jsx";

export const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <InfoSection/>
            <SliderSection/>
            <AboutSection/>
        </Layout>
    );
};
