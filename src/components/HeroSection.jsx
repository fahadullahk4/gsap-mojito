import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

const HeroSection = () => {
	const videoRef = useRef();

	const isMobile = useMediaQuery({ maxWidth: 768 });
	useGSAP(() => {
		const heroSplit = new SplitText(".title", {
			type: "chars, words",
		});
		const paragraphSplit = new SplitText(".subtitle", {
			type: "lines",
		});

		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.07,
		});

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.07,
			delay: 1,
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(".right-leaf", { y: 200 }, 0)
			.to(".left-leaf", { y: -200 }, 0);

		const startValue = isMobile ? "top 50%" : "center 60%";
		const endValue = isMobile ? "120% top" : "bottom top";

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "video",
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
			},
		});
		videoRef.current.onloadedmetadata = () => {
			tl.to(videoRef.current, {
				currentTime: videoRef.current.duration,
			});
		};
	}, []);
	return (
		<>
			<section id="hero" className="noisy">
				<h1 className="title">MOJITO</h1>

				<img
					src="/images/hero-left-leaf.png"
					alt="left-leaf"
					className="left-leaf"
				/>
				<img
					src="/images/hero-right-leaf.png"
					alt="right-leaf"
					className="right-leaf"
				/>
				<div className="body">
					<div className="content md:mt-25">
						<div className="space-y-5 hidden md:block ">
							<p>Cool. Crisp. Classic</p>
							<p className="subtitle">
								Sip the Spirit <br /> of Summer
							</p>
						</div>
						<div className="view-cocktails">
							<p className="subtitle">
								Every cocktail on our menu is a blend of premium ingredients,
								carefully - designed to delight your senses.
							</p>
							<a href="#cocktails"> View Cocktails</a>
						</div>
					</div>
				</div>
			</section>

			<div className="video absolute inset-0">
				<video
					muted
					playsInline
					preload="auto"
					ref={videoRef}
					src="/videos/output.mp4"
				/>
			</div>
		</>
	);
};

export default HeroSection;
