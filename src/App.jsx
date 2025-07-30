import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<div>
			<Navbar />
      <HeroSection/>
      <div className="h-dvh bg-black"></div>
		</div>
	);
};

export default App;
