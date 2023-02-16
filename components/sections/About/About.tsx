import Image from "next/legacy/image";
import { ComponentProps } from "react";

import { Section } from "../../Section";
import { Container } from "../../Container";
import { Hourglass } from "../../Hourglass";
import NowPlaying from "../../NowPlaying/NowPlaying";

import me from "../../../public/images/poly-me.png";

export const AboutSection = ({
	standAlone = false,
	...props
}: ComponentProps<typeof Section> & { standAlone?: boolean }) => {
	const experienceYears =
		new Date().getFullYear() - new Date(2018, 10).getFullYear();

	return (
		<Section {...props}>
			<Container className="md:relative md:space-y-0">
				<div
					className={`flex justify-center md:absolute md:right-16 xl:right-32 ${standAlone ? " md:top-32 md:rotate-12" : "md:-top-16"
						}`}
				>
					<Hourglass>
						<span className="absolute inset-0 left-4 overflow-hidden border-b-2">
							{/* <Image
								src={me}
								layout={"fill"}
								quality={100}
								priority
								objectPosition={"top left"}
								objectFit={"cover"}
								alt={"My profile picture"}
							/> */}
						</span>
					</Hourglass>
				</div>
				<div>
					<div className={`space-y-8 ${standAlone ? "" : "mb-16"}`}>
						<h2
							className={
								standAlone
									? "text-h1-mobile md:text-d1-mobile xl:text-d1"
									: "text-h2-mobile md:text-d2-mobile xl:text-d2"
							}
						>
							About us
						</h2>
						<p className="text-body xl:max-w-[680px]">
						An apparently mundane auto rickshaw can take us places and be instrumental in experiences that will be latched onto our minds forever, and the simple activity of listening to music can open up our prospects for thrill and adventure...
						</p>
						<p className="text-body xl:max-w-[680px]">We&apos;re redefining normalcy, and we&apos;re thrilled to have you along on the ride…</p>
						<p className="text-body xl:max-w-[680px]">This is Safarnama with Sattva 2023, and we&apos;re just getting started!</p>
					</div>
					{/* {!standAlone && <NowPlaying />} */}
				</div>
			</Container>
		</Section>
	);
};
