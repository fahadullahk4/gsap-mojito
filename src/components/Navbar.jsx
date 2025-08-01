import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { navLinks } from "../../constants";

const Navbar = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});
		tl.fromTo(
			"nav",
			{ backgroundColor: "transparent" },
			{
				backgroundColor: "#00000050",
				backgroundFilter: "blur(10px)",
				duration: 1,
				ease: "power1.inOut",
			}
		);
	});
	return (
		<nav>
			<div className="px-6">
				<a href="#home" className="flex items-center gap-2">
					<img src="/images/logo.png" alt="logo" />
					<p>Baba Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
