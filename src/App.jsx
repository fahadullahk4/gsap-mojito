import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<div>
			<Navbar />
      <HeroSection/>
      <Cocktails/>
		</div>
	);
};

export default App;
