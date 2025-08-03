import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<Cocktails />
			<About />
			<Art />
		</div>
	);
};

export default App;
