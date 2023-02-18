import { events } from "../../lib/events";

import { colorMap } from "../../lib/hygraph";

import { Section } from "../../components/Section";
import { Container } from "../../components/Container";
import EventShowcase from "../../components/EventShowcase/EventShowcase";
import { Smiley } from "../../components/Smiley";

export interface Event {
	id: string;
	title: string;
	day: number;
	href: string;
	link: string;
	image: string;
	categories: string;
	description: string;
	color: string;
}

const getEvents = async () => {
	// const { events }: { events: Event[] } = await hygraph.request(QUERY);

	let avColors = Object.keys(colorMap).filter(
		(el) =>
			![
				"yellow",
				"lavender",
				"lilla",
				"sad_orange",
				"orange",
				"green",
			].includes(el)
	);

	await Promise.all(
		events.map(async (event) => {
			const color = avColors[Math.floor(Math.random() * avColors.length)];
			event.color = color;

			avColors = avColors.filter((el) => el !== color);
		})
	);

	return events;
};

const WorkPage = async () => {
	const events = await getEvents();

	return (
		<>
			<section className="scroll-mt-[72px] bg-black text-white md:scroll-mt-[88px]">
				<main className="mx-auto max-w-8xl space-y-16 py-16 px-8 md:space-y-32 md:py-32 md:px-16">
					<div className="relative space-y-8 md:space-y-0">
						<h2 className="text-h1-mobile md:mb-8 md:text-d1-mobile xl:text-d1">
							Our Events and Workshops
						</h2>
						<p className="text-body xl:max-w-[680px]">
							From thrilling workshops, to extremely entertaining pageants, performances, and competitions, for all of your hidden hobbies and talents, and across various stimulating domains…

							There&apos;s something at Sattva for everybody, plus an immensely scintillating Pro-Night adorned by famed artists and celebs!
						</p>
						<Smiley className="absolute -top-16 right-0 h-[64px] w-[65px] text-light-cyan md:h-[128px] md:w-[130px] xl:-top-0 xl:right-16 xl:h-[192.2px] xl:w-[196.23px]" />
					</div>
				</main>
			</section>
			<ul>
				{events.map(({ id, ...props }, i) => (
					<li key={id}>
						<Section className="bg-green">
							<Container>
								<EventShowcase {...props} />
							</Container>
						</Section>
					</li>
				))}
			</ul>
		</>
	);
};

export default WorkPage;