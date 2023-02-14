import Link from "next/link";

import { AboutSection } from "../../components/sections/About";
import Artists from "../../components/TopArtists/TopArtists";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
import { Section } from "../../components/Section";

import { GenreSolarSystem } from "./GenreSolarSystem";

const AboutPage = () => {

	return (
		<>
			<Section className="h-fit relative bg-lavender text-white">
				<div
					aria-hidden
					className="pointer-events-none absolute top-0 bottom-0 right-0 left-1/2 bg-[url('/images/notes-tile.png')] bg-repeat opacity-10"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-lavender to-lavender/0"></div>
				</div>
				<Container className="relative">
					<div className="space-y-8">
						<h2 className="text-h2-mobile md:text-d2-mobile xl:text-d2">
							What we have in store
						</h2>
						<p className="text-body xl:max-w-[680px]">
							With a lineup of exciting events, workshops, and competitions, the festival promises to be an unforgettable experience. From music and dance to drama and workshops, there's something for everyone.
						</p>
						<p className="text-body xl:max-w-[680px]">
							Plus if you want you can get a cool looking poster with
							your top artists and tracks, kind of like a{" "}
							<a
								href="https://www.spotify.com/wrapped"
								rel="noopener noreferrer"
								target={"_blank"}
								className="underline underline-offset-2 hover:no-underline"
							>
								Spotify Wrapped
							</a>{" "}
							but in miniature.
						</p>
						<Button as={Link} href="/music-stats">
							Get your Music-Stats
						</Button>
					</div>
					<div className="p-10">
          <GenreSolarSystem />
					</div>
				</Container>
			</Section>
		</>
	);
};

export default AboutPage;
