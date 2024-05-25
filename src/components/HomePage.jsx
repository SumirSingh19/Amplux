import Contact from "./Contact";
import Featured from "./Featured";
import InnovativeFeatures from "./InnovativeFeatures";
import Intro from "./Intro";
import MadeInIndia from "./MadeInIndia";
import ScreenSolutions from "./ScreenSolutions";
import ScreenCarousel from "./ScreensCarousel";

const HomePage = () => {
    return (
        <div>
            <Intro/>
            <ScreenSolutions/>
            <MadeInIndia />
            <InnovativeFeatures/>
            <ScreenCarousel />
            <Featured/>
            <Contact />
        </div>
    )
};

export default HomePage;