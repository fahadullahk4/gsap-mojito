import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Art = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isLaptop = useMediaQuery({ maxWidth: 1024 });
	// const isDesktop = useMediaQuery({ minWidth: 1024 });

	useGSAP(() => {
		const start = isMobile ? "top 20%" : isLaptop ? "top -7%" : "top -27%";
		// const start = isMobile
		// 	? "top 20%"
		// 	: isLaptop
		// 	? "top -7%"
		// 	: isDesktop
		// 	? "top -25%"
		// 	: "top  ";
		const end = isMobile ? "bottom center" : "bottom -70%";

		const maskTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#art",
				start,
				end,
				pin: true,
				scrub: 1.5,
			},
		});

		maskTimeline
			.to(".will-fade", {
				opacity: 0,
				stagger: 0.2,
				ease: "power1.inOut",
			})
			.to(".masked-img", {
				scale: 1.5,
				ease: "power1.inOut",
				maskPosition: "center",
				maskSize: "400%",
				duration: 1,
			})
			.to("#masked-content", {
				opacity: 1,
				duration: 1,
				ease: "power1.inOut",
			});
	});

	return (
		<div id="art">
			<div className="container mx-auto h-full pt-20">
				<h2 className="will-fade">THE ART</h2>

				<div className="content">
					<ul className="space-y-4 will-fade">
						{goodLists.map((feature, index) => (
							<li key={index} className="flex items-center gap-2">
								<img src="/images/check.png" alt="check" />
								<p>{feature}</p>
							</li>
						))}
					</ul>
					<div className="cocktail-img">
						<img
							src="/images/under-img.jpg"
							alt=""
							className="abs-center masked-img size-full object-contain"
						/>
					</div>
					<ul className="space-y-4 will-fade">
						{featureLists.map((feature, index) => (
							<li key={index} className="flex items-center justify-start gap-2">
								<img src="/images/check.png" alt="check" />
								<p className="md:w-fit w-60">{feature}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="masked-container">
					<h2 className="will-fade">Sip-Worthy Perfection</h2>
					<div id="masked-content" className="-mb-5 ">
						<h3>Made with Craft, Poured with Passion</h3>
						<p>This isn't just a cocktail. It's a masterpiece.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Art;
